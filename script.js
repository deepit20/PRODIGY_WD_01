window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;
    let background;

    if (scrollPosition < 100) {
        background = 'rgb(0, 123, 255)';
    } else if (scrollPosition < 200) {
        background = 'rgb(0, 101, 204)';
    } else if (scrollPosition < 300) {
        background = 'rgb(0, 79, 159)';
    } else {
        background = 'rgb(0, 57, 114)';
    }

    document.body.style.backgroundColor = background;
    navbar.style.backgroundColor = background;
});
