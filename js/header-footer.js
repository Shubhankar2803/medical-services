function createHeader() {
    return `
        <nav class="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div class="container mx-auto px-6">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                            <i class="fas fa-plus text-lg"></i>
                        </div>
                        <a href="index.html" class="text-2xl font-light text-gray-900">
                            MedCare
                        </a>
                    </div>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="index.html" class="text-gray-700 hover:text-primary font-light transition duration-300">Home</a>
                        <a href="services.html" class="text-gray-700 hover:text-primary font-light transition duration-300">Services</a>
                        <a href="about.html" class="text-gray-700 hover:text-primary font-light transition duration-300">About</a>
                        <a href="contact.html" class="text-gray-700 hover:text-primary font-light transition duration-300">Contact</a>
                    </div>
                    
                    <div class="hidden md:block">
                        <a href="contact.html" class="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary-dark transition duration-300">
                            Book Now
                        </a>
                    </div>
                    
                    <div class="md:hidden">
                        <button type="button" class="text-gray-700 hover:text-primary" onclick="toggleMobileMenu()">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div id="mobile-menu" class="hidden md:hidden py-4 border-t border-gray-100">
                    <div class="flex flex-col space-y-3">
                        <a href="index.html" class="text-gray-700 hover:text-primary py-2 font-light">Home</a>
                        <a href="services.html" class="text-gray-700 hover:text-primary py-2 font-light">Services</a>
                        <a href="about.html" class="text-gray-700 hover:text-primary py-2 font-light">About</a>
                        <a href="contact.html" class="text-gray-700 hover:text-primary py-2 font-light">Contact</a>
                        <a href="contact.html" class="bg-primary text-white px-6 py-2 rounded-full font-medium mt-3 text-center">Book Now</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

function createFooter() {
    return `
        <footer class="bg-gray-900 text-white">
            <div class="container mx-auto px-6 py-16">
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                        <div class="flex items-center space-x-3 mb-6">
                            <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                                <i class="fas fa-plus text-white text-lg"></i>
                            </div>
                            <h3 class="text-2xl font-light">MedCare</h3>
                        </div>
                        <p class="text-gray-300 mb-6 max-w-md font-light leading-relaxed">
                            Simple, effective healthcare focused on your wellbeing. 
                            We believe in making quality medical care accessible to everyone.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-primary transition duration-300">
                                <i class="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-primary transition duration-300">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-primary transition duration-300">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-medium mb-6">Navigation</h4>
                        <ul class="space-y-3">
                            <li><a href="index.html" class="text-gray-300 hover:text-primary transition duration-300 font-light">Home</a></li>
                            <li><a href="services.html" class="text-gray-300 hover:text-primary transition duration-300 font-light">Services</a></li>
                            <li><a href="about.html" class="text-gray-300 hover:text-primary transition duration-300 font-light">About</a></li>
                            <li><a href="contact.html" class="text-gray-300 hover:text-primary transition duration-300 font-light">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-medium mb-6">Contact</h4>
                        <div class="space-y-3 text-gray-300 font-light">
                            <p class="flex items-center">
                                <i class="fas fa-phone w-5 mr-3 text-primary"></i>
                                +1 (555) 123-4567
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-envelope w-5 mr-3 text-primary"></i>
                                info@medcare.com
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-map-marker-alt w-5 mr-3 text-primary"></i>
                                123 Health Street, MC 12345
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p class="text-gray-400 font-light">
                        &copy; 2024 MedCare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    `;
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
});
