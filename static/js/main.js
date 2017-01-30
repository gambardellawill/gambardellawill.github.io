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

var articles = "";

for (i = 0; i < 6; i++) {
  console.log(i);
  articles += build_article();
}
document.getElementById("article-container").innerHTML = articles;
