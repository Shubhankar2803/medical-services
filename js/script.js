let siteData = null;

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
    
    siteData.testimonials.forEach(testimonial => {
        const stars = ''.repeat(testimonial.rating);
        const testimonialHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <div class="mb-4">
                    <div class="text-yellow-400 text-lg">${stars}</div>
                </div>
                <p class="text-gray-600 mb-4">"${testimonial.text}"</p>
                <div class="border-t pt-4">
                    <p class="font-semibold text-gray-800">${testimonial.name}</p>
                    <p class="text-sm text-gray-500">${testimonial.position}</p>
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
    
    servicesPreview.forEach(service => {
        const serviceHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="${service.icon} text-2xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3 text-gray-800">${service.title}</h3>
                <p class="text-gray-600 mb-4">${service.description}</p>
                <p class="text-blue-600 font-semibold text-lg">${service.price}</p>
                <a href="contact.html" class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Book Now</a>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

function displayServices() {
    const container = document.getElementById('all-services-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.services.forEach(service => {
        const serviceHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300">
                <div class="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <i class="${service.icon} text-3xl"></i>
                </div>
                <h3 class="text-2xl font-semibold mb-4 text-gray-800">${service.title}</h3>
                <p class="text-gray-600 mb-6">${service.description}</p>
                <p class="text-blue-600 font-bold text-xl mb-6">${service.price}</p>
                <a href="contact.html" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Schedule Appointment</a>
            </div>
        `;
        container.innerHTML += serviceHTML;
    });
}

function displayDoctors() {
    const container = document.getElementById('doctors-container');
    if (!container || !siteData) return;
    
    container.innerHTML = '';
    
    siteData.doctors.forEach(doctor => {
        const doctorHTML = `
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
                <div class="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-user-md text-3xl"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800">${doctor.name}</h3>
                <p class="text-blue-600 font-medium mb-2">${doctor.specialization}</p>
                <p class="text-gray-600 mb-2">${doctor.experience} experience</p>
                <p class="text-sm text-gray-500">${doctor.education}</p>
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
        } else if (currentPage === 'services.html') {
            displayServices();
        } else if (currentPage === 'about.html') {
            displayDoctors();
        }
    }
});
