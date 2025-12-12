document.addEventListener('DOMContentLoaded', () => {
    // Select only the main learning path cards
    const pathCards = document.querySelectorAll('.card-path');

    pathCards.forEach(card => {
        // Add event listeners for the 3D tilt effect
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
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Calculate rotation angles (Max tilt 5 degrees)
        const rotateX = (-1 * (y / rect.height) * 5).toFixed(2);
        const rotateY = ((x / rect.width) * 5).toFixed(2);

        // Apply transform. perspective is crucial for 3D depth.
        card.style.transition = 'none'; // Disable transition for smooth real-time tilt
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
        
        // Optional: Add a subtle glow/shine effect based on mouse position
        const shineX = (x / rect.width * 100).toFixed(2);
        const shineY = (y / rect.height * 100).toFixed(2);

        // This creates a virtual shine/highlight using a radial gradient overlay
        card.style.backgroundImage = `
            radial-gradient(circle at ${shineX}% ${shineY}%, rgba(123, 67, 249, 0.1), transparent 70%)
        `;
    }

    /**
     * Resets the card transform and background when the mouse leaves.
     * @param {MouseEvent} e - The mouse event object.
     */
    function handleMouseLeave(e) {
        const card = e.currentTarget;
        
        // Re-enable transition for smooth reset (using the CSS transitions)
        card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease'; 
        
        // Reset transform and remove the dynamic background gradient
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.backgroundImage = 'none'; 
    }
});