window.onload = () => {

    // We need to make a fetch request to the sever/database to retrieve the posts that currently exist
    loadPosts();
    loadVisits();
}

async function loadPosts(){
    const postContainer = document.getElementById("allPosts");

    // retrieves data from the database on my server
    const response = await fetch('populatePosts');

    // converts the response to json data
    const postsArray = await response.json();

    for (let post of postsArray) {
        // Creates the div that will hold all the post data and add post class
        let newDiv = document.createElement('div');
        newDiv.classList.add('post')

        // Span that holds the time
        let span = document.createElement('span');
        span.textContent = post.postTime;

        // Paragraph that holds the text from the database
        let paragraphText = document.createElement('p');
        paragraphText.textContent = post.postText;

        // Removing posts
        // Create button to delete posts
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        // gran the individual id by using post._id
        deleteButton.addEventListener('click', ()=>{
            handleClick(post._id);
        });

        // Create button to like a post
        let likeButton = document.createElement('button');
        likeButton.textContent = '<3'
        likeButton.addEventListener('click', ()=>{
            handleLike(post._id)
        })

        newDiv.append(deleteButton);
        newDiv.append(span);
        newDiv.append(paragraphText);
        newDiv.append(likeButton);

        postContainer.append(newDiv);
    }

    // console.log(response);
    // console.log(postsArray);
}

async function handleClick(postId) {
    // console.log("Button clicked: " + postId);

    // Confirmation for deleting posts
    alert("are you sure?");
    await fetch('/delete', {
        // method is the type of request
        method: "DELETE",
        // body is the data sent in json format
        body: JSON.stringify({id: postId}),
        // headers are what type of data should the server expect
        headers: {
            "Content-Type": "application/json"
        }
    }).then(()=>{
        window.location.href='/'
    })

}

async function handleLike(postId){
    await fetch('/like', {
        method: 'POST',
        body: JSON.stringify({id: postId}),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(()=>{
            window.location.href='/'
    })
}

async function loadVisits(){
    const visitsContainer = document.getElementById('visits');

    const response = await fetch('/visits');
    const json = await response.json();

    console.log(json);

    visitsContainer.textContent = "number of visits: " + json.visits;
}