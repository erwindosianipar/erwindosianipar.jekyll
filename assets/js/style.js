feather.replace();

function openSidenav() {
    document.getElementById("sidenav").classList.add("sidenav-open");
}
function closeSidenav() {
    document.getElementById("sidenav").classList.remove("sidenav-open");
}
function toggleSidenav() {
    if (document.getElementById("sidenav").classList.contains("sidenav-open")) {
        closeSidenav();
    } else {
        openSidenav();
    }
}

var bar_bg = document.getElementById("scrollbar-bg")
var body = document.body
var html = document.documentElement

bar_bg.style.minWidth = document.width + "px"

document.getElementsByTagName("body")[0].onresize = function() {
	bar_bg.style.minWidth = document.width + "px";
}

window.onscroll = function() {
	var bar = document.getElementById("scrollbar")
	var dh  = Math.max(body.scrollHeight, body.offsetHeight,html.clientHeight, html.scrollHeight, html.offsetHeight)
	var wh  = window.innerHeight
	var pos = pageYOffset || (document.documentElement.clientHeight ? document.documentElement.scrollTop : document.body.scrollTop)
	var bw  = ((pos / (dh - wh)) * 100)

	bar.style.width = bw + "%";
}