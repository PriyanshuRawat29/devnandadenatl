document.addEventListener('DOMContentLoaded', () => {
    
    // -------------------------------------------------------------------------
    // Mobile Menu Toggle
    // -------------------------------------------------------------------------
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // -------------------------------------------------------------------------
    // Sticky Navbar
    // -------------------------------------------------------------------------
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // -------------------------------------------------------------------------
    // Smooth Scrolling with Offset
    // -------------------------------------------------------------------------
    // Adjusted for the sticky header height
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Approximate header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // -------------------------------------------------------------------------
    // Contact Form Handling
    // -------------------------------------------------------------------------
    const contactForm = document.getElementById('appointmentForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get values
            const fullName = document.getElementById('fullName').value;
            const mobileNumber = document.getElementById('mobileNumber').value;
            const message = document.getElementById('message').value;

            // Simple Validation
            if (!fullName || !mobileNumber || !message) {
                formMessage.innerText = 'Please fill in all fields.';
                formMessage.className = 'form-message error';
                return;
            }

            // Simulate sending email (console log)
            console.log('Sending Email...');
            console.log(`Name: ${fullName}`);
            console.log(`Mobile: ${mobileNumber}`);
            console.log(`Message: ${message}`);

            // Simulate Network Delay
            const button = contactForm.querySelector('button');
            const originalText = button.innerText;
            button.innerText = 'Sending...';
            button.disabled = true;

            setTimeout(() => {
                // Success
                formMessage.innerText = `Thank you, ${fullName}! Your appointment request has been sent. We will contact you at ${mobileNumber} shortly.`;
                formMessage.className = 'form-message success';
                
                // Reset Form
                contactForm.reset();
                button.innerText = originalText;
                button.disabled = false;
                
                // Clear message after 5 seconds
                setTimeout(() => {
                    formMessage.innerText = '';
                    formMessage.className = 'form-message';
                }, 8000);

            }, 1500);
        });
    }

    // -------------------------------------------------------------------------
    // Intersection Observer for Animations (Optional Polish)
    // -------------------------------------------------------------------------
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Fade-in Up elements
    const animateElements = document.querySelectorAll('.service-card, .feature-box, .about-text, .about-image');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

});
