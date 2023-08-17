gsap.from("#page1 h3",{
    x: "-30%",
    duration:2,
    ease: "bounce.out",
    opacity: 0
    // delay:
})
gsap.from("#page1 h1",{
    y: "100%",
    opacity:0,
    ease: "bounce.out",
    duration:2,
    // delay:2
})
var tl = gsap.timeline({
    ease: "bounce.out",
    scrollTrigger:{
        trigger: "#page2",
        start: "top 50%",
        end: "top 0%",
        markers: true,
        // pin:true,
        scroller: "#main",
        // scrub: 0.5
    }
})
tl.from("#page2 img",{
    y: "-100%",
    opacity:0,
    ease: "bounce.out",
    duration:2,
},"anim")
tl.to("#page2 h3",{
    x: "0%",
    duration:2,
    ease: "bounce.out",
    opacity: 1
},"anim")
tl.to("#page2 h1",{
    y: "0%",
    duration:2,
    ease: "bounce.out",
    opacity: 1
},"anim")

var tml = gsap.timeline({
    ease: "bounce.out",
    scrollTrigger:{
        trigger: "#page3",
        start: "top 50%",
        end: "top 0%",
        markers: true,
        scroller: "#main",
        // scrub: 0.5
    }
})
tml.from("#page3 img",{
    y: "-100%",
    opacity:0,
    duration:2,
    ease: "bounce.out",
     
},"anim")
tml.to("#page3 h3",{
    x: "0%",
    duration:2,
    ease: "bounce.out",
    opacity: 1
},"anim")
tml.to("#page3 h1",{
    y: "0%",
    duration:2,
    ease: "bounce.out",
    opacity: 1
},"anim")