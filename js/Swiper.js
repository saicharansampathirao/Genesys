document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // Horizontal swiping
    loop: true,              // Infinite loop mode
    autoplay: {
      delay: 5000,          // Auto-slide every 5 seconds
      disableOnInteraction: false, // Continue autoplay after interaction
    },
    navigation: {
      nextEl: '.swiper-button-next', // Next button
      prevEl: '.swiper-button-prev', // Previous button
    },
    pagination: {
      el: '.swiper-pagination',      
      clickable: true,               
    },
    effect: 'slide',                
  });
});

  