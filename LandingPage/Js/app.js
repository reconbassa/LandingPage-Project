document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navList = document.getElementById('nav-list');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    // Build navigation
    sections.forEach(section => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${section.id}">${section.querySelector('h2').textContent}</a>`;
        navList.appendChild(li);
    });
    
    // Add active state on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop >= 0 && sectionTop <= window.innerHeight / 2) {
                current = section.getAttribute('id');
            }
        });

        const navItems = document.querySelectorAll('nav ul li');
        navItems.forEach(li => {
            li.classList.remove('active');
            if (li.querySelector('a').getAttribute('href').substring(1) === current) {
                li.classList.add('active');
            }
        });

        // Show or hide scroll to top button
        if (window.scrollY > window.innerHeight) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to sections
    navList.addEventListener('click', (event) => {
        event.preventDefault();
        if (event.target.tagName === 'A') {
            const targetId = event.target.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Scroll to top button behavior
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
