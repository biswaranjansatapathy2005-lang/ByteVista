document.addEventListener('DOMContentLoaded', () => {
    // Select all the path cards for the advanced hover effect
    const pathCards = document.querySelectorAll('.path-card');
    const MAX_TILT = 5; // Maximum rotation in degrees
    const PERSPECTIVE = 1000; // Perspective value for 3D effect

    /**
     * Handles the advanced 3D tilt effect on mouse movement.
     * @param {MouseEvent} e - The mouse event object.
     */
    function handleMouseMove(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        // 1. Calculate coordinates relative to the center of the card
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // 2. Calculate rotation angles (Y-axis tilt is controlled by X position, X-axis tilt by Y position)
        const rotateX = (-1 * (y / rect.height) * MAX_TILT).toFixed(2);
        const rotateY = ((x / rect.width) * MAX_TILT).toFixed(2);

        // 3. Calculate position for the subtle "glow" or light source effect
        const shadowX = (x / rect.width) * 30;
        const shadowY = (y / rect.height) * 30;

        // Apply transforms and styles
        card.style.transition = 'none'; // Disable CSS transition for smooth real-time tracking
        card.style.transform = `perspective(${PERSPECTIVE}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        
        // Apply dynamic box shadow/glow
        card.style.boxShadow = `
            ${-shadowX}px ${-shadowY}px 50px rgba(123, 67, 249, 0.3), /* Purple glow matching the border */
            0 15px 30px var(--color-shadow-dark)
        `;
    }

    /**
     * Resets the card transform when the mouse leaves.
     * @param {MouseEvent} e - The mouse event object.
     */
    function handleMouseLeave(e) {
        const card = e.currentTarget;
        
        // Re-enable CSS transition for a smooth reset animation
        card.style.transition = 'transform 0.5s ease, box-shadow 0.5s ease, border-color 0.3s ease, background-color 0.3s ease'; 
        
        // Reset transform and box-shadow to the default CSS state
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.boxShadow = `0 15px 30px var(--color-shadow-light)`; 
    }

    // Attach event listeners to all path cards
    pathCards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    // Simple Hover for Language Cards (CSS handles most of the animation here)
    const langCards = document.querySelectorAll('.lang-card');
    langCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-3px)';
            card.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.5)';
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
});