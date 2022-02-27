/* burger Menu */

let burger = document.querySelector(".burger-menu");
let burgerSpans = document.querySelectorAll(".burger-menu > span");
let smallList = document.querySelector(".small-list");

burger.addEventListener("click", () => {
    burgerSpans.forEach((e) => {
        e.classList.toggle("span-active");
    })
    smallList.classList.toggle("small-list-active");
})

/* contact toggle */

let contactToggle = document.querySelector(".contact-toggle");
let contactList = document.querySelectorAll(".contact-list a");


contactToggle.addEventListener("click", () => {
    if (contactToggle.children[0].classList.contains("contact-active") == false) {
        contactToggle.children[0].src = './images/close-contact.png';
        contactList.forEach((e) => {
            e.style.cssText = "transform:translateX(0)"
        })
        contactToggle.children[0].classList.toggle("contact-active")
    } else {
        contactToggle.children[0].src = './images/open-contact.png';
        contactList.forEach((e) => {
            e.style.cssText = "transform:translateX(300px)"
        })
        contactToggle.children[0].classList.toggle("contact-active")
    }
})

/* About Section */

let contactImgs = document.querySelectorAll(".right .img");
let aboutSec = document.querySelector("#about")

window.addEventListener("scroll", () => {
    if (window.scrollY >= aboutSec.scrollHeight) {
        contactImgs.forEach((e) => {
            e.style.cssText = 'opacity: 1; transform: translateY(0);';
        })
    }
})

/* Offers Section */

friedClickRight = document.querySelectorAll(".offers .right-arrow")[0];
burgerClickRight = document.querySelectorAll(".offers .right-arrow")[1];

friedClickLeft = document.querySelectorAll(".offers .left-arrow")[0];
burgerClickLeft = document.querySelectorAll(".offers .left-arrow")[1];

leftImg = document.querySelectorAll(".offers .box .img img")[0];
rightImg = document.querySelectorAll(".offers .box .img img")[1];

toggleSpansLeft = document.querySelectorAll(".offers .fried .toggle span");
toggleSpansRight = document.querySelectorAll(".offers .burger .toggle span");

// fried

friedClickLeft.addEventListener("click", () => {
    toggleSpansLeft.forEach((e) => e.classList.remove("active"))
    if (leftImg.src.includes('images/fried-3.png')) {
        toggleSpansLeft[1].classList.add("active");
        leftImg.src = `images/fried-${2}.png`
    } else if (leftImg.src.includes('images/fried-2.png')) {
        toggleSpansLeft[0].classList.add("active");
        leftImg.src = `images/fried-${1}.png`
    } else if (leftImg.src.includes('images/fried-1.png')) {
        toggleSpansLeft[2].classList.add("active");
        leftImg.src = `images/fried-${3}.png`
    }
})

friedClickRight.addEventListener("click", () => {
    toggleSpansLeft.forEach((e) => e.classList.remove("active"))
    if (leftImg.src.includes('images/fried-1.png')) {
        toggleSpansLeft[1].classList.add("active");
        leftImg.src = `images/fried-${2}.png`
    } else if (leftImg.src.includes('images/fried-2.png')) {
        toggleSpansLeft[2].classList.add("active");
        leftImg.src = `images/fried-${3}.png`
    } else if (leftImg.src.includes('images/fried-3.png')) {
        toggleSpansLeft[0].classList.add("active");
        leftImg.src = `images/fried-${1}.png`
    }
})

// burger

burgerClickLeft.addEventListener("click", () => {
    toggleSpansRight.forEach((e) => e.classList.remove("active"))
    if (rightImg.src.includes('images/burger-3.png')) {
        toggleSpansRight[1].classList.add("active");
        rightImg.src = `images/burger-${2}.png`
    } else if (rightImg.src.includes('images/burger-2.png')) {
        toggleSpansRight[0].classList.add("active");
        rightImg.src = `images/burger-${1}.png`
    } else if (rightImg.src.includes('images/burger-1.png')) {
        toggleSpansRight[2].classList.add("active");
        rightImg.src = `images/burger-${3}.png`
    }
})

burgerClickRight.addEventListener("click", () => {
    toggleSpansRight.forEach((e) => e.classList.remove("active"))
    if (rightImg.src.includes('images/burger-1.png')) {
        toggleSpansRight[1].classList.add("active");
        rightImg.src = `images/burger-${2}.png`
    } else if (rightImg.src.includes('images/burger-2.png')) {
        toggleSpansRight[2].classList.add("active");
        rightImg.src = `images/burger-${3}.png`
    } else if (rightImg.src.includes('images/burger-3.png')) {
        toggleSpansRight[0].classList.add("active");
        rightImg.src = `images/burger-${1}.png`
    }
})

// Menu

let box1 = document.querySelector(".menu .box-1");
let box2 = document.querySelector(".menu .box-2");
let btnRight = document.querySelector(".menu .box > .right")
let btnLeft = document.querySelector(".menu .box > .left")
let menuPage = document.querySelector(".menu .box .content")
let menuBox = document.querySelector(".menu .box")
let menuToggle = document.querySelectorAll(".toggle-menu span");
let span1 = document.querySelector(".toggle-menu span:first-child")
let span2 = document.querySelector(".toggle-menu span:last-child")

let state = 'right';

function switchMenu() {
    if (state === 'right') {
        box2.style.cssText = "transform: translateX(0);";
        box1.style.cssText = "transform: translateX(calc(-100% + -20px));";
        menuPage.style.backgroundColor = '#F94F4F';
        state = 'left'
        menuToggle.forEach((e) => e.classList.toggle("active"))
        span1.style.cssText = 'background-color: #F94F4F;'
        span2.style.cssText = 'background-color: #FFFFFF;'
    } else if (state === 'left') {
        box1.style.cssText = "transform: translateX(0);";
        box2.style.cssText = "transform: translateX(calc(100% + 20px));";
        menuPage.style.backgroundColor = '#FFAC2E';
        state = 'right'
        menuToggle.forEach((e) => e.classList.toggle("active"))
        span1.style.cssText = 'background-color: #FFFFFF;'
        span2.style.cssText = 'background-color: #FFAC2E;'
    }
}

btnRight.addEventListener("click", switchMenu)
btnLeft.addEventListener("click", switchMenu)

let intervalState = true;

let autoSwitch = setInterval(() => {
    if (intervalState == true) {
        switchMenu()
    }
    menuBox.onmouseover = () => {
        intervalState = false;
    }
    menuBox.onmouseleave = () => {
        intervalState = true;
    }
}, 5000);

// go Up Button

let goUp = document.querySelector(".go-up");
let offersSec = document.querySelector("#offers");

window.addEventListener("scroll", () => {
    if (window.scrollY >= aboutSec.scrollHeight) {
        goUp.style.right = '40px';
    } else {
        goUp.style.right = '-100%';
    }
})
