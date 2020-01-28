document.querySelector('.c-humburger').addEventListener('click', function (e) {
    e.preventDefault();
    if (this.classList.contains('active')) {
        this.classList.remove('active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.body.classList.remove('body-active');
    } else {
        this.classList.add('active');
        document.querySelector('#menu').classList.add('nav-active');
        document.body.classList.add('body-active');
    }
})