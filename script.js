// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const message = form.querySelector('textarea').value;
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('يرجى إدخال بريد إلكتروني صحيح');
        return;
    }
    
    // Validate phone format
    const phoneRegex = /^\+?[\d\s-()]+$|^\d{7,}$/;
    if (!phoneRegex.test(phone)) {
        alert('يرجى إدخال رقم هاتف صحيح');
        return;
    }
    
    // Validate form
    if (!name || !email || !phone || !message) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    // Show success message
    alert('شكراً لك! تم استقبال رسالتك بنجاح. سنتواصل معك قريباً.');
    
    // Reset form
    form.reset();
}

// Smooth scroll for navigation links
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe all product and service cards
document.querySelectorAll('.product-card, .service-item, .stat').forEach(el => {
    observer.observe(el);
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('✅ Website loaded successfully!');