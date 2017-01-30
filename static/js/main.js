function build_article() {
  var title = "It depends on how you look at things.";
  var mainSection = "Lorem ipsum";
  var date = Date();
  var articleBody = "";

  articleBody = "<div class=\"panel panel-default\"><div class=\"panel-heading\">"
  articleBody += title;
  articleBody += "</div><div class=\"panel-body\">";
  articleBody += mainSection;
  articleBody += "</div><div class=\"panel-footer\">";
  articleBody += date;
  articleBody += "</div></div>"

  return articleBody;
}

$(document).ready(function(){
  var articles = "";
  var jumbotron = $(".jumbotron");
});
