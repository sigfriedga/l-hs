<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_loandhome' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '1234' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'ASCx;%Mjb)~NGpkcaz6KEN1!QNnnf`s=l7VEM!+fv0C5k],)q#~`}UJNx9lkz:8M' );
define( 'SECURE_AUTH_KEY',  'H1]`pAm<QluM-aH&Mw@IGBg81<8Mfr-}~A;UCrp KsXyk;  5&J0?$Z6aNu`lZg@' );
define( 'LOGGED_IN_KEY',    '}n|K1vY.t;tKhk8[BP^OtyDNziYkmtYXCnOM3[&m3rbR_}-Q3][h*KY1o-xcHOv1' );
define( 'NONCE_KEY',        'j,dnPXb2NG#zQn1i.?3SL5%5B<>vqG&<HOjaFXoW^u:Jt>R;e|>J]3~:gycOlK1%' );
define( 'AUTH_SALT',        'B]q7P2_jvwSPA4KlJRyrtM1Yzkg=f6J3>`Q^N7#$hpjC5Gw./..40s3k<}oI:p2F' );
define( 'SECURE_AUTH_SALT', '[!MO<Zx_:re1D~Jm~-RzD!95]Z3yJdz^#>3DQrkOqD9}/J+wF[/1EHX#sM;7y+Hs' );
define( 'LOGGED_IN_SALT',   '^o;T!7MRN,qQ:?7[O#KE4D(H)of*K17R)Yi:H%p8U_YOk>dl6;sWY]ycE;=K7mA:' );
define( 'NONCE_SALT',       'd(hj~|&qeB=>.8$XLKJ`3%me<]Pt<ZGH?x&QI,#y9Z<;|4}JZ9Yth?o?7WWh3wkM' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
