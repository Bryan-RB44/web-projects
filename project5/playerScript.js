// User position (NEEDS TO BE HERE OUTSIDE OF window.onload AT ALL TIMES!!!!!)
let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let runGame = false;

window.onload = () => {
    const playerSprite = document.getElementById("playerSprite");

    // Since I use a spritesheet, I have to jot down how wide the each frame is and how many frames there are for animation purposes
    const frameWidth = 64;
    const frameCount = 2;

    let currentFrame = 0;
    let frameTimer = 0;
    const frameSpeed = 100;


    // Player speed (pixels per second)
    // 250 was the original speed but for demo purposes it's been raised.
    const speed = 300;

    // Variable to keep track of what keys are being held
    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    // Function to update player position
    function updatePosition() {
        playerSprite.style.left = x + "px";
        playerSprite.style.top = y + "px";
    }

    // Function to center the player when the page gets loaded.
    function centerSprite() {
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
        updatePosition();
    }

    // Event listener which handles movement for when the arrow keys are pressed
    document.addEventListener("keydown", (event) => {
        if (event.key in keys) {
            keys[event.key] = true;
            // Even though overflow is hidden in the CSS, this is just a failsafe to prevent arrow keys from scrolling any part of the page
            event.preventDefault();
        }
    });
    // Event listener which stops movement if the key isn't pressed anymore
    document.addEventListener("keyup", (event) => {
        if (event.key in keys) {
            keys[event.key] = false;
            event.preventDefault();
        }
    });

    // WARNING: Next part is very messy so for future use I'm writing down how this whole part works
    // Variable to store the timestamp of the previous frame (nothing for now)
    let lastTime = null;

    // Function for a loop which controls user animation, collision, etc.
    // (timestamp is given by the requestAnimationFrame function)
    function gameLoop(timestamp) {
         if (!runGame) return;

        if (!lastTime) lastTime = timestamp;

        // Variable "delta" is set as the time passed since the last frame (in milliseconds)
        const delta = (timestamp - lastTime) / 1000;
        lastTime = timestamp;

        // New x and y variables to store DIRECTIONS (hence the "d"), with different combinations for different directions (easier to understand by drawing it out)
        // EXAMPLES:
        // UP: dx == 0 and dy == -1
        // DOWN: dx == 0 and dy == 1
        // LEFT: dx == -1 and dy == 0
        // RIGHT: dx == 1 and dy == 0
        let dx = 0;
        let dy = 0;

        if (keys.ArrowUp) dy -= 1;
        if (keys.ArrowDown) dy += 1;
        if (keys.ArrowLeft) dx -= 1;
        if (keys.ArrowRight) dx += 1;

        // Funny math part to make it so diagonal movement isn't faster than regular movement (funny in how this is needed in almost anything where you control something with directional key inputs)
        if (dx !== 0 && dy !== 0) {
            const inv = Math.sqrt(2) / 2;
            dx *= inv;
            dy *= inv;
        }

        // Movement based on speed and time
        // (Basically: movement = which way to move * player speed * time since last frame so frames are run cosistently across slow and fast devices)
        let proposedX = x + dx * speed * delta;
        let proposedY = y + dy * speed * delta;

        // This part keeps the player sprite inside the window (part 1) and used for collision check
        const spriteWidth = playerSprite.offsetWidth;
        const spriteHeight = playerSprite.offsetHeight;

        // Checking collision between user and objects
        if (!willCollide(proposedX, proposedY, spriteWidth, spriteHeight)) {
            // Keep moving if nothing's in the way
            x = proposedX;
            y = proposedY;
        } else {
            // Otherwise, slide off it
            if (!willCollide(proposedX, y, spriteWidth, spriteHeight)) {
                x = proposedX;
            }
            if (!willCollide(x, proposedY, spriteWidth, spriteHeight)) {
                y = proposedY;
            }
        }
        // Keeping user inside window (part 2)
        x = Math.max(0, Math.min(window.innerWidth - spriteWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - spriteHeight, y));

        // Room transitions
        // How close to the edge counts as going to a new room
        const edgeMargin = 2;

        // Top (north)
        if (y <= edgeMargin) {
            // After changeRoom(), x,y are repositioned via loadRoom()
            changeRoom("north");
        }
        // Down (south)
        else if (y + spriteHeight >= window.innerHeight - edgeMargin) {
            changeRoom("south");
        }

        // Right (east)
        if (x + spriteWidth >= window.innerWidth - edgeMargin) {
            changeRoom("east");
        }

        // Left (west)
        if (x <= edgeMargin) {
            changeRoom("west");
        }

        // Function to update the walk cycle animation which takes the time since the last frame and directions
        function updateAnimation(delta, dx, dy) {
            // Variable is made to keep track of when the player is moving or not
            const isMoving = dx !== 0 || dy !== 0;

            // If the player IS moving:
            if (isMoving) {
                // Elapsed time
                frameTimer += delta * 1000;
                // Once enough time passes, go on to the next frame
                // (Basically shift the background's position to the next sprite in the sheet)
                if (frameTimer >= frameSpeed) {
                    currentFrame = (currentFrame + 1) % frameCount;
                    playerSprite.style.backgroundPosition = `-${currentFrame * frameWidth}px 0px`;
                    frameTimer = 0;
                }
            } else {
                // Otherwise, reset the sprite to be the default
                currentFrame = 0;
                playerSprite.style.backgroundPosition = "0px 0px";
            }
        }

        // Note to Self: DO NOT CHANGE THE POSITION OF THESE!!!!
        // Move the sprite
        updatePosition();
        // Request the next frame of animation
        // (requestAnimationFrame is abuilt in function to grab animation frames)
        requestAnimationFrame(gameLoop);
        // Update the frame
        updateAnimation(delta, dx, dy)
    }

    // Game doesn't start until the user clicks start on the title screen.
    window.startGame = () => {
        if (runGame) return;

        runGame = true;

        // Reset the timing
        lastTime = null;

        // Put player at starting room and load initial room
        centerSprite();

        // Loading everything in case map.js doesn't load in time for whatever reason.
        if (typeof loadRoom === "function") {
            loadRoom("start");
        }

        // Setting up signs in the starting room so they work when the user starts to use the site.
        if (typeof window.setupInteractiveObjects === "function") {
            window.setupInteractiveObjects();
        }

        requestAnimationFrame(gameLoop);
    };
}