function scroller() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#rocket-smooth"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#rocket-smooth", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#rocket-smooth").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}



scroller();


// const nav = document.querySelector("nav")
// let navScroll = window.scrollY;
// window.addEventListener("scroll", function () {
//     if (navScroll < window.scrollY) {
//         nav.classList.add("hidden-nav")
//     } else {
//         nav.classList.remove("hidden-nav")

//     }
//     navScroll = window.scrollY;
// })

gsap.from("#page-1 h1", {
    y: 50,
    duration: 1,
    stagger: .2,
    opacity: 0,
    ease: Expo.easeInOut
})
gsap.from("#p1-content #p1-line", {
    delay: 1,
    duration: 1,
    width: "0%",
})

gsap.from("#page-2 #page2-overlay", {
    height: "100vh",
    delay: .8,
    ease: Expo.easeInOut,
    duration: 1,
    ease: Expo.easeInOut

})
gsap.from("#page-3  h2", {
    scrollTrigger: {
        trigger: "#page-3 h2",
        scroller: "#rocket-smooth",
        start: "top 50%"
    },
    skewY: 5,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
    y: 50,
})
gsap.from("#page-7 h1", {
    scrollTrigger: {
        trigger: "#page-7 h1",
        scroller: "#rocket-smooth",
        start: "top 50%"
    },
    stagger: .2,
    opacity: 0,
    skewY: 5,
    y: 80,
    ease: Expo.easeInOut,

})
gsap.from("#page-4  #p4-line", {
    scrollTrigger: {
        trigger: "#page-4 h3",
        scroller: "#rocket-smooth",
        start: "top 70%"
    },
    duration: 1,
    width: "0%",
    delay: .5,
})
gsap.from("#page-4  h1", {
    scrollTrigger: {
        trigger: "#page-4",
        scroller: "#rocket-smooth",
        start: "top 10%"
    },
    skewY: 4,
    stagger: .5,
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 1,
    y: 150,
})
gsap.from("#page-6 .row", {
    scrollTrigger: {
        trigger: "#page-6",
        scroller: "#rocket-smooth",
        start: "top 90%"
    },
    width: 0,
    stagger: .2,
    duration: 1,
    ease: Expo.easeInOut,
})
gsap.from("#page-8 h1", {
    scrollTrigger: {
        trigger: "#page-8",
        scroller: "#rocket-smooth",
        start: "top 50%",
    },
    stagger: .3,
    skewY: 4,
    y: 70,
    duration: 1,
    opacity: 0,
    ease: Expo.easeInOut
})
gsap.from("#page-10 h1", {
    scrollTrigger: {
        trigger: "#page-10",
        scroller: "#rocket-smooth",
        start: "top 50%",
    },
    stagger: .3,
    skewY: 4,
    y: 70,
    duration: 1,
    opacity: 0,
    ease: Expo.easeInOut
})
gsap.from("#page-10 #p10-line", {
    scrollTrigger: {
        trigger: "#page-10",
        scroller: "#rocket-smooth",
        start: "top 50%",
    },
    delay: 1,
    duration: 1,
    width: 0,
})
gsap.to("#page-10,#p10-allwork,#all-work ", {
    scrollTrigger: {
        trigger: "#p10-allwork",
        scroller: "#rocket-smooth",
        end: "top top",
        start: "top 5%",
        scrub: 2,
    },
    backgroundColor: "black",
}, `-=1`)
gsap.to("#all-work", {
    scrollTrigger: {
        trigger: "#p10-allwork",
        scroller: "#rocket-smooth",
        end: "top top",
        start: "top 5%",
        scrub: 2,
    },
    backgroundColor: "rgb(219, 255, 0)",
    color: "black",
}, `-=1`)
gsap.to("#all-work h2 ", {
    scrollTrigger: {
        trigger: "#p10-allwork",
        scroller: "#rocket-smooth",
        end: "top top",
        start: "top 5%",
        scrub: 2,
    },
    color: "black",
}, `-=1`)
gsap.to("#page-10 h1", {
    scrollTrigger: {
        trigger: "#p10-allwork",
        scroller: "#rocket-smooth",
        end: "top top",
        start: "top 5%",
        scrub: 2,
    },
    color: "white",
}, `-=1`)
ScrollTrigger.create({
    trigger: "#page-8 ",
    start: "top top",
    pin: "#page-8 h1",
    end: "bottom -250%",
    scroller: "#rocket-smooth"
})


ScrollTrigger.create({
    trigger: "#page-10 ",
    start: "top top",
    pin: "#page-10 #p10-content",
    // end: "bottom -50%",
    scroller: "#rocket-smooth"
})
function videoPlay() {
    var play = document.querySelector("#p2-video");
    var playCircle = document.querySelector("#page-2");
    playCircle.addEventListener("mousemove", function (dets) {
        var dem = document.querySelector("#page-2").getBoundingClientRect()
        play.style.top = `${dets.clientY - dem.top}px`
        play.style.left = `${dets.clientX - dem.left}px`
        play.style.display = `flex`
    })
    playCircle.addEventListener("mouseleave", function (dets) {
        var dem = document.querySelector("#page-2").getBoundingClientRect()
        play.style.top = `${dets.clientY - dem.top}px`
        play.style.left = `${dets.clientX - dem.left}px`
        play.style.display = `none`
    })
};
videoPlay();
function videoPlay2() {
    var play2 = document.querySelector("#row-4-dot");
    var playCircle2 = document.querySelector("#imgs");
    playCircle2.addEventListener("mousemove", function (dets) {
        var dem = document.querySelector("#imgs").getBoundingClientRect()
        play2.style.top = `${dets.clientY - dem.top}px`
        play2.style.left = `${dets.clientX - dem.left}px`
        // play2.style.display = `flex`
    })
    playCircle2.addEventListener("mouseleave", function (dets) {
        var dem = document.querySelector("#imgs").getBoundingClientRect()
        play2.style.top = "50%";
        play2.style.left = "50%";
    })
};
videoPlay2();
function rows() {
    document.querySelector("#row1").addEventListener("mouseenter", function () {
        setTimeout(() => {
            document.querySelector("#imgs").style.display = "none";
            document.querySelector(".vid1").style.display = "initial";
            document.querySelector(".row-opener2").style.marginRight = "100%";
        }, 100);

    })
    document.querySelector("#row1").addEventListener("mouseleave", function () {
        document.querySelector(".vid1").style.display = "none";
        document.querySelector("#imgs").style.display = "initial";
        document.querySelector(".row-opener2").style.marginRight = "0%";


    })
    document.querySelector("#row2").addEventListener("mouseenter", function () {
        setTimeout(() => {

            document.querySelector("#imgs").style.display = "none";
            document.querySelector(".vid2").style.display = "initial";
            document.querySelector(".row-opener2").style.marginRight = "100%";
        }, 100);

    })
    document.querySelector("#row2").addEventListener("mouseleave", function () {
        document.querySelector(".vid2").style.display = "none";
        document.querySelector("#imgs").style.display = "initial";
        document.querySelector(".row-opener2").style.marginRight = "0%";
    })
    document.querySelector("#row3").addEventListener("mouseenter", function () {
        setTimeout(() => {
            document.querySelector("#imgs").style.display = "none";
            document.querySelector(".vid1").style.display = "initial";
            document.querySelector(".row-opener2").style.marginRight = "100%";
        }, 100);
    })
    document.querySelector("#row3").addEventListener("mouseleave", function () {
        document.querySelector(".vid3").style.display = "none";
        document.querySelector("#imgs").style.display = "initial";
        document.querySelector(".row-opener2").style.marginRight = "0%";


    })
}
rows();
function swipe() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 4,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,

        },
    });
}
swipe();
function videoPlay3() {
    const play3 = document.querySelector("#drag");
    const playCircle3 = document.querySelector(".swiper");
    playCircle3.addEventListener("mousemove", function (dets) {
        var dem = document.querySelector(".swiper").getBoundingClientRect()
        play3.style.top = `${dets.clientY - dem.top}px`
        play3.style.left = `${dets.clientX - dem.left}px`

        play3.style.display = `flex`
    })
    playCircle3.addEventListener("mouseleave", function (dets) {
        var dem = document.querySelector(".swiper").getBoundingClientRect()
        play3.style.top = `${dets.clientY - dem.top}px`
        play3.style.left = `${dets.clientX - dem.left}px`
        play3.style.display = `none`
    })
};
videoPlay3();

$(document).ready(function () {
    $('#dot-container').click(function () {
        $('nav h1').css("top", "30%")
        $('#nav-source-page').show("500");
        $('#opener-button').hide("scale");
        $("#dot-container").toggle("scale");
        $(".replace-dcontainer").show("scale");
    })
    $('.replace-dcontainer').click(function () {
        $('nav h1').css("top", "100%")
        $('#nav-source-page').hide("500");
        $('#opener-button').show("scale");
        $("#dot-container").toggle("scale");
        $(".replace-dcontainer").hide("scale");

    })





})