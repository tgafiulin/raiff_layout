document.addEventListener('DOMContentLoaded', function(){
    $('.js-input').on('input', function () {
        let self = $(this);
        range(self);
    });
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