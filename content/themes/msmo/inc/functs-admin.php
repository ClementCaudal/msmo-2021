<?php

/*************************************************************
							ADMINISTRATION
*************************************************************/

show_admin_bar(false);

if (is_admin() ) {
	/** Masque les menus dans l'admin */
	function remove_menu_items() {
		remove_menu_page( 'edit.php' );                   //Posts
		remove_menu_page( 'edit-comments.php' );          //Comments
		//remove_menu_page( 'themes.php' );                 //Appearance

		if( !current_user_can('administrator') ){
			remove_menu_page( 'tools.php' );                  //Tools
			remove_action( 'admin_notices', 'update_nag', 3 ); // Hiding the Update Notification
			remove_menu_page('edit.php?post_type=acf-field-group'); // ACF
			// remove_menu_page( 'users.php' );                  //Users
			// remove_menu_page( 'options-general.php' );        //Settings
			// remove_menu_page( 'plugins.php' );                //Plugins
			// remove_menu_page('revisr'); 						// Revisr
			// remove_menu_page('ninja-forms');				// Ninja form
			// remove_menu_page('mo_ldap_local_login');				// Ninja form

			// ---- Vide les widgets par défaut du dashboard
			function remove_dashboard_widgets() {
				global $wp_meta_boxes;
				unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
				unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
				unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
				unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
				unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
				unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
				unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
				unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
			}
			add_action('wp_dashboard_setup', 'remove_dashboard_widgets' );
		}
	}
	add_action('admin_menu', 'remove_menu_items');

	/** Custom BO logo */
	function wpb_custom_logo() {
		echo '
		<style type="text/css">
			#wpadminbar #wp-admin-bar-wp-logo > .ab-item {
				margin-right: 14px;
			}
			#wpadminbar #wp-admin-bar-wp-logo > .ab-item .ab-icon:before {
				background-image: url(' . get_bloginfo('stylesheet_directory') . '/assets/images/logo/logo_small.png) !important;
				background-position: 0 50%;
				color: rgba(0, 0, 0, 0);
				background-size: contain;
				background-repeat: no-repeat;
				width: 45px;
				display: inline-block;
			}
			#wpadminbar #wp-admin-bar-wp-logo.hover > .ab-item .ab-icon {
				background-position: 0 0;
			}
			/* style des valeurs nutritionelle pour les produits */
			.pdt_valnut .acf-input .acf-fields{
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}
			.pdt_valnut .acf-input .acf-fields >div:nth-child(odd){
				width: 60%;
			}
			.pdt_valnut .acf-input .acf-fields >div:nth-child(even){
				width: 40%;
			}
			.pdt_valnut .acf-input .acf-fields >div:nth-child(odd) .acf-label{
				width: 60%;
			}
			.pdt_valnut .acf-input .acf-fields >div:nth-child(odd):before{
				width: 60%;
			}
			.pdt_valnut .acf-input .acf-fields >div:nth-child(odd) .acf-input{
				width: 40%;
			}
			/* cache le bouton ninja form "ajouter un formulaire" */
			.acf-input .wp-editor-tools a.nf-insert-form {
				display: none;
			}

		</style>';
	}
	add_action('wp_before_admin_bar_render', 'wpb_custom_logo');
}
?>
