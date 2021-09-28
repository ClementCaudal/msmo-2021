<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage MSMO
 */
?>

        <footer>
            <div class="footer-border-top">
            </div>
            <div class="container">
                <div class="d-flex flex-row">
                    <div class="col-md-6 d-flex flex-row footer-border-medium">
                        <div class="col-md-4">
                            <img src="<?php echo get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo_x_small.png'; ?>" alt="Logo MSMO">
                        </div>
                        <div class="col-md-8 d-flex flex-column footer-col-left">
                            <h4>Les Mouettes de St Mars d'Outillé</h4>
                            <span>Complexe sportif Serge SOUALLE</span>
                            <span>72220 St Mars d'Outillé</span>
                            <span class="mt-4">Tél : 02.43.42.78.31</span>
                            <span>Tél : 07.86.45.47.66</span>
                            <span>E-mail : secretariat@msmo.fr</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div id="map"></div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <span>© 2020 Les Mouettes de Saint Mars d'Outillé - MSMO - <a class="legal-notice" href="#"><b>Mentions légales</b></a></span>
                </div>
            </div>
            <div class="footer-border-bottom">
            </div>
        </footer>

    <?php wp_footer(); ?>
    </body>
</html>