<?php get_header(); ?>

<div class="x-main full" role="main">

    <?php while (have_posts()) : the_post(); ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div>
                <div class="entry-content">
                    <div class="section">
                        <div class="section-inner top">
                            <?php if (has_post_thumbnail()) : ?>
                                <div class="image-container">

                                    <a href="<?php the_post_thumbnail_url('full'); ?>" title="<?php $attachment_id = get_post_thumbnail_id($post->ID);
                                                                                                the_title_attribute(array('post' => get_post($attachment_id))); ?>"><?php the_post_thumbnail('full', array('itemprop' => 'image')); ?></a>
                                <?php endif; ?>
                                </div>


                                <meta itemprop="description" content="<?php echo esc_html(wp_strip_all_tags(get_the_excerpt(), true)); ?>" />
                                <div class="product-description-container">
                                    <h2><?php the_title(); ?></h2>
                                    <?php
                                    $post_id = get_the_ID();
                                    $description = get_post_meta($post_id, 'description', true);
                                    $description_bullets_string = get_post_meta($post_id, 'description_bullets', true);
                                    $description_bullets = explode("--", $description_bullets_string);
                                    $price = get_post_meta($post_id, 'product_price', true);
                                    ?>
                                    <p class="full-description"><?php echo $description ?></p>
                                    <ul class="list description-bullet-list">
                                        <?php foreach ($description_bullets as $bullet) {
                                        ?>
                                            <li class="description-bullet description-bullet-item fa-solid fa-check"><i></i><span><?php echo $bullet; ?></span></li>
                                        <?php } ?>

                                    </ul>

                                    <div class="price-container">
                                        <span class="price-label">Price:</span>
                                        <span class="price-value">$<?php echo $price; ?></span>
                                        <button class="buy">Buy Now</button>
                                    </div>
                                </div>
                        </div>

                    </div>


                </div>
            </div>
        </article>

    <?php endwhile; ?>

</div>

<?php get_footer(); ?>