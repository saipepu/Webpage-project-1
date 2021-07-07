const navSlide = () => {
    const nav = document.querySelector('.nav');
    const menu = document.querySelector('.menu');
    const bodyText = document.querySelector('.blur');
    menu.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        bodyText.classList.toggle('blur_on_menu');
        console.log('HI');
    });
}
navSlide();
