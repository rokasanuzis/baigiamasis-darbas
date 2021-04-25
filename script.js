//mobile menu
document.getElementById('mobile-menu-trigger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.getElementById('navigation').classList.toggle('active');
});


const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})


//reviews swiper
const swiper = new Swiper('.rewievs-swiper', {
  slidesPerView: 1,
  spaceBetween: 120,
  autoHeight: true,

  breakpoints: {
    // when window width is >= 320px
    600: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    1000: {
      slidesPerView: 3,
    }
  },

    autoplay: {
        delay: 5000
    },

    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });