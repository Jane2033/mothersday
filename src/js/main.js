document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
});

gsap.from('.coupons',{
    scrollTrigger: {
        trigger: ".coupons",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});

gsap.from('.section2',{
    scrollTrigger: {
        trigger: ".section2",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});

gsap.from('.section3',{
    scrollTrigger: {
        trigger: ".section3",
        start: "top bottom",        
    },
    opacity: 0,
    y: 200,
    ease: 'power1.inOut',
});
