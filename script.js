        const imageContainer = document.querySelector(".image-container");
        const prevEl = document.querySelector("#prev");
        const nextEl = document.querySelector("#next");
        
        let x = 0;
        let timer;
        const rotationAngle = 90;
        const autoRotateDelay = 3000;

        // Initialize gallery with first image facing forward
        updateGallery();
        
        prevEl.addEventListener('click', () => {
            x += rotationAngle;
            clearTimeout(timer);
            updateGallery();
        });

        nextEl.addEventListener("click", () => {
            x -= rotationAngle;
            clearTimeout(timer);
            updateGallery();
        });

        function updateGallery() {
            imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
            
            // Reset timer for auto-rotation
            clearTimeout(timer);
            timer = setTimeout(() => {
                x -= rotationAngle;
                updateGallery();
            }, autoRotateDelay);
        }

        // Pause auto-rotation when hovering over gallery
        imageContainer.addEventListener('mouseenter', () => {
            clearTimeout(timer);
        });

        // Resume auto-rotation when leaving gallery
        imageContainer.addEventListener('mouseleave', () => {
            updateGallery();
        });