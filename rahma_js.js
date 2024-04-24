document.addEventListener('DOMContentLoaded', function() {
    var navHamburger = document.getElementById('navHamburger');
    var navMenu = document.getElementById('navMenu');

    navHamburger.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    // Tambahkan event listener untuk menampilkan atau menyembunyikan nav menu pada resize layar
    window.addEventListener('resize', function() {
        if (window.innerWidth > 767) {
            navMenu.classList.remove('open');s
        }
    });
});
