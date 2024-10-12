const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
const toggle = document.querySelectorAll(".faq-toggle");

open.addEventListener("click", () => container.classList.add("show-nav"))

close.addEventListener("click", () => container.classList.remove("show-nav"))

toggle.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const parent = toggle.parentNode;

        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            document.querySelectorAll('.faq').forEach(faq => {
                faq.classList.remove('active');
            });
            parent.classList.add('active');
        }
    });
});

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
});



