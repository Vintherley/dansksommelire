window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var videoHeight = document.getElementById('background-video').offsetHeight;
    if (window.scrollY > videoHeight) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
    }
});