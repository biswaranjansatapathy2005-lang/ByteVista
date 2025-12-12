/* Variables for easy theme changes */
:root {
    --bg-color: #0d0d12; /* Very dark background */
    --card-bg: #1c1c24;  /* Darker card background */
    --text-color: #e0e0e0;
    --primary-color: #8b5cf6; /* Violet/Purple accent */
    --border-color: #2a2a33;
}

/* Global Reset and Base Styles */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    min-height: 200vh; /* Ensure the page is scrollable */
}

/* --- Navigation Bar Styling (Header) --- */
#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    transition: all 0.3s ease-in-out;
}

/* Default transparent state */
.navbar-transparent {
    background-color: transparent;
    border-bottom: none;
}

/* Scrolled state with Blur Effect */
.navbar-scrolled {
    background-color: rgba(28, 28, 36, 0.8); /* Semi-transparent background */
    border-bottom: 1px solid var(--border-color);
    /* THE KEY BLUR EFFECT */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); /* For Safari support */
}

.logo {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-color);
    display: flex;
    align-items: center;
    gap: 8px;
}

nav a {
    color: var(--text-color);
    text-decoration: none;
    margin: 0 15px;
    font-weight: 600;
    opacity: 0.8;
    transition: opacity 0.2s;
}

nav a:hover {
    opacity: 1;
    color: var(--primary-color);
}

.auth-buttons button {
    padding: 8px 16px;
    margin-left: 10px;
    border: none;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;
}

.sign-in {
    background: transparent;
    color: var(--text-color);
    opacity: 0.8;
}

.get-started {
    background-color: var(--primary-color);
    color: var(--bg-color);
}

.get-started:hover {
    background-color: #9d73f8;
}


/* --- Learning Path Section Styling --- */
.learning-path-section {
    padding: 150px 0 80px; /* Top padding to clear fixed navbar */
    text-align: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.learning-path-section h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 15px;
}

.subtitle {
    font-size: 1.1rem;
    color: #a0a0a9;
    max-width: 800px;
    margin: 0 auto 60px;
}

/* --- Course Grid and Cards --- */
.course-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
    gap: 30px;
}

.course-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 30px;
    text-align: left;
    transition: transform 0.3s, border-color 0.3s;
    min-height: 250px;
    position: relative; /* For tag positioning */
    display: flex;
    flex-direction: column;
}

.course-card:hover {
    transform: translateY(-5px);
    border-color: var(--primary-color);
}

.course-card h3 {
    font-size: 1.5rem;
    margin-top: 10px;
    margin-bottom: 15px;
    font-weight: 700;
}

.course-card p {
    color: #a0a0a9;
    margin-bottom: 20px;
    flex-grow: 1; /* Pushes the link to the bottom */
}

.action-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    display: inline-block;
    transition: color 0.2s;
}

.action-link:hover {
    color: #a887fa;
}

/* --- Tags and Indicators --- */
.tag {
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 4px 10px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.beginner-tag {
    background-color: #143214;
    color: #4CAF50; /* Green */
}

.intermediate-tag {
    background-color: #3b2a0c;
    color: #FFC107; /* Yellow */
}

.advanced-tag {
    background-color: #3b0e0e;
    color: #F44336; /* Red */
}

.icon-indicator {
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-weight: 600;
    font-size: 0.9rem;
}
.icon-indicator svg {
    color: var(--primary-color);
}

/* Adjustments for the DSA cards to match the screenshot layout (purple tint) */
.dsa-card {
    background-color: #16121f; /* A slight purple tint */
    border-color: #332d40;
}
.dsa-card:hover {
    border-color: var(--primary-color);
}


/* --- Content below the main section (for scroll space) --- */
.code-favorite-language {
    text-align: center;
    padding: 80px 20px;
    max-width: 900px;
    margin: 0 auto;
}

.code-favorite-language h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 15px;
}

.code-favorite-language p {
    color: #a0a0a9;
    font-size: 1.1rem;
}


/* --- Responsive Adjustments --- */
@media (max-width: 1024px) {
    .course-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .course-grid {
        grid-template-columns: 1fr;
    }
    .learning-path-section h1 {
        font-size: 2.5rem;
    }
    #navbar {
        padding: 10px 20px;
    }
    nav {
        display: none; /* Hide main links on small screens */
    }
}