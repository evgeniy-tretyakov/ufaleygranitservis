<footer class="footer">

  <div class="container">
  <div class="footer__logo">
    <div class="logo-block">
      <a href="/"></a>
    </div>
  </div>
  <div class="footer__content">
    <div class="footer__menu">
      <?php
        $menu_footer = menu_tree('menu-footer');
        print render($menu_footer);
      ?>
    </div>
    <div class="footer__contacts">
        <a href="tel:89048164959" class="footer-link footer-phone">+7 (904) 816-49-59</a>
        <a href="mailto:ufaley-granit@mail.ru" class="footer-link footer-mail">ufaley-granit@mail.ru</a>
    </div>
    <div class="footer__address">
      <p class="footer__address-row">5/d, Suvorov Str,</p>
      <p class="footer__address-row">Verkhniy Ufaley</p>
    </div>
  </div>
  <div class="developer-link"><a href="https://ribbla.com/" target="_blank" class="ribbla"></a></div>
  </div>

</footer>


