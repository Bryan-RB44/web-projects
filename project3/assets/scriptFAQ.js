window.onload = () => {
    console.log("This works!")

    const responseMap = {
        questionOne: { text: "* Just don't do anything stupid like harassing someone alright? Bad enough we're understaffed." },
        questionTwo: { text: "* Yup, no matter if it's indie, triple A, old, new, first person shooter, or puzzle. If you're coming fresh out of anywhere, why not make a post about it to take the steam off?" },
        questionThree: { text: "* Can you move something? As long as you can and it's somethin' digital, then sure, it counts. Now, even that has its limits. Afterall, who's heard of a game made in <a href='index.html'>HTML</a> or all that web nonsense?" },
        questionFour: { text: "* What are ya, a fed? Everything here should be under fair use, just don't tell Nintendo about this place alright..." }
    }

    // Making variables to change the right side content
    const rightText = document.getElementById("npcText");

    // Saving this for later
    // const rightImage = document.getElementById("npcImage");

    document.querySelectorAll(".pregunta").forEach(i => {
        i.addEventListener("click", () => {
            const { text } = responseMap[i.id];
            rightText.innerHTML = text;
        })
    })
}