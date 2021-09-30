// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const carousel = (() => {

    const init = () => {
        // Changement automatique de slide
        let liClick = false;
        let indexSlide = 0;
        let positionSlide = '';

        $('.carousel').on('slide.bs.carousel', () => {
            $('.carousel-card').removeClass('active');
            $('.carousel-nav-item-container').removeClass('active');

            if (liClick === false) {
                indexSlide = $('.carousel-item.active').data('slide') + 1;
                positionSlide = $('.carousel-item.active').data('position');
                if (positionSlide === 'last') {
                    indexSlide = 0;
                }
            }
            liClick = false;
            $(`.carousel-card[data-slide-to="${indexSlide}"]`).toggleClass('active');
            $(`.carousel-nav-item-container[data-slide-to="${indexSlide}"]`).toggleClass('active');
        });

        // Navigation verticale carousel
        $('.carousel-nav-item-container').click((event) => {
            liClick = !$(event.currentTarget).hasClass('active');

            const nbSlide = $('.carousel-nav-item-container').length;
            if (nbSlide > 1) {
                $('.carousel-nav-item-container').removeClass('active');
            }
            indexSlide = $(event.currentTarget).data('slideTo');
            positionSlide = $(event.currentTarget).data('position');
            $(event.currentTarget).toggleClass('active');
        });
    };

    return {
        init,
    };
})();

export default carousel;
