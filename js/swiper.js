var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical', 
    direction: 'horizontal', //横スクロール
    loop: true,
    
    //キューブっぽく回転する
    // effect: 'cube',
    // loop: true,
    // cubeEffect: {
    //   slideShadows: false,
    //    shadowOffset: 20,
    //    shadowScale: 0.94,
    // },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })