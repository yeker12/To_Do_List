const img = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.png",
    "6.png",
];
const BACKGROUND_CLASSNAME = "background";

const randomNum = Math.floor(Math.random() * img.length);
const currentImg = img[randomNum];

const backgroundImg = document.createElement("img");
backgroundImg.src = `../${currentImg}`;


//document.body.appendChild(backgroundImg);
document.body.style.backgroundImage = `url('${backgroundImg.src}')`;

