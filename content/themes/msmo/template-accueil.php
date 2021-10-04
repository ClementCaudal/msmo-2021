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

$current_post_id = $wp_query->get_queried_object_id();
$post = get_post($current_post_id);
$slides = get_field('home_slider');

?>

<main class="accueil">
    <div class="carousel-home-container mb-4">
        <div id="carousel-home-slider" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <!--                        {% for slide in slides|sort((a, b) => a.numberSlide <=> b.numberSlide) if ((slide.dateStart|date("Y/m/d") <= "now"|date("Y/m/d")) and (slide.dateEnd|date("Y/m/d") >= "now"|date("Y/m/d"))) %}-->
                <?php while (have_rows('home_slider')): the_row();
                    $slide_enable = get_sub_field('home_slide_enable');
                    if ($slide_enable):
						$slide_picture_desktop = get_sub_field('home_slide_picture_desktop');
						$slide_picture_mobile = get_sub_field('home_slide_picture_mobile');
						$slide_link = get_sub_field('home_slide_link');
						$slide_type_link = get_sub_field('home_slide_type_link');
                        $slide_index = get_row_index() - 1;
                        if ($slide_index === 0) {
                            $data_position = 'first';
                        } else if ($slide_index === count($slides) - 1) {
                            $data_position = 'last';
                        } else {
                            $data_position = 'medium';
                        }
                ?>
                        <a href="<?php echo $slide_link; ?>" class="carousel-item <?php echo $slide_index === 0 ? 'active' : ''; ?>" data-slide="<?php echo $slide_index;?>" data-position="<?php echo $data_position; ?>" style="background-image: url('<?php echo $slide_picture_desktop['url']; ?>')" target="<?php echo $slide_type_link === 'externe' ? '_blank' : ''; ?>">
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
                    <?php endif; ?>
                <?php endwhile; ?>
<!--                <a href="#" class="carousel-item" data-slide="1" data-position="last" style="background-image: url('/content/uploads/test.jpg')">-->
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
<!--                </a>-->
                <!--                        {% endfor %}-->
            </div>
            <ul class="carousel-nav-container pt-3 pb-3">
<!--                {% set index_slide = 1 %}-->
<!--                {% for slide in slides|sort((a, b) => a.numberSlide <=> b.numberSlide) if ((slide.dateStart|date("Y/m/d") <= "now"|date("Y/m/d")) and (slide.dateEnd|date("Y/m/d") >= "now"|date("Y/m/d"))) %}-->
                <?php while (have_rows('home_slider')): the_row();
                    $slide_enable = get_sub_field('home_slide_enable');
                    if ($slide_enable):
                        $slide_title = get_sub_field('home_slide_title');
                        $slide_libelle = get_sub_field('home_slide_libelle');
                        $slide_text = get_sub_field('home_slide_text');
						$slide_index = get_row_index() - 1;
						if ($slide_index === 0) {
							$data_position = 'first';
						} else if ($slide_index === count($slides) - 1) {
							$data_position = 'last';
						} else {
							$data_position = 'medium';
						}
                ?>
                        <li class="carousel-nav-item-container <?php echo $slide_index === 0 ? 'active' : ''; ?>" data-target="#carousel-home-slider" data-slide-to="<?php echo $slide_index; ?>" data-position="<?php echo $data_position; ?>">
                            <p class="carousel-nav-item-title"><?php echo $slide_libelle; ?></p>
                            <div class="carousel-nav-item-content">
                                <p><?php echo $slide_title; ?></p>
                            </div>
                        </li>
                    <?php endif; ?>
                <?php endwhile; ?>
<!--                <li class="carousel-nav-item-container" data-target="#carousel-home-slider" data-slide-to="1" data-position="last">-->
<!--                    <p class="carousel-nav-item-title">Boutique</p>-->
<!--                    <div class="carousel-nav-item-content">-->
<!--                        <p>Boutique officielle<br>MSMO - 2021</p>-->
<!--                    </div>-->
<!--                </li>-->
<!--                {% set index_slide = index_slide + 1 %}-->
<!--                {% endfor %}-->
            </ul>
        </div>
    </div>
</main>

<?php get_footer(); ?>