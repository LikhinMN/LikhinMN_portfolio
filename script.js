function togglemenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
let darkMode = localStorage.getItem('darkMode');

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'active');
    document.querySelectorAll('img[alt="dark mode"]').forEach(img => img.style.display = 'none');
    document.querySelectorAll('img[alt="light mode"]').forEach(img => img.style.display = 'inline');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'inactive');
    document.querySelectorAll('img[alt="dark mode"]').forEach(img => img.style.display = 'inline');
    document.querySelectorAll('img[alt="light mode"]').forEach(img => img.style.display = 'none');
};

if (darkMode === 'active') {
    enableDarkMode();
}

const themeSwitches = document.querySelectorAll('#theme-switch');

themeSwitches.forEach(themeSwitch => {
    themeSwitch.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode'); 
        if (darkMode !== 'active') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});
