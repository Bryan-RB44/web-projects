document.addEventListener("DOMContentLoaded", () => {
    const titleScreen = document.getElementById("titleScreen");
    const startBtn = document.getElementById("startBtn");

    function startGameFromTitle() {
        // Start the site
        if (typeof window.startGame === "function") {
            window.startGame();
        }

        // Hide the title screen with a smooth transition (GSAP part)
        if (window.gsap) {
        gsap.to(titleScreen, {
            duration: 0.4,
            opacity: 0,
            onComplete: () => {
            titleScreen.style.display = "none";
            }
        });
        } else {
            titleScreen.style.display = "none";
        }
    }

    startBtn.addEventListener("click", startGameFromTitle);

    // Could also press "Enter" to start
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && titleScreen.style.display !== "none") {
            startGameFromTitle();
        }
    });
});