const navbar = document.querySelector("nav")

function animation() {
    let controller = new ScrollMagic.Controller()

    const t1 = gsap.timeline({ defaults: {ease:Expo.InOut}})

    t1.fromTo(navbar, 1, {y:"-10rem"},{y:0})
    t1.fromTo(".banner-text", 0.5, {x: "-2rem", opacity:0}, {x: 0, opacity: 1}, "-=1")
    t1.fromTo(
        ".banner-img",
        0.5,
        { x: "5rem", opacity: 0 },
        { x: 0, opacity: 1 }
      );
      t1.fromTo(".banner-img img", 0.5, { scale: 1.5 }, { scale: 1 });
    
    
      const t2 = gsap.timeline({ defaults: { ease: Expo.InOut }, scrollTrigger: { scrub: true}});

      t2.fromTo(
        ".about-text",
        0.5,
        { x: "-2rem", opacity: 0 },
        { x: 0, opacity: 1 }
      )   ;
      t2.fromTo(".about-img", 0.5, { x: "5rem", opacity: 0 }, { x: 0, opacity: 1 });
      t2.fromTo(".about-img img", 0.5, { scale: 1.5 }, { scale: 1 });
    
      new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.5,
      })
        .setTween(t2)
        .addTo(controller);
    
      // card animations
    
      const t3 = gsap.timeline({ defaults: { ease: Expo.InOut }});
      t3.fromTo(
        ".card",
        1,
        { y: "-3rem", opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3 }
      );
      t3.set(".card", { clearProps: "all" });
    
      new ScrollMagic.Scene({
        triggerElement: "#vid",
        triggerHook: 0.5
      })
        .setTween(t3)
        .addTo(controller);

}

    animation()
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
ß