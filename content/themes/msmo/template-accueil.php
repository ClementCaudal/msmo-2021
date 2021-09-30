<?php
/**
 * The template for MSMO
 *
 * @package WordPress
 * @subpackage MSMO
 * Template Name: Accueil
 *
 */

get_header();

?>

<main class="accueil">
    <div class="carousel-home-container mb-4">
        <div id="carousel-home-slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <!--                        {% for slide in slides|sort((a, b) => a.numberSlide <=> b.numberSlide) if ((slide.dateStart|date("Y/m/d") <= "now"|date("Y/m/d")) and (slide.dateEnd|date("Y/m/d") >= "now"|date("Y/m/d"))) %}-->
                <a href="#" class="carousel-item active" data-slide="0" data-position="first" style="background-image: url('/content/uploads/test.jpg')">
<!--                    <div class="d-flex flex-row no-gutters">-->
<!--                        <div class="col-md-8 crop-img">-->
<!--                            <img class="carousel-img" src="/content/uploads/test.jpg" alt="{{ slide.fileNameImage }}" onclick="window.open('{{ asset('pdf/slides/'~slide.fileNamePDF) }}')">-->
<!--                        </div>-->
<!--                        <div class="col-md-4 d-flex flex-row">-->
<!--                            <div class="carousel-caption d-none d-md-block">-->
<!--                                <img class="mb-3" src="/content/uploads/test.jpg" alt="{{ slide.logoSlide }}">-->
<!--                                <p>{{ slide.subTitle }}</p>-->
<!--                                <p>{{ slide.description }}</p>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                </a>
                <a href="#" class="carousel-item" data-slide="1" data-position="last" style="background-image: url('/content/uploads/test.jpg')">
                    <!--                    <div class="d-flex flex-row no-gutters">-->
                    <!--                        <div class="col-md-8 crop-img">-->
<!--                    <img class="carousel-img" src="/content/uploads/test.jpg" alt="{{ slide.fileNameImage }}" onclick="window.open('{{ asset('pdf/slides/'~slide.fileNamePDF) }}')">-->
                    <!--                        </div>-->
                    <!--                        <div class="col-md-4 d-flex flex-row">-->
                    <!--                            <div class="carousel-caption d-none d-md-block">-->
                    <!--                                <img class="mb-3" src="/content/uploads/test.jpg" alt="{{ slide.logoSlide }}">-->
                    <!--                                <p>{{ slide.subTitle }}</p>-->
                    <!--                                <p>{{ slide.description }}</p>-->
                    <!--                            </div>-->
                    <!--                        </div>-->
                    <!--                    </div>-->
                </a>
                <!--                        {% endfor %}-->
            </div>
            <ul class="carousel-nav-container pt-3 pb-3">
<!--                {% set index_slide = 1 %}-->
<!--                {% for slide in slides|sort((a, b) => a.numberSlide <=> b.numberSlide) if ((slide.dateStart|date("Y/m/d") <= "now"|date("Y/m/d")) and (slide.dateEnd|date("Y/m/d") >= "now"|date("Y/m/d"))) %}-->
                <li class="carousel-nav-item-container active" data-target="#carousel-home-slider" data-slide-to="0" data-position="first">
                    <p class="carousel-nav-item-title">Plannings</p>
                    <div class="carousel-nav-item-content">
                        <p>Plannings<br>du 03-04 Octobre 2021</p>
                    </div>
                </li>
                <li class="carousel-nav-item-container" data-target="#carousel-home-slider" data-slide-to="1" data-position="last">
                    <p class="carousel-nav-item-title">Boutique</p>
                    <div class="carousel-nav-item-content">
                        <p>Boutique officielle<br>MSMO - 2021</p>
                    </div>
                </li>
<!--                {% set index_slide = index_slide + 1 %}-->
<!--                {% endfor %}-->
            </ul>
        </div>
    </div>
</main>

<?php get_footer(); ?>