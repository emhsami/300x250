var gtl = gsap.timeline();
var tl = gsap.timeline();


var timer = 0;
var timeInfo = setInterval(() => {
    timer++;
    console.log(timer);
}, 1000)

gtl.to(".main-img", { left: 300, duration: 16, ease: "none", delay: -1 })
gtl.to(".last-frame", {
    left: 0, ease: "none", duration: 16, delay: -16.001, onComplete:
        function () {
            console.log("Finish", timer);
            clearInterval(timeInfo);

        }
})

tl.fromTo(".frame-1-text", { opacity: 0 }, { opacity: 1 })
tl.to(".frame-1-text", { opacity: 0, delay: 2.5 })

tl.fromTo(".frame-2-text", { opacity: 0 }, { opacity: 1 }, "=-1")
tl.to(".frame-2-text", { opacity: 0, delay: 2.5 })

tl.fromTo(".frame-3-text", { opacity: 0 }, { opacity: 1 }, "=-1")
tl.to(".frame-3-text", { left: 310, ease: "none", duration: 5.39, delay: 2.8 })
