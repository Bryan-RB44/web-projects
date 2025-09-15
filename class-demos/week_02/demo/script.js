// This is a comment in JavaScript!

// Always add this FIRST. This is the loading event, using an annonymous function.
window.onload = () => {
    // An alert can be used
    // alert('Page has loaded!');

    console.log("page is fully loaded");

    // Gives an array, which is a collection of variables which is harder to manipulate
    let allMyParagraphs = document.getElementsByTagName('p');
    console.log(allMyParagraphs);

    // More specific, but still returns an array.
    let blueParagraphs = document.getElementsByClassName('blue-paragraph');
    console.log(blueParagraphs);

    // We DON'T want to manipulate an array, it's harder to retrieve the data.
    // Arrays are comprised of a series of data IN ORDER.
    // First element is always at the 0th position, with the second element being at the 1st position.

    console.log(allMyParagraphs[0]);

    // ID's are the best way to retrieve individual elements from a page.
    let importantParagraph = document.getElementById('important-paragraph');
    console.log(importantParagraph);
    // Modifying content with JavaScript
    importantParagraph.innerHTML = "This is my new paragraph text! <span>Hi this is in a span!</span>";
    // Modifying style with JavaScript
    importantParagraph.style.color = 'violet';

    importantParagraph.classList.add('red-paragraph');

    let button = document.getElementById('click')
    // EIther of these two would work.
    button.addEventListener('click', ()=>{
        // Create a variable that's an instance of the element.
        let newElement = document.createElement("p");
        // Add content to the element
        newElement.textContent = "Hi";
        newElement.classList.add('greetings');
        // Reference to where we are on the page
        let container = document.body; // Body has a shorthand since it's used often.
        // Adding the element now!
        container.appendChild(newElement);
    })
    // button.onclick

    // Delete button to delete "hi's"
    let byeButton = document.getElementById("bye");
    byeButton.addEventListener('click', ()=>{
        let allMyGreetings = document.getElementsByClassName('greetings');
        console.log(allMyGreetings);
        allMyGreetings[0].remove();
    })
};