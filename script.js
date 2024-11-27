const menu = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')
const search = document.querySelector('.search')
const searchBtn = document.querySelector('#search-btn')
const loginBtn = document.querySelector('#login-btn')
const loginForm = document.querySelector('.login-form')

// ====== menu-bar =====

menu.onclick = () => {
    menu.classList.toggle('fa-times')
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
}

// ====== search-bar =======

searchBtn.onclick = () => {
    search.classList.toggle('active');
    searchBtn.classList.toggle('active')

    if(search.classList.contains('active')){
      search.querySelector('input').focus();
    }
}

// =========== login ============

loginBtn.onclick = () => {
  loginForm.classList.toggle('active')
  loginBtn.classList.toggle('active')

  if(loginForm.classList.contains('active')){
    loginForm.querySelector('input').focus();
  }
}

// ===== close menu, search, and login ========

document.onclick = (e) => {
  if(!menu.contains(e.target) && !navbar.contains(e.target)){
    menu.classList.remove('fa-times', 'active')
    navbar.classList.remove('active')
  }
  if(!search.contains(e.target) && !searchBtn.contains(e.target)){
    search.classList.remove('active')
    searchBtn.classList.remove('active')
  }
  if(!loginForm.contains(e.target) && !loginBtn.contains(e.target)){
    loginForm.classList.remove('active')
    loginBtn.classList.remove('active')
  }
}

// =========== Home Slider ==============

const home_swiper = new Swiper(".home-wrapper", {
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
});

// =========== Ptoduct Slider ===============

const product_swiper = new Swiper(".product-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    520: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    },
    1020: {
      slidesPerView: 5
    },
  },
});







