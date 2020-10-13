const body = document.body;
const preloader = $('.preloader');
const preloaderContainer = $('.preloader__container');
const preloaderOverlay = $('.preloader__overlay');
const svgright = $('svg#right');
const svgleft = $('svg#left');
const svgx = $('svg#x');

function preloaderAnimation() {
    $(window).on('load', () => {
        preloaderContainer.css({
            display: 'flex',
        })
        let tl = new TimelineMax();
        tl
            .fromTo(svgright, {
                x: '150%'
            }, {
                x: '0',
                duration: 1.5
            })

            .fromTo(svgleft, {
                x: '-150%'
            }, {
                x: '0',
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
                animTimingFunction: Vivus.EASE
            })
        }

        drawTheX();

        tl
            .to(preloaderOverlay, 1.2, {
                y: '0%',
                opacity:'1',
                ease: Power4.easeInOut,
            }, '+=0.25')

            .to(preloader, 1.5, {
                y: '100%',
                opacity:'0',
                ease: Power4.easeInOut,
            }, '-=1')
    });
}

preloaderAnimation();