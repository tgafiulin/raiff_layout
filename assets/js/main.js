document.addEventListener('DOMContentLoaded', function(){
    $('.js-input').on('input', function () {
        let self = $(this);
        range(self);
    });


    let mySwiper = new Swiper('.js-slider .swiper-container', {
        loop: false,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        slidesPerView: 'auto',
        spaceBetween: 15,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          // when window width is >= 320px
          1140: {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }
      })
});

function range (self) {
    let $this = self;
    let $result = $this.parents('.js-calculator').find('.js-result');
    let value = Number($this.val());
    let from = Number($this.attr('min'));
    let to = Number($this.attr('max'));
    let fromColor = $this.data('color-from');
    let toColor = $this.data('color-to');

    let valProcent = (((value - from) * 100) / (to - from));

    $result.html(value);

    let color = `-webkit-linear-gradient(left, ${fromColor} 0%, ${fromColor} ${valProcent}%, ${toColor} ${valProcent}%, ${toColor} 100%)`;

    $this.css('background-image', color);
}