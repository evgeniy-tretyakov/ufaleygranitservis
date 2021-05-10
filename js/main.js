(function ($) {
  burgerMenuOpener = function(trigger, menu, triggerClassName, menuClassName, mobileHeader, headerClassName){
    trigger.on('click', function(){
      menu.stop().slideToggle();
      $(this).toggleClass(triggerClassName);
      menu.toggleClass(menuClassName);
      mobileHeader.toggleClass(headerClassName)
    });
  }

  langSwitcher = function(ru, eng, className){
    if (window.location.href.indexOf("ru") > -1) {
      ru.addClass(className);
      eng.removeClass(className);
    } else {
      eng.addClass(className);
      ru.removeClass(className);
    };
  };

  clickableBlock = function(element){
    element.each(function(){
      $(this).on('click', function(){
        let link = $(this).find('a');
        $(link)[0].click();
      });
    });
  };

  parentStyling = function(element, className){
    element.each(function(){
      $(this).parent().addClass(className);
    });
  };


  wrapNotSecond = function(element, wrapper){
    element.each(function(){
      $(this).children().not(":nth-child(2n)").wrapAll(wrapper);
    });
  };

  productDescStyling = function(element, className) {
    $(element).each(function(){
      if (!$(this).text().trim().length && $(this).children().length > 0 ) {
        $(this).closest('.catalog-text').addClass(className);
      };
    });
  };

  materialsInfoFormer = function(element, idHolder){
    element.each(function(){
      let idData = $(this).find(idHolder).attr('id');
      $(this).on('click', function(){
        $.ajax({
          type: "POST",
          url: $(this).find(idHolder).attr('action'),
          dataType: "json",
          data: idData,
          success: function (data) {
            data = JSON.parse(data);
            if(data.status) {
              $('#material-heading').find('span').html(data.title);
              $('#material-manufacturer').find('span').html(data.manufacturer);
              $('#material-picture').find('img').attr('src', data.picture);
              $('#material-solidity').find('span').html(data.solidity);
              $('#material-absortion').find('span').html(data.absortion);
              $('#material-texture').find('span').html(data.texture);
              $('#material-weight').find('span').html(data.weight);
              $('#material-frost-proof').find('span').html(data.frost-proof);
              $('#material-durability').find('span').html(data.durability);
              $('#material-breaking-point').find('span').html(data.breaking-point);
              $('#material-radio-security').find('span').html(data.radio-security);
            };
        },
          error: function () {
            $('#view-info-material').find('span').each(function(){
              $(this).html('Данные отсутствуют');
            });
          }
        });
      });
    });
  };

  materialColumnStyling = function(element, className, className2){
    element.each(function(){
      $(this).next('div').addClass(className2);
      $(this).next('div').children().wrapAll('<div class="menu-wrapper"></div>');
      if($(this).next('div').children().length > 0){
        $(this).addClass(className);
      };
    });
  };

  materialStyling = function(element, className){
    element.each(function(){
      $(this).removeClass(className);
      $(this).children().wrapAll('<div class="material-params--inner"></div>')
    });
  };

  materialsFilter = function(element){
    let leftFieldItems = element.find('.block-rbl-main .list-info-material');
    let rightFieldItems = element.find('.view-id-info_material .view-info-material');

    leftFieldItems.each(function(){
      $(this).on('click', function(){
        $(this).next('div').slideToggle();
        $(this).toggleClass('menu-item--clicked');
        let leftId = $(this).attr('data-id');

        rightFieldItems.each(function(){
          let rightId= $(this).attr('data-id');
          if(rightId === leftId) {
            rightFieldItems.each(function(){
              $(this).hide();
            });
            $(this).show();
          }
        });
      });
    });
  };

  imgCheck = function(element, className){
    element.each(function(){
      if($(this).find('img').length < 1) {
        $(this).closest('.left').addClass(className);
      }
    });
  };

  twoElementsWrapper = function(element, wrapper){
    element.next().andSelf().wrapAll(wrapper);
  };

  formWrap = function(element){
    element.find('form').wrap('<div class="form-wrapper"></div>');
  };
  formWrap2 = function(element){
    element.wrap('<div class="form-wrapper"></div>');
  };

  formHeading = function(element, html){
    element.prepend(html);
  };

  addMapBlock = function(element, html){
    element.append(html);
  };

  classAdder = function(element, className){
    element.addClass(className);
  };
  
  eachClassAdder = function(element, className){
    element.each(function(){
      $(this).addClass(className);
    });
  };

  sliderNavPositioning = function(paginationRow, prevButton, nextButton, buttonsRow){
    let pagLength = paginationRow.length;
    let pagItemWidth = paginationRow.width();
    let pagMarginsSum = 2;
  /*  let pagRowWidth = (pagItemWidth+pagMarginsSum)*pagLength; */
    let pagRowWidth = (pagItemWidth+pagMarginsSum)*pagLength;
    let buttonWidth = prevButton.width();
    let marginValue = pagRowWidth/2+buttonWidth;
    if ($(window).width() > 800) {
      prevButton.css('margin-right', marginValue);
      nextButton.css('margin-left', marginValue);
    };
    /*
    paginationRow.each(function(){
      $(this).children('span').text($(this).index()+1);
    });
    */
  };

  tableOverflow = function(tableElement){
    if($(window).width() <= 768) {
      tableElement.each(function(){
        $(this).wrap('<div class="table-overflow"><div class="table-overflow__wrapper"></div></div>');
      });
    };
  };

  /*
  portfolioExpander = function(element, button){
    element.each(function(){
      $(this).append(button);
    });
    element.each(function(){
      let trigger = $(this).find('.portfolio-card-expander');
      trigger.on('click', function(){
        $(this).prev().slideToggle();
        $(this).toggleClass('expander--active');
        $(this).closest('.views-field-body').toggleClass('field-expanded');
      });
    });
  };
  */

  portfolioExpander = function(element, button){
    element.each(function(){
      $(this).append(button);
    });
    element.each(function(){
      let trigger = $(this).find('.portfolio-card-expander');
      trigger.on('click', function(){
        let thisField = $(this).closest('.views-row');
        $(this).prev().slideToggle();
        $(this).toggleClass('expander--active');
        $(this).closest('.views-field-body').toggleClass('field-expanded');
        $(this).closest('.views-row').toggleClass('portfolio-js--active');

        thisField.siblings('.portfolio-js--active').each(function(){
          let anotherElementTrigger = $(this).find('.portfolio-card-expander');
          anotherElementTrigger.prev().slideToggle();
          anotherElementTrigger.toggleClass('expander--active');
          anotherElementTrigger.closest('.views-field-body').toggleClass('field-expanded');
          anotherElementTrigger.closest('.views-row').toggleClass('portfolio-js--active');
        });
      });
    });
  };

  oneHeightElements = function(element) {
    var maxheight = 0;
    element.height('auto');
    element.each(function () {
      var height = $(this).height();
        if (height > maxheight) {
        maxheight = height;
      }
    });
    element.height(maxheight);
  };

  htmlFix = function(element, fix){
    element.each(function(){
      $(this).html(fix);
    });
  };

  appendBlock = function(element, block){
    element.append(block);
  };

  characteristicsExpander = function(element, className){
    element.each(function(){
      $(this).on('click', function(){
        $(this).next().slideToggle();
        $(this).toggleClass(className);
      });
    });
  };

  insertBg = function(element, html){
    $(html).insertAfter(element);
  };  

  emailValidation = function(emailInput){
    let emailFilter = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    emailInput.val('');
    emailInput.on('change', function(){
        if(!emailFilter.test($(this).val())){
            $(this).val('');
            $(this).addClass('error');
            return false;
          } else {
            $(this).removeClass('error');
          };
    });
  };

  turnOffClick = function(element){
    element.each(function(){
      $(this).on('click', function(e){
        e.preventDefault();
      });
    });
  };

  emptyLineFixer = function(element) {
    $(element).each(function(){
      if (!$(this).text().trim().length && $(this).children().length < 1 ) {
        $(this).remove();
      };
    });
  };

  screenScroller = function(){
    $('body').append('<a href="#" title="Back to top" class="scrollup"></a>')
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
          $('.scrollup').fadeIn();
      } else {
          $('.scrollup').fadeOut();
      }
    });
        
      $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  }

  selectOpener = function(element){
    element.each(function(){
      let options = $(this).find('option');
      if(!$(this).find('option').is('option[selected="selected"]')){
        options.first().attr('selected', 'selected')
      }
      let select = $(this).find('select');
      let selectCurrent = $(this).find('option[selected="selected"]').html();
      $(this).prepend('<div class="textHolder"></div>');
      $(this).find('.textHolder').html(selectCurrent);
      $(this).on('click', function(){
        select.slideToggle();
        $(this).find('.textHolder').toggleClass('textHolder--active')
      });
    });
  };

  priceWrap = function(element, wrapper){
    element.each(function(){
      $(this).wrap(wrapper);
    });
  };

  $(document).ready(function() {
    classAdder($('.page-catalog .block-system'), 'index-products')
    burgerMenuOpener($('#header__burger'), $('#header__menu-row'), 'burger--active', 'menu--opened', $('#header__top-line'), 'header--expanded');
    langSwitcher($("#ru"), $('#en'), 'lang--current');
    parentStyling($('.top-banner a.btn'), 'bannerBtn');
    wrapNotSecond($('.index-products .view .view-content .views-row'), '<div class="catalog-text"></div>');
    productDescStyling($('.index-products .view .view-content .views-row .views-field-description p'), 'catalog-with-desc');
    clickableBlock($('.index-products .view .view-content .views-row'));
    materialStyling($('.view-id-info_material .view-info-material'), 'show'); 
    materialColumnStyling($('.block-rbl-main .list-info-material'), 'menu-item--default', 'menu-block--hidden');
    materialsFilter($('.index-materials'));
    imgCheck($('.index-materials .material-params--inner .left .field-content'), 'img-field--hidden');
    twoElementsWrapper($('.captcha'), '<div class="form-bottom"></div>');
    formWrap($('.page-node-6 .node-webform'));
    formHeading($('.page-node-6 .form-wrapper'), '<div class="form-heading"><h2 class="section-header">Request a call-back</h2><p class="form-subtitle">Fill in the order form and we will contact you at a convenient time for you</p></div>');
    addMapBlock($('.page-node-6 .node-webform'), '<div id="contactsMap" class="contactsMap"></div>');
    sliderNavPositioning($('.node-type-product .owl-pagination .owl-page'), $('.node-type-product .owl-buttons .owl-prev'), $('.node-type-product .owl-buttons .owl-next'), $('.node-type-product .owl-buttons'));
    tableOverflow($('table'));
    clickableBlock($('.view-similar-products .node-product'));
    portfolioExpander($('.page-portfolio .view-portfolio .views-row .views-field-body '), '<div class="portfolio-card-expander"></div>');
    clickableBlock($('.page-taxonomy .block-system .view-catalog-items .view-content .views-row .node footer ul li'));
    htmlFix($('.text-center .pagination .next a'), '');
    htmlFix($('.text-center .pagination .prev a'), '');
    formWrap2($('.webform-client-form-24'));
    appendBlock($('.page-taxonomy .form-wrapper'), '<div class="catalog-bottom-right"></div>');
    formHeading($('.page-taxonomy .form-wrapper form'), '<div class="form-heading"><h2 class="section-header">Request a call-back</h2><p class="form-subtitle">Fill in the order form and we will contact you at a convenient time for you</p></div>');
    htmlFix($('.page-taxonomy .block-system section.block-mefibs .views-exposed-widgets .btn'), 'Search');
    characteristicsExpander($('.field-name-field-characteristics .field-label'), 'triggered');
    insertBg($('.page-node-4 header.header'), '<div class="tech-page-bg"></div>');
    insertBg($('.page-node-5 header.header'), '<div class="tech-page-bg"></div>');
    emailValidation($('#edit-submitted-email'));
    turnOffClick($('.page-portfolio .view-portfolio .views-row .views-field-title a'));
    emptyLineFixer($('p'));
    /* selectOpener($('.form-type-select')); */ // select function
    screenScroller();
    eachClassAdder($('.price'), 'btn');
    priceWrap($('.node-type-product .price'), '<div class="price-wrapper"></div>');

  });
})(jQuery);
