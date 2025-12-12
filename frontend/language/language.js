document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Navbar Glass Effect Logic ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- 2. Language Cards Data ---
    const languages = [
        { name: 'Python', ext: '.py', desc: 'Write and run Python code online with our free compiler', icon: 'devicon-python-plain colored', bg: 'rgba(55, 118, 171, 0.15)' },
        { name: 'JavaScript', ext: '.js', desc: 'Write and run JavaScript code online with our free compiler', icon: 'devicon-javascript-plain colored', bg: 'rgba(247, 223, 30, 0.15)' },
        { name: 'Java', ext: '.java', desc: 'Write and run Java code online with our free compiler', icon: 'devicon-java-plain colored', bg: 'rgba(231, 111, 0, 0.15)' },
        { name: 'Rust', ext: '.rs', desc: 'Write and run Rust code online with our free compiler', icon: 'devicon-rust-plain', bg: '#27272a' }, // Rust is white
        { name: 'C', ext: '.c', desc: 'Write and run C code online with our free compiler', icon: 'devicon-c-plain colored', bg: 'rgba(0, 89, 156, 0.15)' },
        { name: 'C++', ext: '.cpp', desc: 'Write and run C++ code online with our free compiler', icon: 'devicon-cplusplus-plain colored', bg: 'rgba(0, 89, 156, 0.15)' },
        { name: 'C#', ext: '.cs', desc: 'Write and run C# code online with our free compiler', icon: 'devicon-csharp-plain colored', bg: 'rgba(104, 33, 122, 0.15)' },
        { name: 'Swift', ext: '.swift', desc: 'Write and run Swift code online with our free compiler', icon: 'devicon-swift-plain colored', bg: 'rgba(240, 81, 56, 0.15)' },
        { name: 'Ruby', ext: '.rb', desc: 'Write and run Ruby code online with our free compiler', icon: 'devicon-ruby-plain colored', bg: 'rgba(204, 52, 45, 0.15)' },
        { name: 'TypeScript', ext: '.ts', desc: 'Write and run TypeScript code online with our free compiler', icon: 'devicon-typescript-plain colored', bg: 'rgba(49, 120, 198, 0.15)' },
        { name: 'Go', ext: '.go', desc: 'Write and run Go code online with our free compiler', icon: 'devicon-go-original-wordmark colored', bg: 'rgba(0, 173, 216, 0.15)' },
        { name: 'Kotlin', ext: '.kt', desc: 'Write and run Kotlin code online with our free compiler', icon: 'devicon-kotlin-plain colored', bg: 'rgba(127, 82, 255, 0.15)' },
        { name: 'Dart', ext: '.dart', desc: 'Write and run Dart code online with our free compiler', icon: 'devicon-dart-plain colored', bg: 'rgba(0, 180, 171, 0.15)' },
        { name: 'Zig', ext: '.zig', desc: 'Write and run Zig code online with our free compiler', fallback: 'Z', bg: 'rgba(247, 164, 29, 0.15)' },
        { name: 'Carbon', ext: '.carbon', desc: 'Write and run Carbon code online with our free compiler', fallback: 'C', bg: '#27272a' },
        { name: 'WebAssembly', ext: '.wat', desc: 'Write and run WebAssembly code online with our free compiler', icon: 'devicon-wasm-plain colored', bg: 'rgba(101, 79, 240, 0.15)' },
    ];


    // --- 3. Render Cards & Add Hover Effect ---
    const grid = document.getElementById('language-grid');

    languages.forEach(lang => {
        const card = document.createElement('div');
        card.className = 'language-card';
        
        // Icon Logic
        let iconHtml;
        if (lang.icon) {
            iconHtml = `<i class="${lang.icon}"></i>`;
        } else {
            iconHtml = `<span>${lang.fallback}</span>`;
        }

        card.innerHTML = `
            <div class="card-icon" style="background-color: ${lang.bg}">
                ${iconHtml}
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="lang-name">${lang.name}</h3>
                    <span class="lang-ext">${lang.ext}</span>
                </div>
                <p class="card-desc">${lang.desc}</p>
            </div>
        `;

        // Mouse Move Glow Effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        grid.appendChild(card);
    });
});