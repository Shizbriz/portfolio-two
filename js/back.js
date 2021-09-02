function createBubble (){
    const section = document.getElementById("home")
    const createElement = document.createElement('span')
    let size = Math.random()*10;
    createElement.style.width = size + 'px';
    createElement.style.height = size + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    section.appendChild(createElement); 

    setTimeout(()=>{createElement.remove()}, 60000)
}

setInterval(createBubble, 300)




