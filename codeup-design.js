// function noScroll() {
//     window.scrollTo(0,0);
// }
//
// window.addEventListener('scroll', noScroll);

function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

disableScroll();