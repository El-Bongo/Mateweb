const slider = document.querySelector(".slidere")
let sliderSection = document.querySelectorAll(".slidere-section")
let sliderSectionLast = sliderSection[sliderSection.length -1]
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const bar = document.querySelector(".timer-bar-slider")
const service = document.querySelector(".move-to-service")
const contact = document.querySelector(".move-to-contact")
const servmove = document.querySelector(".title-buy")
const contmove = document.querySelector(".uneed")

function moveRight() {
    let sliderSectionOne = document.querySelectorAll(".slidere-section")[0]
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionOne)
        slider.style.marginLeft = "-100%";
    }, 600)
}
function moveLeft() {
    let sliderSection = document.querySelectorAll(".slidere-section")
    let sliderSectionLast = sliderSection[sliderSection.length -1]
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s"
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "-100%";
    }, 600)
}
//Sliders btns
btnRight.addEventListener('click', function(){
    moveRight()
    resetanimbar()
})
btnLeft.addEventListener('click', function(){
    moveLeft()
    resetanimbar()
})
//Automatic slider Right
function idleRight(){
    moveRight()
}
let inter = setInterval(() => {
    idleRight()
}, 11000);
//Reset animation of timer bar
function resetanimbar(){
    let barrem = start.children[2]
    start.removeChild(barrem)
    clearInterval(inter)
    inter = setInterval(() => {
        moveRight()
    }, 11000);

    setTimeout(() => {
        let timer = document.createElement('div')
        timer.classList.add("timer-bar-slider")
        start.appendChild(timer)
    }, 1);
}
function scrollService() {
    servmove.scrollIntoView({
        block:"start",
        behavior:"smooth",
    })
}
function scrollContact() {
    contmove.scrollIntoView({
        block:"start",
        behavior:"smooth",
    })
}
service.addEventListener('click', ()=>{
    scrollService()
})
contact.addEventListener('click', ()=>{
    scrollContact()
})

const typed = new Typed('.typed',{
    strings: [
        '<i class="contact-type">una landing page<i>', 
        '<i class="contact-type">remodelar tu página<i>', 
        '<i class="contact-type">resolver tus dudas<i>'],
    typeSpeed:50,
    startDelay:100,
    backSpeed:30,
    backDelay:1500,
    loop: true,
    smartBackspace: false,
})
