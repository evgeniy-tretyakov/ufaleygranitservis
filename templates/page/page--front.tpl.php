<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
?>
<?php include_once(drupal_get_path('theme', 'main_theme') . "/templates/includes/inc-page-header.tpl.php"); ?>

<div class="main-container <?php print $container_class; ?>">
  <div class="row">

    <section<?php print $content_column_class; ?>>
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>


      <div class="top-banner">
        <?php
//Баннер
          print views_embed_view('banner_main', 'block_1');
        ?>
      </div>

      <div class="index-products">
        <h2 class="section-header">Products</h2>
        <?php
// Каталог на главной
          print views_embed_view('catalog_main', 'default');
        ?>
      </div>


      <div class="index-materials">
        <div class="container">
          <h2 class="section-header">Materials</h2>
          <?php
  // Список материалов
            //print views_embed_view('material_main', 'default');
          ?>
            <?php
              // Список материалов
              $blockObject = block_load('rbl_main', 'materials');
              $block = _block_get_renderable_array(_block_render_blocks(array($blockObject)));
              print drupal_render($block);
            ?>
          <?php
  // Информация о материалах
            print views_embed_view('info_material', 'default');
          ?>
        </div>
      </div>

      <div class="advantages-block">
        <div class="container index-advantages">
          <h2 class="section-header">Benefits</h2>
          <div class="advantages-row">

            <div class="advantages-item advItem-1">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Individual approach</strong></p></div>
            </div>
              <div class="advantage-text"><p>We understand in detail all the wishes and needs of our clients.</p></div>
            </div>


            <div class="advantages-item advItem-2">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Reliability</strong></p></div>
            </div>
              <div class="advantage-text"><p>We have all the necessary licenses to provide telematic services.</p></div>
            </div>

            <div class="advantages-item advItem-3">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Comprehensive service</strong></p></div>
            </div>
              <div class="advantage-text"><p>We can perform turnkey works. The client’s task is only to obtain the results.</p></div>
            </div>

            <div class="advantages-item advItem-4">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Price quality</strong></p></div>
              </div>
                <div class="advantage-text"><p>We do not raise prices. We work directly with suppliers.</p></div>
              </div>

            <div class="advantages-item advItem-5">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Own production</strong></p></div>
              </div>
                <div class="advantage-text"><p>We have our own production facilities. Our prices are minimal!</p></div>
              </div>

            <div class="advantages-item advItem-6">
            <div class="advantage-description">
              <div class="advantage-icon">
                <div></div>
              </div>
              <div class="advantage-title"><p><strong>Technologies</strong></p></div>
              </div>
                <div class="advantage-text"><p>High-quality finishing materials and modern technologies.</p></div>
              </div>

            </div>
          </div>
        </div>
      </div>

        <?php
          // Блок о нас
          $blockObject = block_load('block', '1');
          $block = _block_get_renderable_array(_block_render_blocks(array($blockObject)));
          print drupal_render($block);
        ?>

    </section>

  </div>
</div>

<?php include_once(drupal_get_path('theme', 'main_theme') . "/templates/includes/inc-page-footer.tpl.php"); ?>


<?php if (!empty($page['hidden'])): ?>
  <div class="hidden-region <?php print $container_class; ?>">
    <?php print render($page['hidden']); ?>
  </div>
<?php endif; ?>

