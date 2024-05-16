### Deliverables
- A GitHub repository link containing all the code and documentation for your project.

https://github.com/torrelocascio/three-ships-test/settings

- A sql dump of the database for the WordPress site.

    Sql dump is attached to repo as it's not very large


- A brief explanation of your design and architecture choices, including how you approached the project requirements and any challenges you faced.


#### Set Up
    Blocks- Deciding what tools to use was a challenge overall - how to create the homepage, how much of blocks/page editor should I use vs custom development. I decided on blocks editor as it seemed flexible and basic. I could add my styles on via class and css. Took me a long time to get used to the editor.

    Webpack - I knew I wanted to potentially download some npm packages. Also needed this for bundles/minifying and development speed

    Initial Login - Was never given a pwd for my main wordpress account on 1st sign in - had to connect via terminal into Maria DB Intstance and delete my password. Run MD5 on my new password “password” and update record in DB. 

    Exporting Maria DB To Send via email
    Spent way to much time on it. I was expecting to find a .sql file in the filesystem - was looking in var/lib/mysql and was not seeing it. “Wordpress” folder was there which is my db. Were many sub files in there, for schemas and data.
    Tried mysql-dump for a long time, but realized I needed:
    mariadb-dump --user wordpress --password=wordpress wordpress > /tmp/new-db-dump.sql

#### Feature related
    Using Geist as font on * elements. Was overriding my fontawesome font-family causing icons to not work. Had to set i -> font-family to override it
    Carousel Styling

    Types of Gutters - decided to use shortcode and include it on homepage. At my current role, we do something similar to inject react apps this way.

    Using Lightbox2 - Ended up downloading zip and adding to the repo, then enqueued the scripts. Instructions weren’t clear on how to use in WP setup. They had npm package, but no way to instantiate the Lightbox. Also had loading scripts with script tag with local reference. But that doesn’t work on product post template page

    ACF+CPT For Prodct Pages - I wanted to ensure that site admins have ability to easily edit content of products, so I felt that this was a great way to accomplish that. 


#### Could do better

    Styling - time reasons, didn’t bother with picture perfect

    Moving theme as child-theme setup

    Custom Post Product Image Gallery

    Used CPT and ACF and they didn’t have Image Gallery as part of free tier, so I hacked together 4 different fields for images.
