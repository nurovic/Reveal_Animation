let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.front-page',
        start: '0%',
        end: "100%",
        scrub: true,     
        pin: true,
    }
})

tl.fromTo('.front-page', 
{clipPath: 'circle(5%)'},
{clipPath: 'circle(75%)', duration: 3}
)

tl.fromTo('music-note', {scale: 0.5}, {scale: 0, opacity: 0 , duration: 1}, "-=3")

tl.fromTo('.title', {opacity: 0}, {opacity: 1, duration: 1})
tl.fromTo('.sub-title', {opacity: 0}, {opacity: 1, duration: 1})

let img = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        start: '0%',
        end: "100%",
        scrub: true,     
        pin: true,
    }
})

img.fromTo('.img-1',
{opacity: .2}, {clipPath:"circle(75%)", opacity: 1})

img.fromTo('.img-2',
{opacity: .2}, {clipPath:"circle(75%)", opacity: 1})
