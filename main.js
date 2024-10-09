const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const mainContent = document.querySelector('.main-content');
const links = document.querySelectorAll('.nav-links a');

function closeMenu() {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
    mainContent.classList.remove('blur');
}

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    mainContent.classList.toggle('blur'); // Toggle blur effect on main content
});

// Close the menu when a navigation link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
    }
});
