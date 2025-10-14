// 1. Global Variables
let postContainer

// 2. Wait for window to load
window.onload = ()=> {
    // Make sure the element is loaded and exists before using it
    postContainer = document.getElementById('posts');

    getMessages();
}

// 3. Helper functions
// async means we can use fetch
// async needs an "await" pair
async function getMessages(){
    let response = await fetch('/all-messages');
    console.log(response);

    let json = await response.json();
    console.log(json.notes);

    for(let n of json.notes) {
        let newElement = document.createElement('div');
        let title = document.createElement('h3');
        title.textContent = n.username;
        let paragraph = document.createElement('p');
        paragraph.textContent += ' says ' + n.message + " a " + n.date;

        newElement.appendChild(title);
        newElement.appendChild(paragraph);

        postContainer.appendChild(newElement);
    }
}