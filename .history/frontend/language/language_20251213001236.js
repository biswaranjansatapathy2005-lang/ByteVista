document.addEventListener('DOMContentLoaded', () => {
    // Select all cards for the tilt effect
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
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

        // Calculate rotation angles (max tilt 5 degrees)
        const rotateX = (-1 * (y / rect.height) * 5).toFixed(2);
        const rotateY = ((x / rect.width) * 5).toFixed(2);

        // Apply transform. 
        card.style.transition = 'none'; // Disable transition for smooth real-time tilt
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        
        // Dynamic box-shadow for a glow effect based on position
        const shadowX = (x / rect.width) * 20;
        const shadowY = (y / rect.height) * 20;
        const purpleGlow = 'rgba(123, 67, 249, 0.4)'; // Color for the accent glow
        
        // Add a subtle glow/shadow when tilted
        card.style.boxShadow = `
            ${-shadowX}px ${-shadowY}px 40px ${purpleGlow},
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
        
        // Reset box-shadow to the default hover state (will naturally transition away)
        card.style.boxShadow = `0 0 0 var(--color-shadow)`; 
    }
});