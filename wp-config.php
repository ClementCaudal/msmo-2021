<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache

/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

/** Message d'erreur si le fichier config.ini n'existe pas **/
if ( !is_file( dirname(__FILE__) . "/config.ini") ){
	die("ERROR: File config.ini not found.\n");
}
$ini_arr = parse_ini_file("config.ini");

/** Message d'erreur si la variable ENV n'est pas définie **/
if (!isset($ini_arr['ENV'])) {
	die("ERROR: ENV variable into file config.ini not found.\n");
}
$env = $ini_arr['ENV'];

/** Message d'erreur si le fichier wp-config-ENV.php n'existe pas */
if ( is_file( dirname( __FILE__ ) . '/wp-conf/wp-config-'.$env.'.php' ) ) {
	require( dirname( __FILE__ ) . '/wp-conf/wp-config-'.$env.'.php' );
}
else {
	die("ERROR: File wp-config-".$env.".php. not found.\n");
}

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'NAqsRK0dW{xE4ONaGHWrk^tibZKQ<^u.l6yg{c:Cfyb t#Ku,0mgLuaR|M[(e!ca' );
define( 'SECURE_AUTH_KEY',  '~zTj?&dKfI-/1=L|v3I;xk: .dEfDz>7!O+oSt3#{79*z{QWAZ g?ze/Sd4lNx r' );
define( 'LOGGED_IN_KEY',    'J%cscInBDibe6|ii(uR;* Z9BSFqB,_mv)1HlZkA[ 3~|/cb2VZXLTM8/`cx`Mkg' );
define( 'NONCE_KEY',        'xmXoeVlSG6j ~aR=,s`JO;kvkMX/eGC4sR&v(EQ[PLow^jZvE28km3597<L0@4X!' );
define( 'AUTH_SALT',        'aA|oC,pV{(S%N+AkM^If>y(qIZPE3![0zV|A)Ts,,IR`0IXlGJyZJnn1a(#7bn#[' );
define( 'SECURE_AUTH_SALT', 'ifEy(pQY_5SjagF:gI=2f7$u|^sX1qi@o:$S*inG9i%v9R/|?y9^7vzQ]mA[@?gY' );
define( 'LOGGED_IN_SALT',   'Kbzcnukp0CU&5hW}_A{{Ct>#Mg8L%.vQG~`$:p::FFL&bKcC#^$%[GF&XcS?,P=W' );
define( 'NONCE_SALT',       '|_%gdTQF.d=.;m&><{Lz&51sxf,5VKU%:T79!Av =8HoY.%l,cM]IJq7P</R2[6p' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'ma_';

/**
 * Langue de localisation de WordPress, par défaut en Anglais.
 *
 * Modifiez cette valeur pour localiser WordPress. Un fichier MO correspondant
 * au langage choisi doit être installé dans le dossier wp-content/languages.
 * Par exemple, pour mettre en place une traduction française, mettez le fichier
 * fr_FR.mo dans wp-content/languages, et réglez l'option ci-dessous à "fr_FR".
 */
define('WPLANG', 'fr_FR');

/** Changement du nom du répertoire wp-content => content. */
define ('WP_CONTENT_FOLDERNAME', 'content');
define ('WP_CONTENT_DIR', ABSPATH . WP_CONTENT_FOLDERNAME) ;

if(isset($_SERVER["HTTPS"]) && $_SERVER["HTTPS"] = "on"){
	define('WP_SITEURL', 'https://' . $_SERVER['HTTP_HOST'] . '/');
}else{
	define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/');
}
define('WP_CONTENT_URL', WP_SITEURL . WP_CONTENT_FOLDERNAME);
define ('WP_PLUGIN_DIR', WP_CONTENT_DIR . '/plugins');

define('FS_METHOD','direct');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
