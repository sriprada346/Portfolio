// Advanced Portfolio Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initBlogFilters();
    initAnimations();
    initInteractiveElements();
    
    // Show the index section by default
    showSection('index');
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
}

// Section display management
function showSection(targetId) {
    const sections = document.querySelectorAll('.section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Show target section with animation
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        
        // Scroll to top smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Add fade-in animation to elements
        setTimeout(() => {
            const elements = targetSection.querySelectorAll('.fade-in');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
    }
}

// Blog filtering functionality
function initBlogFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter category
            const filterCategory = this.getAttribute('data-filter');
            
            // Filter blog posts
            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');
                
                if (filterCategory === 'all' || postCategory === filterCategory) {
                    post.style.display = 'block';
                    post.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
}

// Advanced animations and interactions
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll(
        '.post, .social-link, .blog-post, .project-card, .activity-card, .contact-link'
    );
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Navbar scroll effect - DISABLED
    // The auto-hiding navbar functionality has been removed
}

// Interactive elements functionality
function initInteractiveElements() {
    // Project cards hover effects
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Blog post interactions
    const blogTitles = document.querySelectorAll('.blog-title');
    blogTitles.forEach(title => {
        title.addEventListener('click', function() {
            console.log('Blog post clicked:', this.textContent);
            // Add ripple effect
            createRipple(this);
        });
    });
    
    // Post title interactions
    const postTitles = document.querySelectorAll('.post-title');
    postTitles.forEach(title => {
        title.addEventListener('click', function() {
            console.log('Featured post clicked:', this.textContent);
            createRipple(this);
        });
    });
    
    // Social and contact links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.trim();
            
            // Handle different social links
            switch(linkText) {
                case 'Code':
                    // GitHub link - update with actual URL
                    break;
                case 'Resume':
                    // Resume download - update with actual file
                    console.log('Resume download requested');
                    break;
                case 'Twitter':
                    // Twitter link - update with actual URL
                    break;
            }
        });
    });
    
    // Contact links
    const contactLinks = document.querySelectorAll('.contact-link');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const linkText = this.textContent.trim();
            
            if (linkText === 'Email') {
                // Email functionality
                console.log('Email clicked');
            } else if (linkText === 'LinkedIn') {
                // LinkedIn functionality
                console.log('LinkedIn clicked');
            }
        });
    });
    
    // Activity cards interaction
    const activityCards = document.querySelectorAll('.activity-card');
    activityCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add subtle feedback
            this.style.transform = 'translateY(-2px) scale(1.01)';
            setTimeout(() => {
                this.style.transform = 'translateY(0) scale(1)';
            }, 150);
        });
    });
}

// Utility function to create ripple effect
function createRipple(element) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = rect.width / 2;
    const y = rect.height / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (x - size / 2) + 'px';
    ripple.style.top = (y - size / 2) + 'px';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Add ripple animation styles
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(0, 0, 0, 0.1)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    
    // Remove ripple after animation
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const activeIndex = navLinks.findIndex(link => link.classList.contains('active'));
    
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
        e.preventDefault();
        navLinks[activeIndex - 1].click();
    } else if (e.key === 'ArrowRight' && activeIndex < navLinks.length - 1) {
        e.preventDefault();
        navLinks[activeIndex + 1].click();
    }
});

// Smooth scroll utility
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .ripple {
        pointer-events: none;
    }
`;
document.head.appendChild(style);

// Theme management (for future dark mode)
function initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // Theme switching functionality can be added here
}

// Initialize theme
// initTheme();
