function locomotive()
{
    
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}

locomotive();


function page1cursoranimation()
{
    document.querySelector(".page1-content").addEventListener("mousemove",(dets)=> {
        gsap.to(".play",{
            x:dets.x-80,
            y:dets.y-80
        })
        })
        
        document.querySelector(".page1-content").addEventListener("mouseenter",(dets)=> {
            gsap.to(".play",{
               scale:1,
               opacity:1
            })
            })
            document.querySelector(".page1-content").addEventListener("mouseleave",(dets)=> {
                gsap.to(".play",{
                  scale:0,
                  opacity:0
                })
                })
               
}


page1cursoranimation();
function navAnimation() {
    var menu = document.querySelector(".menu");
    var closeNav = document.querySelector(".rightnav p");

    menu.addEventListener("click", () => {
        gsap.to("#openav", {
            top: 0,
            duration: 1.3,
            ease: "expoScale(0.5, 7, none)"
        });

        gsap.fromTo("#openav .leftnav .nav-img", {
            opacity: 0,
            duration:.3,
            transform:"scale(.5)"
        }, {
            opacity: 1,
            duration: 1,
            delay: 1
        });

        // Reset and animate the bottom-left navigation
        gsap.fromTo(".btm-nav .btm-left", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1
        });

        // Reset and animate the bottom-right navigation
        gsap.fromTo(".btm-nav .btm-right", {
            x: 100,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            delay: 0.1
        });

        // Reset and animate the center navigation links
        gsap.fromTo(".centernav a", {
            y: 100,
            opacity: 0,
            duration:.1,
            stagger:.2
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            delay: 0.3
        });

        // Reset and animate the center navigation button
        gsap.fromTo(".centernav button", {
            y: 100,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5
        });

        // Reset and animate the left nav image
        gsap.fromTo(".leftnav .nav-img", {
            opacity: 0,
            scale: 0.4
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.7
        });
    });

    // Function to close the navigation
    closeNav.addEventListener("click", () => {
        gsap.to("#openav", {
            top: "-100%",
            duration: 1.3,
            ease: "expoScale(0.5, 7, none)"
        });
    });
}

navAnimation();


function page2animation(){
    gsap.from(".page2-top p",{
        y:100,
    duration:2,
        stagger:.34,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"an")
    gsap.from(".page2-btm h1",{
        y:120,
    duration:2,
        stagger:.34,
        opacity:0,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"an")
    
}
page2animation();


function page4animation(){
    gsap.from(".text-top p",{
        y:100,
    duration:2,
        stagger:.25,
        opacity:0,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"an")
    gsap.from(".page4-text h1",{
        y:120,
    duration:2,
        stagger:.25,
        opacity:0,
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"an")
    
}
page4animation();

function page3animation(){
  
    gsap.from(".page3-top h1",{
        y:120,
    duration:2,
        stagger:.25,
        opacity:0,
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"an")
    
}
page3animation();


function page4videocursor(){
    var page4video = document.querySelector(".page4video");
page4video.addEventListener("mouseenter",()=> {
    gsap.to(".svcursor",{
        opacity:1,
        scale:1
    })
})
page4video.addEventListener("mouseleave",()=> {
    gsap.to(".svcursor",{
        opacity:0,
        scale:0
    })
})
page4video.addEventListener("mousemove",(dets)=> {
    gsap.to(".svcursor",{
       x:dets.x,
       y:dets.y
    })
})
}
page4videocursor();



function page5animation(){
    gsap.from(".text-top5 p",{
        y:100,
    duration:2,
        stagger:.34,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"b")
    gsap.from(".page5-text h1",{
        y:120,
    duration:2,
        stagger:.34,
        opacity:0,
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            start:"top 40%",
            end:"top 30%",
            scrub:2
        }
    },"b")
    
}
page5animation();

function loadinganimation(){
    var tl= gsap.timeline();
tl.from("#loader h3",{
    x:50,
    duration:1,
    opacity:0,
    stagger:.1,

})
tl.to("#loader h3",{
    x:-50,
    duration:1,
    opacity:0,
    stagger:.1,

})
tl.to("#loader",{
    opacity:0
})
tl.from("#page1 .page1-content h1 span",{
    y:80,
    duration:.5,
    stagger:.1,
    opacity:0,
    // delay:.
})
tl.to("#loader",{
    display:"none"
})

}
loadinganimation();

function footeranimation(){
    
  // Register ScrollTrigger Plugin
gsap.registerPlugin(ScrollTrigger);

// Animation
gsap.from("#page6 .page6-btm h1 span", {
    y: -100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    delay:9,
    scrollTrigger: {
        trigger: ".page6-btm",
        scroller: "#main",  // Ensure this ID exists in your HTML
        start: "top 20%",
        end: "top 60%",
        scrub: 2,
    }
});


gsap.from("#page6 .page6-content h1 ", {
    y: 100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    delay:9,
    scrollTrigger: {
        trigger: ".page6-content",
        scroller: "#main",  // Ensure this ID exists in your HTML
        start: "top 20%",
        end: "top 80%",
        scrub: 2,
    }
});
gsap.from("#page6 .page6-btm .page6-btm-top ", {
    y: -100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    delay:9,
    scrollTrigger: {
        trigger: ".page6-btm",
        scroller: "#main",  // Ensure this ID exists in your HTML
        start: "top 20%",
        end: "top 80%",
        scrub: 2,
    }
});

gsap.from("#page6 .page6-btm .page-6center .leftcenter ", {
    x: -100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    delay:9,
    scrollTrigger: {
        trigger: ".page6-btm",
        scroller: "#main",  // Ensure this ID exists in your HTML
        start: "top 20%",
        end: "top 80%",
        scrub: 2,
    }
});

gsap.from("#page6 .page6-btm .page-6center .right-center", {
    x: 100,
    duration: 0.8,
    stagger: 1,
    opacity: 0,
    delay:9,
    scrollTrigger: {
        trigger: ".page6-btm",
        scroller: "#main",  // Ensure this ID exists in your HTML
        start: "top 20%",
        end: "top 80%",
        scrub: 2,
    }
});

}
footeranimation();
function videoplay(){
    var video = document.querySelector(".oenvideo video")
    video.pause();
    
    document.querySelector(".play").addEventListener("click",()=> {
        video.play();
    
        gsap.to(".oenvideo",{
            display:"block",
            x:2,
            duration:1
    
        })
    })
    
    
    document.querySelector(".closebtn").addEventListener("click",()=> {
    
        gsap.to(".oenvideo",{
            display:"none",
            x:-1500,
            duration:1
    
        })
    })
    var playcursor=document.querySelector(".play");
    
    
    var menucursorremove = document.querySelector("nav .menu");
    menucursorremove.addEventListener("mouseenter",()=> {
        playcursor.style.zIndex = "1";
    })
    var menucursorremove = document.querySelector("nav .menu");
    menucursorremove.addEventListener("mouseleave",()=> {
        playcursor.style.zIndex = "90";
    })
    
    var menucursorremove2 = document.querySelector("#openav");
    menucursorremove2.addEventListener("mouseenter",()=> {
        playcursor.style.zIndex = "1";
    })
    var menucursorremove2= document.querySelector("#openav");
    menucursorremove2.addEventListener("mouseleave",()=> {
        playcursor.style.zIndex = "90";
    })
}
videoplay();