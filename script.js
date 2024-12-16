const get = element => document.getElementById(element)

const openBtn = get('menu-btn')
const closeBtn = get('close-btn')
const menu = get('menu')
const copyright = get('copyright')

const firstImage = get('img-1')
const secondImage = get('img-2')
const thirdImage = get('img-3')



let currentImage = 0

if (openBtn && closeBtn){
    openBtn.addEventListener('click',()=>{
        menu.classList.add('show-menu')
        console.log('caca');
        
    })
    closeBtn.addEventListener('click',()=>{
        menu.classList.remove('show-menu')
        console.log('caca');
        
    })
}


copyright.innerText = `Copyright © ${new Date().getFullYear()} Ink'O'Mode Tattoos.`;


function displayImages(){
    firstImage.setAttribute("src", `images/gallery/${currentImage-1}.jpg`)
    secondImage.setAttribute("src", `images/gallery/${currentImage}.jpg`)
    thirdImage.setAttribute("src", `images/gallery/${currentImage+1}.jpg`)
}






function previousImage(){
    if (currentImage===1){
        currentImage = 147
    }else {
    currentImage -=1;
    console.log(currentImage)
    }

    displayImages()
}

function nextImage(){

    if (currentImage===147){
        currentImage = 1
    } else {
        currentImage +=1;
        console.log(currentImage)
    }
        displayImages()
    
    
}

nextImage()