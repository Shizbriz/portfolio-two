function createBubble (){
    const section = document.getElementById("home")
    const createElement = document.createElement('span')
    let size = Math.random()*5;
    createElement.style.width = size + 'px';
    createElement.style.height = size + "px";
    createElement.style.left = Math.random() * innerWidth + "px";
    section.appendChild(createElement); 

    
}

setInterval(createBubble, 200)




