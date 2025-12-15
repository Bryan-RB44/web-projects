// Function for checking overlapping hitboxes
// NOTE for personal use: 2 rectangles named a and b. Each one has their x and y position, width, and height jotted down
function rectsOverlap(ax, ay, aw, ah, bx, by, bw, bh) {
    return (
        ax < bx + bw &&
        ax + aw > bx &&
        ay < by + bh &&
        ay + ah > by
        // Basically: Hitboxes are overlapping if a side of either rectangle are going into one another's side
    );
    //If everything is is true then they're overlaping
}

// Function to check if the player's position is colliding with any object
function willCollide(newX, newY, playerWidth, playerHeight) {

    // Variable for objects
    const objects = document.querySelectorAll(".obstacle");

    // Collision is checked one by one
    for (const obs of objects) {
        // Variables for object's position and size info
        // The offset[blank] (in order listed here) is for object's distance from left side of the screen to the object's x position, same but from top side to y position, object width, and object height 
        const ox = obs.offsetLeft;
        const oy = obs.offsetTop;
        const ow = obs.offsetWidth;
        const oh = obs.offsetHeight;

        // Run function from before. If the user's hitbox overlaps with an object's then stop
        if (rectsOverlap(newX, newY, playerWidth, playerHeight, ox, oy, ow, oh)) {
            return true;
        }
    }
    // Otherwise, no collision detected
    return false;
}