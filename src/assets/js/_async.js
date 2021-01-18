function testrecall() {
    const menuBurger = document.querySelector('.menu__burger');
    const menuRight = document.querySelector('.menuRight');
    const mainContainer = document.querySelector('[data-barba="wrapper"]');
    const headerItemOne = document.querySelector('.header__item:first-child');
    const headerItemTwo = document.querySelector('.header__item:nth-child(2)');

    menuBurger.classList.remove('menu__burger--open');
    menuRight.classList.remove('menuRight--open');
    mainContainer.classList.remove('blur');
    headerItemOne.classList.remove('blur');
    headerItemTwo.classList.remove('blur');
    document.body.classList.remove('body--freeze');

    function openMenuBurger() {
        menuBurger.classList.toggle('menu__burger--open');
        menuRight.classList.toggle('menuRight--open');
        mainContainer.classList.toggle('blur');
        headerItemOne.classList.toggle('blur');
        headerItemTwo.classList.toggle('blur');
        document.body.classList.toggle('body--freeze');
    }

    menuBurger.addEventListener("click", openMenuBurger);

    function closeMenuBurger() {
        if (menuRight.classList.contains('menuRight--open')) {
            menuBurger.classList.remove('menu__burger--open');
            menuRight.classList.remove('menuRight--open');
            mainContainer.classList.remove('blur');
            headerItemOne.classList.toggle('blur');
            headerItemTwo.classList.toggle('blur');
            document.body.classList.remove('body--freeze');
        }
    }

    // function closeMenuBurgerOnClickOutside(event) {
    //     if (!event.target.closest('.menuRight')) {
    //         closeMenuBurger();
    //         event.stopImmediatePropagation();
    //         document.onclick = avoidFirstClick;
    //     }
    // }

    function closeMenuBurgerOnPressEscape(event) {
        if (event.keyCode == 27) {
            closeMenuBurger();
        }
    }

    document.addEventListener("keyup", closeMenuBurgerOnPressEscape);

    // function avoidFirstClick(event) {
    //     event.stopImmediatePropagation();
    //     this.removeEventListener("click", avoidFirstClick);
    //     document.onclick = closeMenuBurgerOnClickOutside;
    // }

    // menuBurger.addEventListener("click", avoidFirstClick);
}

testrecall();

function lightAndDarkMode() {
    const switcherDark = document.querySelector('.switcher__dark');
    const switcherLight = document.querySelector('.switcher__light');
    const alert = document.querySelector('.alert');
    const alertCaption = document.querySelector('.alert__caption');
    const alertButton = document.querySelector('.alert__button');
    const header = document.querySelector('.header');
    const mainContainer = document.querySelector('[data-barba="wrapper"]');

    function dark_mode() {
        if (!document.body.classList.contains('body--dark')) {
            document.body.classList.remove('body--light');
            document.body.classList.add('body--dark');
        } else {
            document.body.classList.add('body--freeze');
            header.classList.add('blur');
            mainContainer.classList.add('blur');
            alert.classList.add('alert--toggle');
            alertCaption.innerHTML = 'Vous êtes dans la lune ! Vous êtes déjà en mode sombre.';
        }
    }

    function light_mode() {
        if (!document.body.classList.contains('body--light')) {
            document.body.classList.remove('body--dark');
            document.body.classList.add('body--light');
        } else {
            document.body.classList.add('body--freeze');
            header.classList.add('blur');
            mainContainer.classList.add('blur');
            alert.classList.add('alert--toggle');
            alertCaption.innerHTML = 'Le soleil brille déjà pour vous.';
        }
    }

    function close_alert() {
        document.body.classList.remove('body--freeze');
        header.classList.remove('blur');
        mainContainer.classList.remove('blur');
        alert.classList.remove('alert--toggle');
    }

    switcherDark.addEventListener("click", dark_mode);
    switcherLight.addEventListener("click", light_mode);
    alertButton.addEventListener("click", close_alert);
}

lightAndDarkMode();

function menu() {
    const menuBurger = document.querySelector('.menu__burger');
    const menuRight = document.querySelector('.menuRight');
    const mainContainer = document.querySelector('[data-barba="wrapper"]');
    const headerItemOne = document.querySelector('.header__item:first-child');
    const headerItemTwo = document.querySelector('.header__item:nth-child(2)');
    
    menuBurger.classList.remove('menu__burger--open');
    menuRight.classList.remove('menuRight--open');
    mainContainer.classList.remove('blur');
    headerItemOne.classList.remove('blur');
    headerItemTwo.classList.remove('blur');
    document.body.classList.remove('body--freeze');

    function openMenuBurger() {
        menuBurger.classList.toggle('menu__burger--open');
        menuRight.classList.toggle('menuRight--open');
        mainContainer.classList.toggle('blur');
        headerItemOne.classList.toggle('blur');
        headerItemTwo.classList.toggle('blur');
        document.body.classList.toggle('body--freese');
    }

    menuBurger.addEventListener("click", openMenuBurger);

    function closeMenuBurger() {
        if (menuRight.classList.contains('menuRight--open')) {
            menuBurger.classList.remove('menu__burger--open');
            menuRight.classList.remove('menuRight--open');
            mainContainer.classList.remove('blur');
            headerItemOne.classList.toggle('blur');
            headerItemTwo.classList.toggle('blur');
            document.body.classList.remove('body--freeze');
        }
    }

    function closeMenuBurgerOnPressEscape(event) {
        if (event.keyCode == 27) {
            closeMenuBurger();
        }
    }

    document.addEventListener("keyup", closeMenuBurgerOnPressEscape);
}

function homeParallax() {
    if (document.getElementById('scene') &&
        document.getElementById('scene1') &&
        document.getElementById('scene2') &&
        document.getElementById('scene3') &&
        document.getElementById('scene4')) {

        if (window.innerWidth >= 992) {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene, {
                pointerEvents: true,
                clipRelativeInput: true,
                originX: -0.5,
            });

            var scene1 = document.getElementById('scene1');
            var parallaxInstance1 = new Parallax(scene1, {
                pointerEvents: true,
                relativeInput: true
            });

            var scene2 = document.getElementById('scene2');
            var parallaxInstance2 = new Parallax(scene2, {
                pointerEvents: true,
                relativeInput: true
            });

            var scene3 = document.getElementById('scene3');
            var parallaxInstance3 = new Parallax(scene3, {
                pointerEvents: true,
                relativeInput: true
            });

            var scene4 = document.getElementById('scene4');
            var parallaxInstance4 = new Parallax(scene4, {
                pointerEvents: true,
                relativeInput: true
            });
        }
    }
}

homeParallax();

function membersCarousel() {
    if (document.querySelector('.slider')) {
        var slider = new Swiper('.slider', {
            effect: 'coverflow',
            speed: 1000,
            loop: true,
            fadeEffect: {
                crossFade: true
            },
            keyboard: {
                enabled: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });

        if (window.innerWidth >= 768) {
            slider.mousewheel.enable();
        }
    }
}

membersCarousel();

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loadingScreen__overlay", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loadingScreen__overlay", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loadingScreen__overlay", {
        left: "-100%"
    });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", {
        duration: 1,
        y: 30,
        opacity: 0,
        stagger: 0.4,
        delay: 0.2
    });
}

function pageTransition() {
    var tl = gsap.timeline();

    tl.to(".loadingScreen__overlay", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
        backgroundColor: 'rgb(243, 243, 243)'
    });

    tl.to(".loadingScreen__overlay", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        backgroundColor: 'rgb(243, 243, 243)',
        delay: 0.3,
    });

    tl.set(".loadingScreen__overlay", {
        left: "-100%"
    });
}

barba.init({
    sync: true,
    transitions: [{
        async enter({
            next
        }) {
            contentAnimation();
        },

        async once({
            next
        }) {
            contentAnimation();
        },
        async beforeEnter({
            next
        }) {
            testrecall();
            menu();
            membersCarousel();
            homeParallax();
            window.scrollTo(0, 0);
        },
        async leave({
            next
        }) {
            const done = this.async();
            pageTransition();
            await delay(1000);
            done();
        },
    }],
});