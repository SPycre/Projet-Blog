import * as utils from "./utils.js";
console.log("footerbackground")
const color = utils.getCookie('color');
document.querySelector("footer").style.backgroundColor = "hsl("+color[0]+","+color[1]+"%,"+color[2]+"%)";