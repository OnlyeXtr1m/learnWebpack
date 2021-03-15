import * as $ from "jquery"
import Post from "./Post"
import json from "./assets/test.json"
import xml from "./assets/test.xml"
import webpack_logo from "./assets/webpack-logo.png"
import "./styles/style.css"
import "./styles/scss.scss"

const post = new Post("Webpack Learn", webpack_logo);

$("pre").html(post.toString())

console.log("JSON: ",json)
console.log("XML: ",xml)