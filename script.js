document.querySelector('.navbar-toggler').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "block";
    document.body.style.overflow = "hidden";
})


document.querySelector('.mask').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "none";
    document.querySelector('.collapse').classList.remove('show');
    // document.querySelector('.profile-sidebar').style.left = '-1000%';

    document.querySelector('.cart-sidebar').style.right = "-1000%";

    document.body.style.overflow = "scroll";
})


document.querySelector('.sideNavClose').addEventListener('click', () => {
    document.querySelector('.mask').style.display = "none";
    document.querySelector('.collapse').classList.remove('show');
    document.body.style.overflow = "scroll";
})


document.querySelectorAll('.cart-tog').forEach(function (toggle) {
    toggle.addEventListener('click', function () {
        document.querySelectorAll('.cart-sidebar').forEach(function (sidebar) {
            sidebar.style.right = 0;
        });
        document.querySelectorAll('.mask').forEach(function (mask) {
            mask.style.display = "block";
        });
    });
});

document.querySelector('.sideCartClose').addEventListener('click', function () {
    document.querySelector('.cart-sidebar').style.right = "-1000%";
    document.querySelector('.mask').style.display = "none";
})





