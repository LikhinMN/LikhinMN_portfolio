function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var modes = document.getElementById("modes");
var thememode = document.getElementById("thememode");

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        modes.src = "moon1.png";
        thememode.src = "moon1.png";
    } else {
        modes.src = "light.png";
        thememode.src = "light.png.png";
    }
}

modes.onclick = toggleTheme;
thememode.onclick = toggleTheme;

