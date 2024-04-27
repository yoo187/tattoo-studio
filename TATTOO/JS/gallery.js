var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("modalImg");
        var portfolioImages = document.querySelectorAll('.gallery img');
        var slideIndex = 0;

        // Voeg een event listener toe aan alle portfolio foto's om te openen in modale overlay
        portfolioImages.forEach(function(img, index) {
            img.addEventListener('click', function() {
                openModal(img.src, index);
            });
        });

        function openModal(imgSrc, index) {
            modal.style.display = "block";
            modalImg.src = imgSrc;
            slideIndex = index;
        }

        function closeModal() {
            modal.style.display = "none";
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var slides = document.querySelectorAll('.gallery img');
            if (n >= slides.length) { slideIndex = 0 }
            if (n < 0) { slideIndex = slides.length - 1 }
            modalImg.src = slides[slideIndex].src;
        }