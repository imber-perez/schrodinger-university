const navbar = document.getElementById('navbar');
const target = document.getElementById('color-change');

const observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.4
}

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add('scrolled');

        } else {
            navbar.classList.remove('scrolled');
            
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(target)