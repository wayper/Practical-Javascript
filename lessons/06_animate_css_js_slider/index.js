let sliderImages = document.querySelectorAll('.slider-box img');
let k = 0;

function mySlider() {
    console.log(k);
    console.log(sliderImages);
    let img = sliderImages[k];
    img.style.display = 'block';
    img.classList.add('animated', 'rollIn');
}

mySlider();