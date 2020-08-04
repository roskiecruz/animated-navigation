const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
const navEvents = [...navItems, menuBars];

function bindEventListener (e, method){
    e.addEventListener('click', method);
}

function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        bindReplaceClass(nav,`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`);
    })
}

function bindReplaceClass (e, oldClass, newClass){
    e.classList.replace(oldClass, newClass);
}

function toggleNav() {
    // Toggle: menu bars open/closed
    menuBars.classList.toggle('change');
    // Toggle: menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // Animate in - overlay
        bindReplaceClass(overlay,'overlay-slide-left','overlay-slide-right');
        // Animate in - nav items
        navAnimation('out','in');
        
    } else {
        // Animate out - overlay
        bindReplaceClass(overlay,'overlay-slide-right','overlay-slide-left');
        // Animate in - nav items
        navAnimation('in','out');
    }
}

navEvents.forEach((nav) =>{
    bindEventListener(nav, toggleNav);
});