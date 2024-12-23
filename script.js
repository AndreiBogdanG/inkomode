const get = element => document.getElementById(element)

const openBtn = get('menu-btn')
const closeBtn = get('close-btn')
const menu = get('menu')
const copyright = get('copyright')

const firstImage = get('img-1')
const secondImage = get('img-2')
const thirdImage = get('img-3')
const tattooTitle = get('tattoo-title')

const tattoos = {
    1: 'Paint Splash', 
    2: 'Name', 
    3: 'Motivational', 
    4: 'Family', 
    5: 'Birds', 
    6: 'Motivational', 
    7: 'Mandala', 
    8: 'Name', 
    9: 'Motivational', 
    10: 'Matching', 
    11: 'Motivational', 
    12: 'Motivational', 
    13: 'Slash Skull', 
    14: 'Years', 
    15: 'Plane', 
    16: 'Zodiac', 
    17: 'Motivational', 
    18: 'Zodiac', 
    19: 'Family', 
    20: 'Flowers', 
    21: 'Flowers', 
    22: 'Motivational', 
    23: 'Monogram', 
    24: 'Matching', 
    25: 'Motivational', 
    26: 'Flowers', 
    27: 'Motivational', 
    28: 'Crown', 
    29: 'Motivational', 
    30: 'Monograms', 
    31: 'Cover-Up', 
    32: 'Name', 
    33: 'Dreamcatcher', 
    34: 'Dreamcatcher', 
    35: 'Cartoon', 
    36: 'Eddie Skull', 
    37: 'Flowers', 
    38: 'Butterfly', 
    39: 'Butterfly', 
    40: 'Butterfly', 
    41: 'Motivational', 
    42: 'Butterfly', 
    43: 'Butterflies', 
    44: 'Motivational', 
    45: 'Butterflies', 
    46: 'Gang', 
    47: 'Family', 
    48: 'Gang', 
    49: 'Motivational', 
    50: 'Infinity', 
    51: 'Infinity', 
    52: 'Infinity', 
    53: 'Angel', 
    54: 'Angel', 
    55: 'Angel', 
    56: 'Heart', 
    57: 'Karma', 
    58: 'Flowers', 
    59: 'Gambling', 
    60: 'Lions', 
    61: 'Lions', 
    62: 'Lion', 
    63: 'Gambling', 
    64: 'Lotus', 
    65: 'Lotus', 
    66: 'Motivational', 
    67: 'Wolf', 
    68: 'Wolf', 
    69: 'Wolf', 
    70: 'Poppy', 
    71: 'Mandala', 
    72: 'Symbols', 
    73: 'Matching', 
    74: 'Family', 
    75: 'Moon', 
    76: 'Mountains', 
    77: 'Name', 
    78: 'Motivational', 
    79: 'Names', 
    80: 'Family', 
    81: 'Eyes', 
    82: 'Motivational', 
    83: 'Buddhism', 
    84: 'Keyboard', 
    85: 'UFO', 
    86: 'Panda', 
    87: 'Bird', 
    88: 'Warrior', 
    89: 'Crown', 
    90: 'Phoenix', 
    91: 'Phoenix', 
    92: 'Cat', 
    93: 'Cat', 
    94: 'Portrait', 
    95: 'Cartoons', 
    96: 'Names', 
    97: 'Matching', 
    98: 'Bird', 
    99: 'Bird', 
    100: 'Bird', 
    101: 'Birds', 
    102: 'Family', 
    103: 'Motivational', 
    104: 'Name', 
    105: 'Symbol', 
    106: 'Flowers', 
    107: 'Cartoon', 
    108: 'Names', 
    109: 'Scorpion', 
    110: 'Scorpion', 
    111: 'Motivational', 
    112: 'Family', 
    113: 'Faces', 
    114: 'Symbols', 
    115: 'Sleeve', 
    116: 'Sleeve', 
    117: 'Symbol', 
    118: 'Motivational', 
    119: 'Matching', 
    120: 'Abstract', 
    121: 'Motivational', 
    122: 'Family', 
    123: 'Symbols', 
    124: 'Lotus', 
    125: 'Family', 
    126: 'Matching', 
    127: 'Flowers', 
    128: 'Rose', 
    129: 'Rose', 
    130: 'Rose', 
    131: 'Roses', 
    132: 'Clover', 
    133: 'Triskelion', 
    134: 'Tribal', 
    135: 'AK-47', 
    136: 'Motivational', 
    137: 'Joker', 
    138: 'Face', 
    139: 'Symbols', 
    140: 'Bands', 
    141: 'Music', 
    142: 'Warrior', 
    143: 'Kunai', 
    144: 'Year', 
    145: 'Palm tree', 
    146: 'Year', 
    147: 'Name'
    }
    

let currentImage = 0

if (openBtn && closeBtn){
    openBtn.addEventListener('click',()=>{
        menu.classList.add('show-menu')
    })
    closeBtn.addEventListener('click',()=>{
        menu.classList.remove('show-menu')
    })
}

copyright.innerText = `Copyright © ${new Date().getFullYear()} Ink'O'Mode Tattoos.`;


function displayImages(){
    secondImage.setAttribute("src", `images/gallery/${currentImage}.jpg`)
    const tempTitle = `${currentImage}. ${tattoos[currentImage] || tattoos[1]}` 
    tattooTitle.innerText = tempTitle.toUpperCase()
}

function previousImage(){
    if (currentImage===1){
        currentImage = 147
    }else {
    currentImage -=1;
    }
    displayImages()
}

function nextImage(){
    if (currentImage===147){
        currentImage = 1
    } else {
        currentImage +=1;
    }
        displayImages()
}

function goHome(){
    window.open("index.html","_self")
}


if (secondImage) {
    nextImage()
}

