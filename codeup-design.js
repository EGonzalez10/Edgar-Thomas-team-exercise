// function noScroll() {
//     window.scrollTo(0,0);
// }
//
// window.addEventListener('scroll', noScroll);

function disableScroll() {
    document.getElementById('no-scroll').style.overflow = 'hidden';
    document.querySelector('html').scrollTop = window.scrollY;
}

disableScroll();