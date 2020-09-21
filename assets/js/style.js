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

const DARK_CLASSES = ['uk-background-secondary', 'uk-light'];
const DISPLAY_MODE = 'displayMode';
const DisplayModes = Object.freeze({
    DARK: "dark",
    LIGHT: "light",
});
function toggleDisplayMode() {
    let currentMode = localStorage.getItem(DISPLAY_MODE) === DisplayModes.DARK ? DisplayModes.DARK : DisplayModes.LIGHT;
    if (currentMode !== DisplayModes.DARK) {
        updateToDarkMode()
    } else {
        updateToLightMode()
    }
}
function setDisplayMode(maybeDarkMode) {
    if (maybeDarkMode.matches) {
        updateToDarkMode()
    } else {
        updateToLightMode()
    }
}

function updateToDarkMode() {
    localStorage.setItem(DISPLAY_MODE, DisplayModes.DARK)
    document.body.classList.add(...DARK_CLASSES);

    let pageContent = document.getElementById("content");
    pageContent.classList.add(...DARK_CLASSES);

    let toggleSwitch = document.getElementById("display-mode-toggle")
    if (toggleSwitch) {
        toggleSwitch.innerHTML = "Light mode"
    }

    for (let e of document.getElementsByClassName('uk-card')) {
        e.classList.add(...DARK_CLASSES);
    }

    for (let e of document.getElementsByClassName('uk-card-title')) {
        e.classList.add('uk-text-primary');
    }
}

function updateToLightMode() {
    localStorage.setItem(DISPLAY_MODE, "light")
    document.body.classList.remove(...DARK_CLASSES);

    let pageContent = document.getElementById("content");
    pageContent.classList.remove(...DARK_CLASSES);

    let toggleSwitch = document.getElementById("display-mode-toggle")
    if (toggleSwitch) {
        toggleSwitch.innerHTML = "Dark mode"
    }

    for (let e of document.getElementsByClassName('uk-card')) {
        e.classList.remove(...DARK_CLASSES);
    }

    for (let e of document.getElementsByClassName('uk-card-title')) {
        e.classList.remove('uk-text-primary');
    }
}
(function () {
    let displayMode = localStorage.getItem(DISPLAY_MODE);
    let colorPref = window.matchMedia("(prefers-color-scheme: dark)");
    colorPref.addListener(setDisplayMode);
    if (!displayMode) {
        setDisplayMode(colorPref);
    } else if (displayMode === "dark") {
        updateToDarkMode()
    }
})()