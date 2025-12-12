document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Background Glow Effect
    // This makes the purple light at the top follow the mouse subtly
    const glowElement = document.getElementById('glowEffect');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        // Calculate offset (small movement range for subtle effect)
        const moveX = (x - 0.5) * 40; 
        const moveY = (y - 0.5) * 40;

        // Apply transform
        glowElement.style.transform = `translate(calc(-50% + ${moveX}px), ${moveY}px)`;
    });

    // 2. Smooth Scroll for "Scroll to explore" (Optional enhancement)
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if(scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // 3. Navbar background opacity on scroll
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(2, 1, 10, 0.8)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(2, 1, 10, 0.5)';
            navbar.style.boxShadow = 'none';
        }
    });

});