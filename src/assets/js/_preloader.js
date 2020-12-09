const preloader = document.querySelector('.preloader');
const preloaderContainer = document.querySelector('.preloader__container');
const preloaderOverlay = document.querySelector('.preloader__overlay');
const svgleft = document.getElementById('left');
const svgright = document.getElementById('right');
const svgx = document.getElementById('x');

function preloaderAnimation() {
    window.addEventListener("load", function() {
        preloaderContainer.style.display = 'flex';
        let tl = new TimelineMax();
        tl
        .fromTo(svgright, {
            x: '150%'
        }, {
            x: '0%',
            duration: 1.5
        })

        .fromTo(svgleft, {
            x: '-150%'
        }, {
            x: '0%',
            duration: 1.5
        }, '-=1.5')

        .fromTo(svgx, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.5
        }, '-=0.75')


        function drawTheX() {

            new Vivus('x', {
                start: 'autostart',
                type: 'scenario',
                file: './../../assets/svg/x.svg',
                animTimingFunction: Vivus.EASE
            })
        }

        drawTheX();

        tl
        .to(preloaderOverlay, 1.2, {
            y: '0%',
            ease: Power4.easeInOut,
        }, '+=0.25')

        .to(preloader, 1.5, {
            y: '100%',
            ease: Power4.easeInOut,
        }, '-=1')
    });
}

preloaderAnimation();
