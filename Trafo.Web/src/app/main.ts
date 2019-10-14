import { HomePage } from "./pages/home.page";


console.log($("body"));
$("<p>Execute</p>").appendTo($("#main"))
var page = new HomePage($("#main"), "homepage.html")
page.render();