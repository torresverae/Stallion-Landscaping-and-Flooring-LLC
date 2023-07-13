document.addEventListener('DOMContentLoaded', function() {
    const scrollToLinks = document.querySelectorAll('.scroll');
    
    scrollToLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            const targetSection = document.querySelector(target);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});