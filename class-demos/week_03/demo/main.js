// Way we are accessing the window in this class.
// ()=> is an annonymous function

window.onload = () =>{
    //Using const variable 
    // This variable will never change to another element
    const moveDiv = document.getElementById('move')

    //Getting the first button
    const rotateButton = document.getElementById('rotate')

    //Getting the stop button
    const stopButton = document.getElementById('stop')

    // Grabbing time paragraph
    const time = document.getElementById('time');

    // This will adjust the angle of div
    let angle = 0;

    //Create a variable to store which interval we want to stop at
    let intervalId;

    // Adjust the x position
    let leftPos = 0;
    let speed = 1;

    // Rotating the moveDiv using css and js
    rotateButton.addEventListener('click', ()=>{
        

        // setInterval takes to params:
        // 1. callback function (function that happens when the interval relapses)
        // 2. Amount of time before the interval happens again (in milliseconds)
        // 1 second = 1000 milliseconds
        intervalId = setInterval(()=> {
            angle++ // increase moveDiv by one

            // Grab the rotation using style
            // moveDiv.style.transform = "rotate(" + angle + "deg)"
            // OR
            //Shorthand to inject variables into strings
            moveDiv.style.transform = `rotate(${angle}deg)`

            if(leftPos >= window.innerWidth || leftPos < 0){
                speed = -1;
            }
            // Adding speed to left post
            leftPos += speed;
            // Change CSS propery based off math calc
            moveDiv.style.left = leftPos;

        }, 10);
    });

    // Makes rectangle stop moving
    stopButton.addEventListener('click', ()=>{
        clearInterval(intervalId);
    });

    

    setInterval(()=>{
        //Getting current browser/computer time
        let date = new Date();
        // % is remainder, allowing us to convert 24 hr time to 12 hr time by using the remainder after dividing by 12
        time.textContent = 
            (date.getHours()%12)+ 
            ":" + 
            date.getMinutes() + 
            ":" + 
            date.getMinutes();
    }, 1000);
};