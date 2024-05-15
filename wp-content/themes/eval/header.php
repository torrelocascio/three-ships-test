<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/464ca047f3.js" crossorigin="anonymous"></script>

    <meta charset="<?php bloginfo('charset'); ?>" />
    <meta name="viewport" content="width=device-width" />
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="wrapper" class="hfeed">
        <header id="header" role="banner">
            <div id="branding">
                <div id="site-title" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                    <a href="<?php esc_url(home_url('/')) ?>" title="<?php esc_attr(get_bloginfo('name')) ?>" rel="home" itemprop="url"><i class="home-icon fas fa-home"></i></a>
                    <?php
                    if (is_front_page() || is_home() || is_front_page() && is_home()) {
                    ?>
                        <span class="headline">Our Gutters Are Available in <span id="three-ships-user-location">Your Location</span></span>
                    <?php
                    }
                    ?>
                </div>
                <div id="site-description" <?php if (!is_single()) {
                                                echo ' itemprop="description"';
                                            } ?>><?php bloginfo('description'); ?></div>
            </div>
            <nav id="menu" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
                <?php wp_nav_menu(array('theme_location' => 'main-menu', 'link_before' => '<span itemprop="name">', 'link_after' => '</span>')); ?>
            </nav>
        </header>
        <div id="container">
            <main id="content" role="main">