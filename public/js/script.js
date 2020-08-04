const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

// Event listeners

function bindEvent (e, method){
    e.addEventListener('click', method);
}

function toggleNav() {
    // Toggle: menu bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // animate in - overlay
        overlay.classList.replace('overlay-slide-left','overlay-slide-right');
    } else {
        overlay.classList.replace('overlay-slide-right','overlay-slide-left');
    }
}

bindEvent(menuBars, toggleNav);
bindEvent(nav1, toggleNav);
bindEvent(nav2, toggleNav);
bindEvent(nav3, toggleNav);
bindEvent(nav4, toggleNav);
bindEvent(nav5, toggleNav);