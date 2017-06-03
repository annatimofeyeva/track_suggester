//stacks choise buttons with hide(), show() functions
$(document).ready(function() {
  $("#ruby_text").click(function() {
      $(".php_description").hide();
      $(".java_description").hide();
      $(".csharp_description").hide();
      $(".css_description").hide();
      $(".ruby_description").show();
   });
  $("#php_text").click(function(){
      $(".ruby_description").hide();
      $(".csharp_description").hide();
      $(".css_description").hide();
      $(".php_description").show();
   });
  $("#java_text").click(function(){
      $(".php_description").hide();
      $(".csharp_description").hide();
      $(".css_description").hide();
      $(".ruby_description").hide();
      $(".java_description").show();
    });
  $("#csharp_text").click(function(){
      $(".php_description").hide();
      $(".java_description").hide();
      $(".ruby_description").hide();
      $(".css_description").hide();
      $(".csharp_description").show();
    });
  $("#css_text").click(function(){
      $(".php_description").hide();
      $(".java_description").hide();
      $(".ruby_description").hide();
      $(".csharp_description").hide();
      $(".css_description").show();
    });
});
/*
//code using functions that hides not needed descriptions
$(document).ready(function() {
  $("#ruby_text").click(function() {
   showDescriptionFor(".ruby_description");
   });
  $("#php_text").click(function(){
    showDescriptionFor(".php_description");
   });
  $("#java_text").click(function(){
      showDescriptionFor(".java_description");
    });
  $("#csharp_text").click(function(){
      showDescriptionFor(".csharp_description");
    });
  $("#css_text").click(function(){
      showDescriptionFor(".css_description");
    });
//function that hides not needed descriptions

function showDescriptionFor(lang_name) {
  var names = [
    ".ruby_description",
    ".java_description",
    ".php_description",
    ".csharp_description",
    ".css_description"
  ];
  for (idx in names) {
    if (names[idx] != lang_name) {
      $(names[idx]).hide();
    } else {
      $(names[idx]).show();
    }
  }
}
});
*/
