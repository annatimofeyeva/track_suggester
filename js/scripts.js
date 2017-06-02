$(document).ready(function() {

  $("#ruby_text").click(function() {
    $(".ruby_description").show();
   });

  $("#php_text").click(function(){
    $(".ruby_description").empty();
    $(".php_description").show();
   });

  $("#java_text").click(function(){
    $(".php_description").empty();
    $(".java_description").show();
    });

    $("#csharp_text").click(function(){
      $(".java_description").empty();
      $(".csharp_description").show();
    });

    $("#css_text").click(function(){
      $(".csharp_description").empty();
      $(".css_description").show();
    });

//entering values in the form










});
