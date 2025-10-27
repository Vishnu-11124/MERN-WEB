const btn = document.getElementById('btn');
        const result = document.getElementById('result');

        const emojis = ['😀', '😂', '😍', '🤔', '😎', '😭', '😡', '🎉', '🚀', '🌟'];

        btn.addEventListener('click', () => {
            const randomIndex = Math.floor(Math.random() * emojis.length);
            result.textContent = emojis[randomIndex];
            
            // Add animation class
            result.classList.remove('emoji-appear');
            void result.offsetWidth; // Trigger reflow
            result.classList.add('emoji-appear');
        });