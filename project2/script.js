window.onload = ()=>{
    console.log("Hello! This Works!");

    // First skyline is found and selected
    const cityFront = document.querySelector(".cityFront");
    // Keeps adding the foreground skyline to the image track in the second div (class="cityFront")
    cityFront.innerHTML += cityFront.innerHTML;

    const cityBack = document.querySelector(".cityBack");
    cityBack.innerHTML += cityBack.innerHTML;

    const stars = document.querySelector(".stars");
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
};