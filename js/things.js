

 $(function() {
var backgroundColor = $('.thing').css('background-color');
//$('ul').append('<p>Color was:' + backgroundColor + '</p>');
$('.thing').css ({
'background-color': '#96e0f4',
'border': '1px solid #fff',
'color': '#000',
'text-shadow':'none',
'padding-left': '+=75'
 }); 
  });
$(function() {

  $('h2').hide().slideDown();
  var $thing = $('.thing');
  $thing.hide().each(function(index) {
    $(this).delay(700 * index).fadeIn(700);
  });

  $thing.on('click', function() {
    $(this).fadeOut(700);
  });

});