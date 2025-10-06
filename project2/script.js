window.onload = ()=>{
    // console.log("Hello! This Works!");

    // First skyline is selected
    const cityFront = document.querySelector(".cityFront");
    // Adding the foreground skyline to the image track in the second div (class="cityFront")
    cityFront.innerHTML += cityFront.innerHTML;

    // Second skyline is selected
    const cityBack = document.querySelector(".cityBack");
    // Same thing as line 6 but with "cityBack" class
    cityBack.innerHTML += cityBack.innerHTML;

    // Stars are selected
    const stars = document.querySelector(".stars");
    // Same thing as line 6 but with "stars" class
    stars.innerHTML += stars.innerHTML;

    // This section uses GSAP to animate the scrolling effect for all of the image tracks
    // FORGROUND SKYLINE
    gsap.to(cityFront, {
        x: "-50%",
        duration: 120,
        repeat: -1,
        ease: "none"
    });
    //BACKGROUND SKYLINE
    gsap.to(cityBack , {
        x: "-50%",
        duration: 180,
        repeat: -1,
        ease: "none"
    });
    //STARS
    gsap.to(stars, {
        x: "-50%",
        duration: 300,
        repeat: -1,
        ease: "none"
    });

    // This section is to set up the meteor gif randomly appearing across the screen
    // METEOR FUNCTION
    function randomMeteor() {
        // Variable to select the meteor gif
        const meteor = document.querySelector('.randMeteor');

        // These next two variables are to get the screen's width and height using innerWidth and innerHeight respectively
        const screenW = window.innerWidth;
        const screenH = window.innerHeight;

        // Using Math.floor to avoid any decimals (mainly to keep it pixel perfect as possible) and Math.random to randomly choose a spot on the screen. The screen width is halved so the meteor only shows up in the top 50% of the screen. Also subtracting 48 from the screen's width so that the meteor doesn't try spawning around the right side of the screen where it'll be hidden (since the sprite is 48x48 in resolution)
        const randY = Math.floor(Math.random() * (screenH/2));
        const randX = Math.floor(Math.random() * (screenW-48));


        // Positioning the meteor each time the function runs. Pixels are used instead of percentages so it can truly .
        meteor.style.left = randX + 'px';
        meteor.style.top = randY + 'px';

        // Showing the meteor when it's placed
        meteor.style.display = 'block';

        // After 1.8 seconds, the gif should disappear. Specifically 1.8 since the animation is around ~1.9 seconds long so it's to avoid any weird visuals from the animation happening again.
        setTimeout(()=>{
            meteor.style.display = 'none';
        }, 1800);
    };
    // METEOR LOOP FUNCTION
    function meteorLoop() {
        // Variable to store the interval for when the meteor appears. Using CONST instead of LET since it's not being changed again later on, with the recalculation happening once the loop happens again
        const meteorInterval = Math.floor(Math.random() * 5000) + 5000; //Every 5-10 seconds basically

        setTimeout(()=>{
            // The randomMeteor() function is called to pick out a random position, show the gif, and then hide it
            randomMeteor();
            //The meteorLoop() function is called inside itself to create the loop and to set another value for the delay (meteorInterval), so that the next meteor appears after a different interval.
            meteorLoop();
        }, meteorInterval); //The value for the delay/meteorInterval is used as the second parameter. This is just how long until the next loop happens
    }
    // NOTE: To avoid confusion, the meteorLoop() inside itself is to create the loop process and create the interval until the next meteor. The meteorInterval within the second parameter is to plan out when the next loop process begins.

    // Making it loop by calling the meteorLoop()
    meteorLoop();
};