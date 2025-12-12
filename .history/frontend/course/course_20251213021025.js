document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    // Defines the scroll threshold (e.g., 50 pixels) before the blur effect is triggered.
    const scrollThreshold = 50; 

    // Function to check scroll position and toggle navbar class
    function handleScroll() {
        // window.scrollY is the current vertical scroll position
        if (window.scrollY > scrollThreshold) {
            // Apply the scrolled/blur styles
            navbar.classList.add('navbar-scrolled');
            navbar.classList.remove('navbar-transparent');
        } else {
            // Revert to transparent styles
            navbar.classList.remove('navbar-scrolled');
            navbar.classList.add('navbar-transparent');
        }
    }

    // Attach the function to the window's scroll event
    window.addEventListener('scroll', handleScroll);
});