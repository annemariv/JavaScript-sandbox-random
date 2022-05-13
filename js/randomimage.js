const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg"];
myButton.addEventListener('click', changeImage);

function changeImage () {
    console.log("Hello!");

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = images[randomIndex];
}