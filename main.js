var openMenu = $(".fas.fa-bars");
var closeMenu = $(".close");
var hamburgerMenu = $(".hamburger-menu");

openMenu.click( function() {
    hamburgerMenu.show();
})

closeMenu.click( function() {
    hamburgerMenu.hide();
})