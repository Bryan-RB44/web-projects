window.onload = () => {

    // Adding three paragraph elements that'll contain the sizes of the screen
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p = document.createElement('p')

    // Adding elements to page
    document.getElementById('content').appendChild(p)
    document.getElementById('content').appendChild(p2)
    document.getElementById('content').appendChild(p3)

    // Adding event listener for when the screen size changes
    window.addEventListener('resize', ()=>{
        p.innerHTML = "window inner width " + window.innerWidth;        
        p2.innerHTML = "window inner width " + document.getElementById('body').clientWidth;
        p3.innerHTML = "window inner width " + screen.width;
    })
}