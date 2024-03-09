var menuBar = document.querySelector('.menu-bar');
var navLinks = document .querySelector('.nav-links');

navLinks.computedStyleMap.top = '-450px'

menuBar.onclick = function () {
    if (navLinks.computedStyleMap.top == '-450px'){
        navLinks.computedStyleMap.top = '50px';
    } else {
        navLinks.computedStyleMap.top = '-450px'
    }
}