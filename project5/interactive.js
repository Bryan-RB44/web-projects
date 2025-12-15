document.addEventListener("DOMContentLoaded", () => {
    // Variables for the dialogue boxes
    const dialogOverlay = document.getElementById("dialogOverlay");
    const dialogText = document.getElementById("dialogText");
    const dialogClose = document.getElementById("dialogClose");

    // Function to show textbox
    function showDialog(text) {
        dialogText.textContent = text;
        dialogOverlay.classList.remove("dialog-hidden");
    }

    // Function to hide it.
    function hideDialog() {
        dialogOverlay.classList.add("dialog-hidden");
    }

    // Close button
    dialogClose.addEventListener("click", hideDialog);

    // Click outside the box to close as well
    dialogOverlay.addEventListener("click", (e) => {
        if (e.target === dialogOverlay) {
            hideDialog();
        }
    });

    // This is used to not mess with text appearing upon room entry
    window.showDialog = showDialog;
    window.hideDialog = hideDialog;

    // Function to make sure text doesn't get deleted upon room entry
    function setupInteractiveObjects() {
        const interactiveObjects = document.querySelectorAll(".interactiveObj");

        interactiveObjects.forEach((obj) => {
            // Avoid double binding the same element
            if (obj.dataset.interactiveBound === "true") return;

            // Text is displayed upon clicking element, if it doesn't load for whatever reason then there's placeholder text
            obj.addEventListener("click", () => {
                // I feel old for this reference.
                const text = obj.dataset.text || "I am error.";
                showDialog(text);
            });

            obj.dataset.interactiveBound = "true";
        });
    }
    // Called on load up
    setupInteractiveObjects();
    // Exposed so map.js can call this later
    window.setupInteractiveObjects = setupInteractiveObjects;
});