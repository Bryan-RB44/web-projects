window.onload = () => {
    const form = document.querySelector("form");

    // Post/Form Section
    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault

            // Using .trim() in case the user leaves any spaces infront of their responses
            const name = document.getElementById("name").value.trim();
            const game = document.getElementById("game").value.trim();
            const text = document.querySelector("textarea").value.trim();

            // Prevents submission if user tries to make a post without a game's title.
            if (!game) {
                alert("Please enter a game title before posting!");
                return;
            }

            // Post should have the user's name, game they're from, and caption info.
            const post = {
                name,
                game,
                text
            };

            // Figuring out post stuff
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(post),
            });
            if (response.ok) {
                window.location.href = "postGallery.html";
            } else {
                alert("Failed to post."); // Error message for testing + useful to let you know if a user posts offline or not
            }
        })
    }

    // Gallery Section
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        fetch("/api/posts")
        .then((res) => res.json())
        .then((posts) => {
            gallery.innerHTML = "";

            // NOTE: Reverse is NEEDED so posts show up from newest to oldest
            posts.reverse().forEach((post) => {
                const div = document.createElement("div");
                div.className = "postBox";

                // Displaying the name of the poster and the game's title
                div.innerHTML = `
                    <p class='postName'>${post.name}</p>
                    <p class='postGame'>${post.game}</p>
                `;

                // Clicking the post will show the post's information using the modal
                div.addEventListener("click", () => {
                    document.getElementById("modalName").textContent = post.name;
                    document.getElementById("modalGame").textContent = post.game;
                    document.getElementById("modalText").textContent = post.text;
                    document.getElementById("postModal").style.display = "flex";
                });

                gallery.appendChild(div);
            });
        })
    }

    // Modal logic for closing viewed posts
    const modal = document.getElementById("postModal");
    const closeButton = document.getElementById("closeModal");

    if (modal && closeButton) {
        // Closing when clicking the button
        closeButton.addEventListener("click", () => {
            modal.style.display = "none";
        });

        // Closing if clicked outside of the popup window
        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}