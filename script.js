// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Regular FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // FAQ Preview items
    const faqPreviewItems = document.querySelectorAll('.faq-item-preview');
    
    faqPreviewItems.forEach(item => {
        const question = item.querySelector('.faq-question-preview');
        
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ preview items
                faqPreviewItems.forEach(faq => {
                    faq.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const navLinks = nav.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
            });
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your inquiry! We will contact you shortly.');
            form.reset();
        });
    });
    
    // Smooth scroll to quote form when linking from other pages
    if (window.location.hash === '#quote') {
        const quoteForm = document.querySelector('#quote-form, #contact-form, .contact-form-wrapper');
        if (quoteForm) {
            setTimeout(() => {
                quoteForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
                const firstInput = quoteForm.querySelector('input');
                if (firstInput) {
                    firstInput.focus();
                }
            }, 100);
        }
    }
});


