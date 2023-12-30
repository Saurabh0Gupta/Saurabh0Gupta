// var typed=new typed(".text",{
//     String:["frontend developer","Backend developer","java developer","WordPress developer"],
//     typeSpeed:100,
//     backSpeed:100,
//     backDelay:1000,
//     loop:true
// })

var typed = new Typed('.text', {
    strings: ["Front-end developer","Back-end developer","java developer","WordPress developer"],
    typeSpeed: 70,
    backSpeed:70,
    backDelay:1000,
    loop:true
  });
gsap.to("#about",{
  backgroungColor:"salmon",
  scrollTrigger:{
    scroller:"body",
    trigger:"#about",
    // markers:true,
    start:"top 50%",
    end:"top -10%",
    scrub:3
  }
})
// -------swiperjs------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
    type:"fraction"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// -----------swiperjs-------
var tablinks=document.getElementsByClassName("tab-links")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab")
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")
}

// ------------gsp animation -----------

gsap.from("#center #inner-center",{
  opacity:0,
  y:150,
  scrollTrigger:{
    scroller:"body",
    trigger:"#center",
    // markers:true,
    start:"top 70%",
    end:"top 30%",
    scrub:3
  }
})

// ------text anima----

var h2data=document.querySelectorAll("#text h2")
h2data.forEach(function(elem){
    var textdata=elem.textContent
    var spilted=textdata.split("")
    var clutter=""
    spilted.forEach(function(e){
        clutter+=`<span>${e}</span>`
    })
    console.log(clutter)
    elem.innerHTML = clutter;
  })
gsap.to("#text h2 span",{
  color:"crimson",
  stagger:0.2,
  backgroundColor:"lightseagreen",
  scrollTrigger:{
      trigger:"#text h2 span",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top -10%",
      scrub:3
  }
})
gsap.to("#contact",{
  backgroundColor:"#363535",
  scrollTrigger:{
    scroller:"body",
    trigger:"#contact",
    // markers:true,
    start:"top 70%",
    end:"top 33%",
    scrub:3
  }
})