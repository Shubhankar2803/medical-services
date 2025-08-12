let siteData = null;

// Counter Animation Function
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 16);
}

// Initialize counter animations when they come into view
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// Interactive Booking System
function initBookingSystem() {
    const serviceOptions = document.querySelectorAll('.service-option');
    const timeSlots = document.querySelectorAll('.time-slot');
    const selectedServiceEl = document.getElementById('selected-service');
    const selectedTimeEl = document.getElementById('selected-time');
    const bookBtn = document.getElementById('book-appointment-btn');
    
    let selectedService = null;
    let selectedTime = null;
    
    // Service selection
    serviceOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove previous selection
            serviceOptions.forEach(opt => {
                opt.classList.remove('border-primary', 'bg-primary-50');
                opt.classList.add('border-gray-200');
            });
            
            // Add selection to clicked option
            option.classList.remove('border-gray-200');
            option.classList.add('border-primary', 'bg-primary-50');
            
            selectedService = option.getAttribute('data-service');
            const serviceTitle = option.querySelector('h4').textContent;
            selectedServiceEl.textContent = serviceTitle;
            selectedServiceEl.parentElement.classList.add('text-primary');
            
            updateBookButton();
        });
    });
    
    // Time slot selection
    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            // Remove previous selection
            timeSlots.forEach(s => {
                s.classList.remove('border-primary', 'bg-primary', 'text-white');
                s.classList.add('border-gray-200');
            });
            
            // Add selection to clicked slot
            slot.classList.remove('border-gray-200');
            slot.classList.add('border-primary', 'bg-primary', 'text-white');
            
            selectedTime = slot.getAttribute('data-time');
            selectedTimeEl.textContent = slot.textContent;
            selectedTimeEl.parentElement.classList.add('text-primary');
            
            updateBookButton();
        });
    });
    
    function updateBookButton() {
        if (selectedService && selectedTime) {
            bookBtn.disabled = false;
            bookBtn.classList.remove('disabled:bg-gray-300');
        }
    }
    
    // Book appointment button
    if (bookBtn) {
        bookBtn.addEventListener('click', () => {
            if (selectedService && selectedTime) {
                // Create a more engaging booking confirmation
                showBookingModal(selectedService, selectedTime);
            }
        });
    }
}

// Show booking confirmation modal
function showBookingModal(service, time) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl p-8 max-w-md w-full transform scale-0 transition-transform duration-300">
            <div class="text-center">
                <div class="w-16 h-16 bg-primary-100 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-check text-2xl"></i>
                </div>
                <h3 class="text-2xl font-medium mb-4 text-gray-900">Booking Confirmed!</h3>
                <p class="text-secondary mb-6">Your appointment has been successfully scheduled.</p>
                <div class="bg-primary-50 p-4 rounded-lg mb-6">
                    <p class="text-sm text-gray-700"><strong>Service:</strong> ${service}</p>
                    <p class="text-sm text-gray-700"><strong>Time:</strong> ${time}</p>
                    <p class="text-sm text-gray-700"><strong>Date:</strong> Tomorrow</p>
                </div>
                <div class="space-y-3">
                    <button onclick="window.location.href='contact.html'" class="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition duration-300">
                        Complete Details
                    </button>
                    <button onclick="this.closest('.fixed').remove()" class="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition duration-300">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Animate modal appearance
    setTimeout(() => {
        modal.querySelector('.transform').classList.remove('scale-0');
        modal.querySelector('.transform').classList.add('scale-100');
    }, 10);
}

async function loadData() {
    try {
        const response = await fetch('data/medical-services.json');
        if (!response.ok) {
            throw new Error('Failed to load data');
        }
        siteData = await response.json();
        console.log('Data loaded successfully');
        return siteData;
    } catch (error) {
        console.error('Error loading data:', error);
        return null;
    }
}

function displayTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.testimonials.forEach((testimonial, index) => {
        const stars = '★'.repeat(testimonial.rating);
        const testimonialHTML = `
            <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" data-aos-duration="800" class="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div class="mb-6">
                    <div class="text-primary text-lg group-hover:text-primary-dark transition-colors duration-300">${stars}</div>
                </div>
                <p class="text-secondary mb-6 font-light leading-relaxed italic">"${testimonial.text}"</p>
                <div class="border-t border-gray-100 pt-6">
                    <div class="flex items-center">
                        <div class="w-12 h-12 bg-primary-100 text-primary rounded-full flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <i class="fas fa-user"></i>
                        </div>
                        <div>
                            <p class="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">${testimonial.name}</p>
                            <p class="text-sm text-secondary font-light">${testimonial.position}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += testimonialHTML;
    });
}

function displayServicesPreview() {
    const container = document.getElementById('services-preview-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    const servicesPreview = siteData.services.slice(0, 3);
    
    servicesPreview.forEach((service, index) => {
        const serviceHTML = `
            <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" data-aos-duration="800" class="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:border-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <div class="w-16 h-16 bg-primary-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <i class="${service.icon} text-2xl"></i>
                </div>
                <h3 class="text-xl font-medium mb-4 text-gray-900 group-hover:text-primary transition-colors duration-300">${service.title}</h3>
                <p class="text-secondary mb-6 font-light leading-relaxed">${service.description}</p>
                <p class="text-primary font-medium text-lg mb-6 group-hover:text-primary-dark transition-colors duration-300">${service.price}</p>
                <a href="contact.html" class="inline-block bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition duration-300 font-medium transform hover:scale-105">Book Now</a>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

function displayServices() {
    const container = document.getElementById('all-services-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.services.forEach((service, index) => {
        const serviceHTML = `
            <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" data-aos-duration="800" class="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:border-primary transition duration-300">
                <div class="w-20 h-20 bg-primary-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i class="${service.icon} text-3xl"></i>
                </div>
                <h3 class="text-2xl font-medium mb-4 text-gray-900">${service.title}</h3>
                <p class="text-secondary mb-6 font-light leading-relaxed">${service.description}</p>
                <p class="text-primary font-medium text-xl mb-6">${service.price}</p>
                <a href="contact.html" class="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition duration-300">Schedule Now</a>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

function displayDoctors() {
    const container = document.getElementById('doctors-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.doctors.forEach((doctor, index) => {
        const doctorHTML = `
            <div data-aos="fade-up" data-aos-delay="${(index + 1) * 100}" data-aos-duration="800" class="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:border-primary transition duration-300">
                <div class="w-24 h-24 bg-primary-100 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <i class="fas fa-user-md text-3xl"></i>
                </div>
                <h3 class="text-xl font-medium mb-2 text-gray-900">${doctor.name}</h3>
                <p class="text-primary font-medium mb-2">${doctor.specialization}</p>
                <p class="text-secondary mb-2 font-light">${doctor.experience} experience</p>
                <p class="text-sm text-secondary font-light">${doctor.education}</p>
            </div>
        `;
        container.innerHTML += doctorHTML;
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    await loadData();
    
    if (siteData) {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        if (currentPage === 'index.html') {
            displayTestimonials();
            displayServicesPreview();
            
            // Initialize interactive features for homepage
            initCounters();
            initBookingSystem();
        } else if (currentPage === 'services.html') {
            displayServices();
        } else if (currentPage === 'about.html') {
            displayDoctors();
        }
        
        // Refresh AOS after content is loaded
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }
    
    // Initialize interactive features on all pages
    initInteractiveElements();
});

// Additional interactive elements for all pages
function initInteractiveElements() {
    // Add hover sound effects (optional)
    const interactiveElements = document.querySelectorAll('.hover\\:scale-105, .service-option, .time-slot');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'scale(1.02)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'scale(1)';
        });
    });
    
    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}
