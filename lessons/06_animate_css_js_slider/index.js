document.querySelector('button').onclick = mySlider;
let sliderImages = document.querySelectorAll('.slider-box img');
let k = 0;

function mySlider() {
    if (k < sliderImages.length) {
        console.log(k);
        let img = sliderImages[k];
        img.style.display = 'block';
        img.classList.add('animated', 'rollIn');
        img.addEventListener('animationend', ()=>{
            img.classList.add('animated', 'rollOut', 'delay-1s');
        });
        k++;
    } else {
        startNewSlider();
    }
}

function startNewSlider() {
    sliderImages.forEach((element) => {
        element.classList.remove('animated', 'rollIn', 'rollOut', 'delay-1s');
        element.style.display = 'none';
    });
    k = 0;
    mySlider();
}