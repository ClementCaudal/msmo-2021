<?php

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'msmo2021' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 */
define( 'WP_DEBUG', true );
define('WP_DEBUG_DISPLAY', true);

/* Disable all core automatic updates */
define( 'WP_AUTO_UPDATE_CORE', false );

/* enable log file */
define('WP_DEBUG_LOG', true);

define('EMAIL_ADMIN', 'clement.caudal@hotmail.fr');
define('CONTACT_MAIL', 'clement.caudal@hotmail.fr');

/** Enable W3 Total Cache */
define('WP_CACHE', false);

/**
 * Attribuer valeur par défaut de HTTP_HOST si non définie
 */
if (!isset($_SERVER["HTTP_HOST"])) {
    $_SERVER["HTTP_HOST"] = "msmo.test";
}