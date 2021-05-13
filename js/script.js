
const thombs = new Swiper('.slider-thombs', {
   spaceBetween: 0,
   slidesPerView: 0,
})


const slider = new Swiper('.swiper-container', {
   effect: 'fade',
   loop: false,
   thumbs: {
      swiper: thombs
   }
})

// burger

const burger = document.getElementById('burger')
const btnShow = document.querySelectorAll('.section-show__btn')
const btnClose = document.getElementById('popup-close')
const popap = document.getElementById('popaps-videos')
burger.addEventListener('click', showNav)
btnShow.forEach(btn => btn.addEventListener('click', showPopap))
btnClose.addEventListener('click', closePopap)
function showNav() {
   let headerList = document.querySelector('.header__list')
   headerList.classList.toggle('show')
}
function showPopap() {
   popap.classList.add('show')
}
function closePopap() {
   popap.classList.remove('show')
}

window.addEventListener('DOMContentLoaded', function () {
   gsap.from('.section-show__title', { opacity: 0, duration: .2, delay: .2, y: -20 })
   gsap.from('.section-show__subtitle', { opacity: 0, duration: .2, delay: .3, y: -20 })
   gsap.from('.section-show__link', { opacity: 0, duration: .2, delay: .5, y: -20 })
   gsap.from('.section-show__text', { opacity: 0, duration: .2, delay: .4, y: -20 })
   gsap.from('.section-show__btn', { opacity: 0, duration: .2, delay: .2, y: -20 })
   const slidesImg = document.querySelectorAll('.slider-thombs__slide')
   slidesImg.forEach(img => img.addEventListener('click', animateItems))
   function animateItems() {
      gsap.from('.section-show__title', { opacity: 0, duration: .2, delay: .2, y: -20 })
      gsap.from('.section-show__subtitle', { opacity: 0, duration: .2, delay: .3, y: -20 })
      gsap.from('.section-show__link', { opacity: 0, duration: .2, delay: .5, y: -20 })
      gsap.from('.section-show__text', { opacity: 0, duration: .2, delay: .4, y: -20 })
      gsap.from('.section-show__btn', { opacity: 0, duration: .2, delay: .2, y: -20 })
   }

})




