document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });
    // GLASS NAVBAR SCROLL EFFECT
const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

    /**
     * Calculates and applies a subtle 3D tilt effect on mouse movement.
     * @param {MouseEvent} e - The mouse event object.
     */
    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        // Get coordinates relative to the center of the card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calculate rotation angles
        // The max tilt is set to 5 degrees for a subtle effect
        const rotateX = (-1 * (y / rect.height) * 5).toFixed(2);
        const rotateY = ((x / rect.width) * 5).toFixed(2);

        // Apply transform. The 'translateZ' makes it feel like it's lifting forward.
        card.style.transition = 'none'; // Disable transition for smooth real-time tilt
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        
        // Optional: Add a subtle inner shadow/glow based on position
        const shadowX = (x / rect.width) * 30;
        const shadowY = (y / rect.height) * 30;
        card.style.boxShadow = `
            ${-shadowX}px ${-shadowY}px 50px rgba(123, 67, 249, 0.3),
            0 15px 30px var(--color-shadow)
        `;
    }

    /**
     * Resets the card transform when the mouse leaves.
     * @param {MouseEvent} e - The mouse event object.
     */
    function handleMouseLeave(e) {
        const card = e.currentTarget;
        
        // Re-enable transition for smooth reset
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease, border-color 0.3s ease'; 
        
        // Reset transform and box-shadow to the initial CSS state
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.boxShadow = `0 15px 30px var(--color-shadow)`; 
    }
});