// Haal de huidige URL van de pagina op
let currentUrl = window.location.href;

// Zoek naar het corresponderende ankerelement in de navbar en maak de tekst vet
let links = document.querySelectorAll('.navbar li a');
links.forEach(link => {
    if (link.href === currentUrl) {
        link.classList.add('bold');
    }
});