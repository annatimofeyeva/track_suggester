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
    



});











//creating variables with values reciving as users input from different input types: radio buttons, seach fields
//var apps = $("input:radio[name=application]:checked").val();
//$("div#output").text(apps);


//$("input#person1").click(function(event) {
//$("div#output").text();

//var someInput = $("input#person1").val();
//$("div#output").text(someInput);

//"Enrique, you ought to study Java, so you can learn how to make mobile apps for Android!".
