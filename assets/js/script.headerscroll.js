var nav = document.querySelector('nav');
var navItems = document.querySelectorAll('.nav-item a');
var navBrand = document.querySelector('.navbar-brand');

function getScrollThreshold() {
    if (window.innerWidth <= 576) {
        return 187; 
    } else if (window.innerWidth <= 968) {
        return 287; 
    } else if (window.innerWidth <= 1440) {
        return 477; 
    }
    return 857; 
}

window.addEventListener('scroll', function () {
    var threshold = getScrollThreshold();
    if (window.pageYOffset > threshold) {
        nav.classList.add('nav-bg', 'shadow');
    } else {
        nav.classList.remove('nav-bg', 'shadow');
    }
});
