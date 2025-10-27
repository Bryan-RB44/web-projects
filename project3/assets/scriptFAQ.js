window.onload = () => {
    console.log("This works!")

    const responseMap = {
        questionOne: { 
            text: "* Just don't do anything stupid that would get you kicked outta public places normally, alright? Bad enough we're understaffed.",
            image: "images/ramb_01.png"
        },
        questionTwo: { 
            text: "* Yup, no matter if it's indie, triple A, old, new, first person shooter, or puzzle. If you're comin' fresh out of anywhere, why not make a post about it to take the steam off?",
            image: "images/ramb_02.png"
        },
        questionThree: { 
            text: "* Can you move somethin, or someone? If you can, then sure, it counts. Now, even that has its limits. Afterall, has there ever a game made in <a href='index.html'><b>JavaScript</b></a> or all that web nonsense? Well, maybe if you look well enough...",
            image: "images/ramb_03.png"
        },
        questionFour: { 
            text: "* What are ya, a fed? Everythin' here should be under fair use, just don't tell the big ones about this place alright...",
            image: "images/ramb_04.png"
        }
    }

    // Making variables for the right side content
    const rightText = document.getElementById("npcText");
    const rightImage = document.getElementById("npcImage");

    document.querySelectorAll(".pregunta").forEach(i => {
        i.addEventListener("click", () => {
            const { text, image } = responseMap[i.id];
            rightText.innerHTML = text;
            rightImage.src = image;
        })
    })
}