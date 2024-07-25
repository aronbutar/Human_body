// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple search functionality
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search...';
    searchInput.classList.add('search-bar');
    document.querySelector('header').appendChild(searchInput);

    searchInput.addEventListener('keyup', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('main section').forEach(section => {
            const text = section.innerText.toLowerCase();
            section.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
});
