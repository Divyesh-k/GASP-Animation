gsap.to(".imagecontainer" , {
    width:"100%",
    ease:Expo.easeInOut,
    duration:3,
    stagger:2
})
gsap.to(".text h1" , {
    top:0,
    ease:Expo.easeInOut,
    stagger:2
})
gsap.to(".text h1" , {
    top:"-100%",
    delay : 2,
    ease:Expo.easeInOut,
    stagger:2
})
