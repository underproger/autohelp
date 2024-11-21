document.addEventListener('DOMContentLoaded', function () {
    const isSafari = () => {
        return (
            ~navigator.userAgent.indexOf('Safari') &&
            navigator.userAgent.indexOf('Chrome') < 0
        );
    };

    const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows()
            );
        },
    };

    if (isMobile.any()) {
        document.querySelector('body').classList.add('v-mobile');
        document.querySelector('html').classList.add('v-mobile');
    } else {
        document.querySelector('body').classList.add('v-desk');
        document.querySelector('html').classList.add('v-desk');
    }

    const menu = document.querySelector('.header-menu');
    const menuOpen = document.querySelector('.header-toggle._open');
    const menuClose = document.querySelector('.header-toggle._close');

    if (menu) {
        menuOpen.addEventListener('click', () => {
            menu.classList.add('_active');
        })
        menuClose.addEventListener('click', () => {
            menu.classList.remove('_active');
        })
    }

    const bannerSlider = new Swiper('.banner-slider .swiper', {
        loop: true,
        slidesPerView: 1,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    const videoIconsItems = document.querySelectorAll('.video-icons__item');

    if (videoIconsItems) {
        videoIconsItems.forEach(item => {
            item.addEventListener('click', () => {
                const modalName = item.dataset.modal;
                const modal = document.querySelector(`.modal[data-modal="${modalName}"]`);

                if (modal) {
                    modal.classList.add('_active');

                    const video = modal.querySelector('video');
                    if (video) {
                        video.play();
                    }
                }
            })
        })
    }

    const modalClose = document.querySelectorAll('.modal-bg, .modal-close');

    if (modalClose) {
        modalClose.forEach(item => {
            item.addEventListener('click', () => {
                const modal = item.closest('.modal');

                if (modal) {
                    modal.classList.remove('_active');

                    const video = modal.querySelector('video');
                    if (video) {
                        video.pause();
                    }
                }
            })
        })
    }
});