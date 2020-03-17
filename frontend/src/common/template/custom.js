// $.widget.bridge('uibutton', $.ui.button);

$(function(){       
  $('*[data-href]').click(function(){
      window.location = $(this).data('href');
      return false;
  });
});