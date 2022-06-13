const navSlide = () => {
    const cart = document.querySelector('#cart');
    const nav = document.querySelector('.shopping-cart');

    cart.addEventListener('click', () =>{
        nav.classList.toggle('nav-active')
    });
}

navSlide();

