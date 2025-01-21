document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-slide');
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }
});
