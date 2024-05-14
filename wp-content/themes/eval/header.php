<!DOCTYPE html>
<html <?php language_attributes(); ?> <?php blankslate_schema_type(); ?>>

<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

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
                    <span id="home-icon">HOME<a href="<?php esc_url(home_url('/'))?>" title="<?php esc_attr(get_bloginfo('name'))?>" rel="home" itemprop="url"></a></span>
                    <?php
                    if (is_front_page() || is_home() || is_front_page() && is_home()) {
                        ?>
                        <h1>Our Gutters Are Avaialble in <span id="available-in-location">Your Location</span></h1>
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