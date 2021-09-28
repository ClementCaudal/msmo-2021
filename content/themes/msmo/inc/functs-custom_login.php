<?php
function my_login_logo() {
	?>
    <style type="text/css">
        #login h1 a, .login h1 a {
            background-image: url('<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo/logo_x_large.png');
            width: 200px;
			background-size: contain;
			background-repeat: no-repeat;
        }
		.login {
			background: #1B1B1B;
		}
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'my_login_logo' );

function my_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'my_login_logo_url' );

function my_login_logo_url_title() {
    return 'Groupe Legrand';
}
add_filter( 'login_headertext', 'my_login_logo_url_title' );

?>
