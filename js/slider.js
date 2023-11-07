const images = [
    'images/pic-1.jpg', // 0
    'images/pic-2.jpg', // 1
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg', // 7
    'images/pic-9.jpg'  // 8
]

let imgIndex = 0;

const imgElement = document.getElementById('slider-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    // console.log(imgIndex, imgUrl);
    imgElement.setAttribute('src', imgUrl);
    imgIndex++;

}, 1500)