document.addEventListener('DOMContentLoaded', function() {
    var artistContainers = document.querySelectorAll('.artist-container');
    
    artistContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            // Verwijder de 'show-name' class van alle containers
            artistContainers.forEach(function(container) {
                container.classList.remove('show-name');
            });

            // Voeg de 'show-name' class toe aan de huidige container
            container.classList.add('show-name');
        });
    });
});