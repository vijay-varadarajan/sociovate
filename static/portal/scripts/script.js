var hamburgerIcon = document.querySelector('#hamburger-icon');
var nav = document.getElementById('navdiv');
if (window.innerWidth > 768) {
    hamburgerIcon.style.display = 'none';
    nav.style.display = 'flex';

} else {
    hamburgerIcon.style.display = 'block';
    nav.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', (event) => {
    window.onresize = function() {
        var hamburgerIcon = document.querySelector('#hamburger-icon');
        var nav = document.getElementById('navdiv');
        if (window.innerWidth > 768) {
            hamburgerIcon.style.display = 'none';
            nav.style.display = 'flex';

        } else {
            hamburgerIcon.style.display = 'block';
            nav.style.display = 'none';
        }
    }
    document.getElementById('hamburger-icon').addEventListener('click', function() {
        var nav = document.getElementById('navdiv');
        var hamburgerIcon = document.querySelector('#hamburger-icon i');
    
        if (nav.style.display === 'none' || nav.style.display === '') {
            nav.style.display = 'flex';
            nav.style.position = 'absolute';
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-times');
        } else {
            nav.style.position = '';
            nav.style.display = 'none';
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    });
});
