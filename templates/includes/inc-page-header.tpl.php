<header class="header">

  <div id="header__top-line" class="header__top-line">
    <div class="container">
      <div class="header__mobile-logo">
        <a href="/"></a>
      </div>
      <div class="header__top-content">
        <p class="header-slogan">Каждое наше изделие — уникально.</p>
        <a href="tel:89048164959" class="header-phone">+7 (904) 816-49-59</a>
        <a href="mailto:ufaley-granit@mail.ru" class="header-mail">ufaley-granit@mail.ru</a>
      </div>
      <div id="header__burger" class="header__burger"></div>
    </div>
  </div>

  <div id="header__menu-row" class="header__menu-row">
    <div class="header__menu-wrapper container">
      <div class="header__list-wrapper header--left">
        <?php
          // Меню слева от лого
          $menu_header1 = menu_tree('menu-header1');
          print render($menu_header1);
        ?>
      </div>
      <div class="header__logo">
        <a href="/"></a>
      </div>
      <div class="header__list-wrapper header--right">
        <?php
          // Меню права от лого
          $menu_header2 = menu_tree('menu-header2');
          print render($menu_header2);
        ?>
        <div id="lang-switcher" class="lang-switcher">
          <a id="ru" href="http://ru.ufaleygranitservis.com/" class="ruru">ru</a>
          <a id="en" href="http://ufaleygranitservis.com/" class="enen">en</a>
        </div>
      </div>
    </div>
  </div>
</header>