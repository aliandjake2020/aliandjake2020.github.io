window.addEventListener('scroll', function(e) {
    scrollEvent(e);
});

function scrollEvent(e){
    var menu = document.querySelector("#menu");
    var currentScrollDepth = document.documentElement.scrollTop;
    if(currentScrollDepth >= 130){
        // fix menu to top
        menu.classList.add("fixed");
    } else {
        // unfix menu
        menu.classList.remove("fixed");
    }
}