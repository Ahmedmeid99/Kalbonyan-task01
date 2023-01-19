const navBar = document.querySelector('.nav-bar')
const menu = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-list li.nav-link a')
const openBtn = document.querySelector('.nav-content .menu-icon')
const closeBtn = document.querySelector('.nav-content .close-btn')
const scrollBtn = document.querySelector('.scroll-btn')
const pricingCards = document.querySelectorAll('.pricing .box')
const choosePlaneBtns = document.querySelectorAll('.pricing .box .view-btn')
const monthBtn = document.querySelector('.monthly')
const yearBtn = document.querySelector('.yearly')
const yearCards = document.querySelector('.yearly-cards')
const monthCards = document.querySelector('.monthly-cards')
const lightEl = document.querySelector('.light')
const videoRunBtn = document.querySelector('.icon-video')
const videoLayout = document.querySelector('.video-layout')
const videoContainer = document.querySelector('.video-container')
const videoEl = document.querySelector('.video-container video')

// Open menu
openBtn.addEventListener('click', () => menu.classList.add('open-menu'))

// Close menu
closeBtn.addEventListener('click', () => menu.classList.remove('open-menu'))

// OnScroll event
window.addEventListener('scroll', () => {
    // Set navbar fixed
    if (window.scrollY > 200) {
        navBar.classList.add('nav-bar-fixed')
    }
    else if (window.scrollY < 200) {
        navBar.classList.remove('nav-bar-fixed')
    }

    // Show & Hidden scroll-btn
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show-scroll-btn')
    }
    else if (window.scrollY < 400) {
        scrollBtn.classList.remove('show-scroll-btn')
    }
})

//Scroll to top by scroll-btn
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

// Select plan card
choosePlaneBtns.forEach((btn) => {
    btn.addEventListener('click', () => {

        //Remove class from eny card
        pricingCards.forEach((card) => {
            card.classList.remove('best-option')
        })

        // Get the card of btn by btn index ( btn-index = card-index )
        let arrBtns = Array.from(choosePlaneBtns)
        let btnIndex = arrBtns.indexOf(btn)

        let arrCards = Array.from(pricingCards)
        // Add class to card
        arrCards[btnIndex].classList.add('best-option')

    })
})

// Select monthly pan
monthBtn.addEventListener('click', () => {
    // Move Hilight 
    lightEl.classList.add('left')
    lightEl.classList.remove('right')

    // Set option is active and remove active from anther
    monthBtn.classList.add('is-light')
    yearBtn.classList.remove('is-light')

    // hidden yearCards and show monthCards
    yearCards.classList.add('cards-hidden')
    monthCards.classList.remove('cards-hidden')
})

// Select yearly pan
yearBtn.addEventListener('click', () => {
    // Move Hilight 
    lightEl.classList.add('right')
    lightEl.classList.remove('left')
    // Set Option is active and remove active from anther
    yearBtn.classList.add('is-light')
    monthBtn.classList.remove('is-light')

    // hidden monthCards and show yearCards
    monthCards.classList.add('cards-hidden')
    yearCards.classList.remove('cards-hidden')
})

// Close menu on link clicked
links.forEach((link) => {
    link.addEventListener('click', () => {
        // Close Menu
        menu.classList.remove('open-menu')
    })
})
console.log(videoContainer)
videoRunBtn.addEventListener('click', () => {
    videoLayout.classList.add('video-show')
    videoContainer.classList.add('video-show')
})
videoLayout.addEventListener('click', () => {
    videoLayout.classList.remove('video-show')
    videoContainer.classList.remove('video-show')
    videoEl.pause()
})