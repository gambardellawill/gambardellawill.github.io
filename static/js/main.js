function build_article() {
  var title = "It depends on how you look at things.";
  var mainSection = "Lorem ipsum";
  var date = Date();
  var articleBody = "";

  articleBody = "<article><header class=\"art_header\">"
  articleBody += title;
  articleBody += "</header><main>";
  articleBody += mainSection;
  articleBody += "<footer id=\"post\" class=\"art_footer\">";
  articleBody += date;
  articleBody += "</footer></article>"

  return articleBody;
}

var articles = "";

for (i = 0; i < 6; i++) {
  console.log(i);
  articles += build_article();
}
document.getElementById("primary").innerHTML = articles;
