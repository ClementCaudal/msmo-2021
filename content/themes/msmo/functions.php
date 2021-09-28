<?php

// ---- Custom Login form
get_template_part('inc/functs', 'custom_login');

// ---- Administration
get_template_part('inc/functs', 'admin');

// Register WordPress nav menu
register_nav_menu('top', 'Top menu');

// ---- Add taxonomies to product CPT

// Include custom breadcrumb
//require_once('parts/breadcrumb.php');

/*******************************************************************
SCRIPTS JS & CSS
 *******************************************************************/
function add_style_js() {
    $js_directory = get_template_directory_uri();

    /* CSS */
    wp_enqueue_style( 'vendor-style', get_template_directory_uri() . '/assets/css/vendor.min.css');
    wp_enqueue_style( 'style', get_template_directory_uri() . '/assets/css/styles.min.css', array(), filemtime(get_template_directory().'/assets/css/styles.min.css'), false);

    /* Javascript */
    if ( !is_admin() ) wp_deregister_script('jquery');
    wp_enqueue_script( 'jquery', $js_directory.'/assets/js/vendor.min.js', array(), '1.0', true );
    wp_enqueue_script( 'script3-scrptdfr', $js_directory.'/assets/js/app.js', array(), filemtime(get_template_directory().'/assets/js/app.js'), true );

    wp_localize_script('script3-scrptdfr', 'ajaxurl', array(admin_url( 'admin-ajax.php' )) );

    /* preload ressources */
    wp_enqueue_style( 'preload-stylesheet-vendor-style', get_template_directory_uri() . '/assets/css/vendor.min.css');
    wp_enqueue_style( 'preload-stylesheet-style', get_template_directory_uri() . '/assets/css/styles.min.css', array(), filemtime(get_template_directory().'/assets/css/styles.min.css'), false);

    /* Webfonts */
    wp_enqueue_style( 'preload-woff2-helvetica-blackcond', get_template_directory_uri() . '/assets/webfonts/Helvetica-Black/HelveticaNeue-BlackCond.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-blackcondobl', get_template_directory_uri() . '/assets/webfonts/Helvetica-Black/HelveticaNeue-BlackCondObl.otf', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-boldcond', get_template_directory_uri() . '/assets/webfonts/Helvetica-Bold/HelveticaNeue-BoldCond.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-boldcondobl', get_template_directory_uri() . '/assets/webfonts/Helvetica-Bold/HelveticaNeue-BoldCondObl.otf', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-light', get_template_directory_uri() . '/assets/webfonts/HelveticaNeue-Light.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-mediumcond', get_template_directory_uri() . '/assets/webfonts/HelveticaNeue-MediumCond.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-regularcond', get_template_directory_uri() . '/assets/webfonts/HelveticaNeue-RegularCond.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-helvetica-roman', get_template_directory_uri() . '/assets/webfonts/HelveticaNeue-Roman.woff2', array(), null);

    wp_enqueue_style( 'preload-woff2-fareg', get_template_directory_uri() . '/assets/webfonts/fontawesome/fa-regular-400.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-falight', get_template_directory_uri() . '/assets/webfonts/fontawesome/fa-light-300.woff2', array(), null);
    wp_enqueue_style( 'preload-woff2-fasolid', get_template_directory_uri() . '/assets/webfonts/fontawesome/fa-solid-900.woff2', array(), null);
}
add_action('wp_enqueue_scripts', 'add_style_js');

// ---- modifie l'intégration des styles css
add_filter('style_loader_tag', 'my_style_loader_tag_filter',  10, 2);
function my_style_loader_tag_filter($html, $handle) {
    if(strpos($handle, 'preload-stylesheet') !== false) {
        return str_replace("rel='stylesheet'", "rel='preload' as='style'", $html);
    }
    if(strpos($handle, 'preload-script') !== false) {
        return str_replace("rel='stylesheet'", "rel='preload' as='script'", $html);
    }
    if(strpos($handle, 'preload-woff') !== false) {
        return str_replace("rel='stylesheet'", "rel='preload' as='font' type='font/woff' crossorigin='anonymous' ", $html);
    }
    if(strpos($handle, 'preload-woff2') !== false) {
        return str_replace("rel='stylesheet'", "rel='preload' as='font' type='font/woff2' crossorigin='anonymous' ", $html);
    }
    return $html;
}

// ---- modifie l'intégration des scripts js
add_filter('script_loader_tag', 'my_script_loader_tag_filter',  10, 3);
function my_script_loader_tag_filter($tag, $handle, $src){
    if(false === stripos($tag, 'async') && false === stripos($tag, 'defer')){
        if(strpos($handle, 'scrptasnc') !== false) {
            $tag = str_replace('<script ', '<script async="async" ', $tag);
        }
        if(strpos($handle, 'scrptdfr') !== false) {
            $tag = str_replace(' src', ' defer src', $tag);
        }
    }
    return $tag;
}
