// This is an examples of simple export.
//
// You can remove or add your own function in this file.

const header = (() => {

    const init = () => {
        $(window).scroll(() => {
            if ($(document).scrollTop() >= 100) {
                $('.menu-navbar').addClass('scroll-active');
                $('.menu-header').addClass('scroll-active');
                $('.logo-large').addClass('hidden');
                $('.logo-small').removeClass('hidden');
            } else {
                $('.menu-navbar').removeClass('scroll-active');
                $('.menu-header').removeClass('scroll-active');
                $('.logo-large').removeClass('hidden');
                $('.logo-small').addClass('hidden');
            }
        });

        $('.menu-item').mouseenter((event) => {
            $('.menu-navbar').show();
            $('.content-menu-navbar').hide();

            const idItem = $(event.currentTarget).attr('id');

            switch (idItem) {
                case 'menu_item_club':
                    $('#menu_navbar_club').show();
                    break;
                case 'menu_item_teams':
                    $('#menu_navbar_teams').show();
                    break;
                case 'menu_item_plannings':
                    $('#menu_navbar_plannings').show();
                    break;
                case 'menu_item_infos':
                    $('#menu_navbar_infos').show();
                    break;
                case 'menu_item_events':
                    $('#menu_navbar_events').show();
                    break;
                default:
                    break;
            }
        });
        $('.menu-navbar').mouseleave(() => {
            $('.menu-navbar').hide();
            $('.content-menu-navbar').hide();
        });
    };

    return {
        init,
    };
})();

export default header;
