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
    <div class="carousel-home-container mb-5">
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
                        $slide_title = str_replace('<br>', ' ', get_sub_field('home_slide_title'));
                        $slide_libelle = get_sub_field('home_slide_libelle');
                        $slide_text = get_sub_field('home_slide_text');

                        if ($slide_index === 0) {
                            $data_position = 'first';
                        } else if ($slide_index === count($slides) - 1) {
                            $data_position = 'last';
                        } else {
                            $data_position = 'medium';
                        }
                ?>
                        <a href="<?php echo $slide_link; ?>" class="carousel-item <?php echo $slide_index === 0 ? 'active' : ''; ?>" data-slide="<?php echo $slide_index;?>" data-position="<?php echo $data_position; ?>" style="background-image: url('<?php echo $slide_picture_desktop['url']; ?>')" target="<?php echo $slide_type_link === 'externe' ? '_blank' : ''; ?>">
                            <div class="carousel-item-container">
                                <div class="container">
                                    <div class="col-md-6 col-12">
                                        <div class="row">
                                            <p class="carousel-item-libelle"><?php echo $slide_libelle; ?></p>
                                            <div class="carousel-item-content">
                                                <h2 class="carousel-item-title">
                                                    <?php echo $slide_title; ?>
                                                </h2>
                                                <p class="carousel-item-text">
                                                    <?php echo $slide_text; ?>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    <?php endif; ?>
                <?php endwhile; ?>
            </div>
            <ul class="carousel-nav-container pt-3 pb-3">
                <?php while (have_rows('home_slider')): the_row();
                    $slide_enable = get_sub_field('home_slide_enable');
                    if ($slide_enable):
                        $slide_title = get_sub_field('home_slide_title');
                        $slide_libelle = get_sub_field('home_slide_libelle');
                        $slide_description = get_sub_field('home_slide_description');
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
            </ul>
        </div>
    </div>
    <div class="container">
        <div class="row facebook-infos-container">
            <div class="col-6">

            </div>
            <div class="col-6">

            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>