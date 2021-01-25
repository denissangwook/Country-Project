/*mobile nav button effect*/
const body = document.body;
//about.html, credit.html
const btn = document.querySelector('.btn-menu');
//about.html, attractions.html, gallery.html(hamburger button color is changed)
const otherBtn = document.querySelector('.other-btn-menu');
//hamburger menu button 
let menuOpen = false;

if (btn) {
    btn.addEventListener('click', function () {
        body.classList.toggle('show');
        if (!menuOpen) {
            btn.classList.add('open');
            menuOpen = true;
        } else {
            btn.classList.remove('open');
            menuOpen = false;
        }
    });
}

if (otherBtn) {
    otherBtn.addEventListener('click', function () {
        body.classList.toggle('show');
        if (!menuOpen) {
            btn.classList.add('open');
            menuOpen = true;
        } else {
            btn.classList.remove('open');
            menuOpen = false;
        }
    });
}

