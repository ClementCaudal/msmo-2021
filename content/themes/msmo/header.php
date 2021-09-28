<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage MSMO
 */

?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo get_the_title(); ?></title>
    <link rel="manifest" href="<?php bloginfo('stylesheet_directory'); ?>/manifest.json">
    <link rel="apple-touch-icon" sizes="180x180" href="<?php bloginfo('stylesheet_directory'); ?>/assets/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php bloginfo('stylesheet_directory'); ?>/assets/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php bloginfo('stylesheet_directory'); ?>/assets/images/favicon-16x16.png">
    <link rel="mask-icon" href="<?php bloginfo('stylesheet_directory'); ?>/assets/images/safari-pinned-tab.svg" color="#000000">
    <?php wp_head(); ?>
</head>
<body>
<header>
    <section class="section-header">
        <div class="social-top-bar container">
            <div class="row">
                <div class="offset-3 col-md-4">
                    <div class="col-top-bar">
                        <ul class="social-network-list-container">
                            <li><a class="social-network" href="https://www.facebook.com/MSMO-Les-Mouettes-515010178569109/" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                            <li><a class="social-network" href="https://www.instagram.com/msmo_basket/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-5"></div>
            </div>
        </div>
    </section>

    <section class="section-header slogan">
        <div class="slogan-bar container">
            <div class="row">
                <div class="offset-lg-3 offset-xl-4 col-lg-5 col-xl-4">
                    <ul class="slogan">
                        <li><img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/slogan.png'; ?>"></li>
                    </ul>
                </div>
                <div class="col-lg-4">
                    <ul class="logos-ffbb">
                        <li><a href="https://resultats.ffbb.com/organisation/234c.html" target="_blank" title="Lien MSMO FFBB"><img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo-ffbb.png'; ?>"></a></li>
                        <li><a href="https://www.basketsarthe.org/" target="_blank" title="Lien FFBB Sarthe"><img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo-ffbb-sarthe.png'; ?>"></a></li>
                        <li><img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo-ffbb-citoyen.png'; ?>" alt="Label FFBB Citoyen 1 Étoile" title="Label FFBB Citoyen 1 Étoile"></li>
                        <li><a href="https://www.paysdelaloirebasketball.org/" target="_blank" title="Lien FFBB Pays de la Loire"><img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo-pdl.png'; ?>"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="menu-navigation" class="section-header">
        <div class="menu-header">
            <div class="container">
                <div class="row position-relative">
                    <div class="col-3">
                        <a class="logo logo-large" href=""><h1><img class="position-absolute" src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo_x_large.png'; ?>"></h1></a>
                        <a class="logo logo-small hidden" href=""><h1><img class="position-absolute" src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo_xx_small.png'; ?>"></h1></a>
                    </div>
                    <div class="col-lg-8 col-xl-9 offset-lg-1 offset-xl-0 position-static">
                        <ul>
                            <li id="menu_item_home" class="menu-item current-menu"><a href="#">accueil</a></li>
                            <li id="menu_item_club" class="menu-item"><a href="#">club</a></li>
                            <li id="menu_item_teams" class="menu-item"><a href="#">équipes</a></li>
                            <li id="menu_item_plannings" class="menu-item"><a href="#">plannings matchs</a></li>
                            <li id="menu_item_infos" class="menu-item"><a href="#">infos pratiques</a></li>
                            <li id="menu_item_events" class="menu-item"><a href="#">événements</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="menu-navbar" style="display: none">
                <div class="container">
                    <div id="menu_navbar_teams" class="row content-menu-navbar" style="display: none">
                        <div class="column-navbar column-navbar-start col-md-4">
                            <h2 class="text-center">Séniors</h2>
                            <div class="d-flex justify-content-around">
                                <ul>
                                    <li><a href="{{ path('team.show', {'libelle': 'sg1'}) }}">Séniors Garçons 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'sg2'}) }}">Séniors Garçons 2</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'sg3'}) }}">Séniors Garçons 3</a></li>
                                </ul>
                                <ul>
                                    <li><a href="{{ path('team.show', {'libelle': 'sf1'}) }}">Séniors Filles 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'sf2'}) }}">Séniors Filles 2</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="column-navbar col-md-4">
                            <h2 class="text-center">Jeunes</h2>
                            <li class="d-flex justify-content-around">
                                <ul>
                                    <li><a href="{{ path('team.show', {'libelle': 'u20m'}) }}">U20 Garçons 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'u17m'}) }}">U17 Garçons 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'u15m'}) }}">U15 Garçons 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'u13m-1'}) }}">U13 Garçons 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'u13m-2'}) }}">U13 Garçons 2</a></li>
                                </ul>
                                <ul>
                                    <li><a href="{{ path('team.show', {'libelle': 'u18f'}) }}">U18 Filles 1</a></li>
                                    <li><a href="{{ path('team.show', {'libelle': 'u15f'}) }}">U15 Filles 1</a></li>
                                    <li><a href="#">U13 Filles 1</a></li>
                                </ul>
                        </div>
                        <div class="column-navbar column-navbar-end col-md-4">
                            <h2 class="text-center">Mini basket</h2>
                            <div class="d-flex justify-content-around">
                                <ul>
                                    <li><a href="{{ path('team.show', {'libelle': 'u11m'}) }}">U11 Garçons 1</a></li>
                                    <li><a href="#">U9 Garçons 1</a></li>
                                    <li><a href="#">U7 Garçons 1</a></li>
                                    <li><a href="#">Baby basket</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#">U11 Filles 1</a></li>
                                    <li><a href="#">U9 Filles 1</a></li>
                                    <li><a href="#">U7 Filles 1</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="menu_navbar_club" class="row content-menu-navbar" style="display: none">
                        <div class="column-navbar col-md-12">
                            <h2 class="text-center">Club</h2>
                            <div class="d-flex justify-content-center">
                                <ul>
                                    <li><a href="{{ path('historic') }}">Historique du club</a></li>
                                    <li><a href="{{ path('shop') }}">Boutique MSMO</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="menu_navbar_plannings" class="row content-menu-navbar" style="display: none">
                        <div class="column-navbar col-md-12">
                            <h2 class="text-center">Plannings</h2>
                            <div class="d-flex justify-content-center">
                                <ul>
                                    <li><a href="{{ path('plannings') }}">Planning des matchs / Arbitres / OTM du week-end</a></li>
                                    <li><a href="#">Historique des plannings de la saison</a></li>
                                    <li><a href="{{ path('senior_permanances') }}">Permanances séniors</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="menu_navbar_infos" class="row content-menu-navbar" style="display: none">
                        <div class="column-navbar col-md-12">
                            <h2 class="text-center">Infos pratiques</h2>
                            <div class="d-flex justify-content-center">
                                <ul>
                                    <li><a href="#">Licences</a></li>
                                    <li><a href="{{ path('trainings') }}">Entraînements</a></li>
                                    <li><a href="#">Contacts et plan</a></li>
                                    <li><a href="#">Liens utiles et réseaux sociaux</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div id="menu_navbar_events" class="row content-menu-navbar" style="display: none">
                        <div class="column-navbar col-md-12">
                            <h2 class="text-center">Événements</h2>
                            <div class="d-flex justify-content-center">
                                <ul>
                                    <li><a href="{{ path('basketball_camp') }}">Stages de basket</a></li>
                                    <li><a href="{{ path('garages_sale') }}">Vide greniers</a></li>
                                    <li><a href="{{ path('dancing_party') }}">Soirée dansante</a></li>
                                    <li><a href="{{ path('tournaments') }}">Tournois Julien DESPRES et Serge Soualle</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</header>