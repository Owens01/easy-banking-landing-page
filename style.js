var hamburger = document.querySelector (".hamburger");
var closeNav = document.querySelector (".close-nav");
var mobileNavItems = document.querySelector (".mobile-nav__items");
var backdrop = document.querySelector (".backdrop");

hamburger.addEventListener ("click", function () {
    hamburger.style.display = ("none");
    closeNav.style.display = ("block");
    if (mobileNavItems.style.opacity == 0){
        mobileNavItems.style.opacity = 1;
    } else {
        mobileNavItems.style.opacity = 0; 
    }
    backdrop.style.display = ("block");
});

closeNav.addEventListener ("click", function () {
    closeNav.style.display = ("none");
    if (mobileNavItems.style.opacity == 0){
        mobileNavItems.style.opacity = 1;
    } else {
        mobileNavItems.style.opacity = 0; 
    }
    hamburger.style.display = ("block");
    backdrop.style.display =  ("none");
});