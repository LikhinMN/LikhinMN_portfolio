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
    document.querySelector('img[alt="dark mode"]').style.display = 'none';
    document.querySelector('img[alt="light mode"]').style.display = 'inline';
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'inactive');
    document.querySelector('img[alt="dark mode"]').style.display = 'inline';
    document.querySelector('img[alt="light mode"]').style.display = 'none';
};


if (darkMode === 'active') {
    enableDarkMode();
}

const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode'); 
    if (darkMode !== 'active') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});


