document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll for Navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Handle "View My Work" button
    document.getElementById('view-work-btn').addEventListener('click', () => {
        document.getElementById('gallery').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // 2. Scroll-Based Fade-In Animation (Intersection Observer)
    const photoItems = document.querySelectorAll('.photo-item');

    // Add 'hidden' class initially so CSS can animate them in
    photoItems.forEach(item => item.classList.add('hidden'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Check if the element is intersecting (in the viewport)
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                entry.target.classList.add('visible');
                // Optional: Stop observing once it's visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2 // Trigger when 20% of the item is visible
    });

    // Tell the observer what to watch
    photoItems.forEach(item => {
        observer.observe(item);
    });

});