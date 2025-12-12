document.addEventListener('DOMContentLoaded', () => {

    // 1. Data Source: Defined exactly from the images provided.
    // Using devicon class names for icons.
    const languages = [
        {
            name: 'Python',
            ext: '.py',
            description: 'Write and run Python code online with our free compiler',
            iconClass: 'devicon-python-plain colored',
            bgColor: 'rgba(55, 118, 171, 0.2)' // Subtle background for the icon container
        },
        {
            name: 'JavaScript',
            ext: '.js',
            description: 'Write and run JavaScript code online with our free compiler',
            iconClass: 'devicon-javascript-plain colored',
            bgColor: 'rgba(247, 223, 30, 0.2)'
        },
        {
            name: 'Java',
            ext: '.java',
            description: 'Write and run Java code online with our free compiler',
            iconClass: 'devicon-java-plain colored',
            bgColor: 'rgba(231, 111, 0, 0.2)'
        },
        {
            name: 'Rust',
            ext: '.rs',
            description: 'Write and run Rust code online with our free compiler',
            iconClass: 'devicon-rust-plain', // Rust icon is usually white in dark mode
            bgColor: '#27272a'
        },
        {
            name: 'C',
            ext: '.c',
            description: 'Write and run C code online with our free compiler',
            iconClass: 'devicon-c-plain colored',
             bgColor: 'rgba(0, 89, 156, 0.2)'
        },
        {
            name: 'C++',
            ext: '.cpp',
            description: 'Write and run C++ code online with our free compiler',
            iconClass: 'devicon-cplusplus-plain colored',
             bgColor: 'rgba(0, 89, 156, 0.2)'
        },
        {
            name: 'C#',
            ext: '.cs',
            description: 'Write and run C# code online with our free compiler',
            iconClass: 'devicon-csharp-plain colored',
             bgColor: 'rgba(104, 33, 122, 0.2)'
        },
        {
            name: 'Swift',
            ext: '.swift',
            description: 'Write and run Swift code online with our free compiler',
            iconClass: 'devicon-swift-plain colored',
             bgColor: 'rgba(240, 81, 56, 0.2)'
        },
        {
            name: 'Ruby',
            ext: '.rb',
            description: 'Write and run Ruby code online with our free compiler',
            iconClass: 'devicon-ruby-plain colored',
             bgColor: 'rgba(204, 52, 45, 0.2)'
        },
        {
            name: 'TypeScript',
            ext: '.ts',
            description: 'Write and run TypeScript code online with our free compiler',
            iconClass: 'devicon-typescript-plain colored',
             bgColor: 'rgba(49, 120, 198, 0.2)'
        },
        {
            name: 'Go',
            ext: '.go',
            description: 'Write and run Go code online with our free compiler',
            iconClass: 'devicon-go-original-wordmark colored',
             bgColor: 'rgba(0, 173, 216, 0.2)'
        },
        {
            name: 'Kotlin',
            ext: '.kt',
            description: 'Write and run Kotlin code online with our free compiler',
            iconClass: 'devicon-kotlin-plain colored',
             bgColor: 'rgba(127, 82, 255, 0.2)'
        },
         {
            name: 'Dart',
            ext: '.dart',
            description: 'Write and run Dart code online with our free compiler',
            iconClass: 'devicon-dart-plain colored',
             bgColor: 'rgba(0, 180, 171, 0.2)'
        },
        {
            // Zig doesn't have a standard devicon yet, using a placeholder or generic
            name: 'Zig',
            ext: '.zig',
            description: 'Write and run Zig code online with our free compiler',
            iconClass: 'devicon-zig-original colored', // Might not load if version is old
            fallbackIcon: 'Z',
             bgColor: 'rgba(247, 164, 29, 0.2)'
        },
        {
            // Carbon is very new, no devicon. Using a text placeholder.
            name: 'Carbon',
            ext: '.carbon',
            description: 'Write and run Carbon code online with our free compiler',
            iconText: 'C',
             bgColor: '#27272a'
        },
         {
            name: 'WebAssembly',
            ext: '.wat',
            description: 'Write and run WebAssembly code online with our free compiler',
            iconClass: 'devicon-wasm-plain colored',
             bgColor: 'rgba(101, 79, 240, 0.2)'
        },
    ];

    const gridContainer = document.getElementById('language-grid');

    // 2. Function to generate HTML for a single card
    function createCard(lang) {
        const card = document.createElement('div');
        card.className = 'language-card';

        // Determine icon type (Devicon font icon or text fallback)
        let iconHtml;
        if (lang.iconClass && !lang.fallbackIcon) {
            iconHtml = `<i class="${lang.iconClass}"></i>`;
        } else if (lang.fallbackIcon) {
             // A simple fallback if the specific icon font isn't available
             iconHtml = `<span style="font-weight:bold; color: #f7a41d">${lang.fallbackIcon}</span>`;
        }
        else {
            // Fallback for Carbon or others missing icons
             iconHtml = `<span style="font-weight:bold; color: #fff">${lang.iconText || lang.name[0]}</span>`;
        }

        card.innerHTML = `
            <div class="card-icon" style="background-color: ${lang.bgColor}">
                ${iconHtml}
            </div>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="lang-name">${lang.name}</h3>
                    <span class="lang-ext">${lang.ext}</span>
                </div>
                <p class="card-description">${lang.description}</p>
            </div>
        `;

        // 3. Add Mouse tracking for the subtle glow effect (Optional Polish)
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        return card;
    }

    // 4. Render all cards
    languages.forEach(lang => {
        gridContainer.appendChild(createCard(lang));
    });
});