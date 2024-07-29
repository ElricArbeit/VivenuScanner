// Einfaches Skript für eine kleine Interaktivität
document.addEventListener('DOMContentLoaded', function() {
    const services = document.querySelectorAll('.service');
    services.forEach(service => {
        service.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'lightgray';
        });
        service.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
        });
    });
});
