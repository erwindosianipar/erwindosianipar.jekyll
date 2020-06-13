feather.replace()

function openSidenav() {
    document.getElementById("sidenav").classList.add("sidenav-open")
}
function closeSidenav() {
    document.getElementById("sidenav").classList.remove("sidenav-open")
}
function toggleSidenav() {
    if (document.getElementById("sidenav").classList.contains("sidenav-open")) {
        closeSidenav()
    } else {
        openSidenav()
    }
}
