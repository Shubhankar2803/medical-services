function createHeader() {
    return `
        <nav class="bg-white shadow-lg sticky top-0 z-50">
            <div class="container mx-auto px-6">
                <div class="flex justify-between items-center py-4">
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center">
                            <i class="fas fa-heartbeat text-white text-xl"></i>
                        </div>
                        <a href="index.html" class="text-2xl font-bold text-gray-800">
                            MedCare Pro
                        </a>
                    </div>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="index.html" class="text-gray-700 hover:text-medical-blue font-medium transition duration-300">Home</a>
                        <a href="services.html" class="text-gray-700 hover:text-medical-blue font-medium transition duration-300">Services</a>
                        <a href="about.html" class="text-gray-700 hover:text-medical-blue font-medium transition duration-300">About</a>
                        <a href="contact.html" class="text-gray-700 hover:text-medical-blue font-medium transition duration-300">Contact</a>
                    </div>
                    
                    <div class="hidden md:block">
                        <a href="contact.html" class="bg-medical-blue text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                            Book Appointment
                        </a>
                    </div>
                    
                    <div class="md:hidden">
                        <button type="button" class="text-gray-700 hover:text-medical-blue" onclick="toggleMobileMenu()">
                            <i class="fas fa-bars text-xl"></i>
                        </button>
                    </div>
                </div>
                
                <div id="mobile-menu" class="hidden md:hidden py-4 border-t">
                    <div class="flex flex-col space-y-2">
                        <a href="index.html" class="text-gray-700 hover:text-medical-blue py-2 font-medium">Home</a>
                        <a href="services.html" class="text-gray-700 hover:text-medical-blue py-2 font-medium">Services</a>
                        <a href="about.html" class="text-gray-700 hover:text-medical-blue py-2 font-medium">About</a>
                        <a href="contact.html" class="text-gray-700 hover:text-medical-blue py-2 font-medium">Contact</a>
                        <a href="contact.html" class="bg-medical-blue text-white px-6 py-2 rounded-lg font-medium mt-2 text-center">Book Appointment</a>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

function createFooter() {
    return `
        <footer class="bg-gray-800 text-white">
            <div class="container mx-auto px-6 py-12">
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="md:col-span-2">
                        <div class="flex items-center space-x-2 mb-4">
                            <div class="w-10 h-10 bg-gradient-to-br from-medical-blue to-medical-teal rounded-full flex items-center justify-center">
                                <i class="fas fa-heartbeat text-white text-xl"></i>
                            </div>
                            <h3 class="text-2xl font-bold">MedCare Pro</h3>
                        </div>
                        <p class="text-gray-300 mb-4 max-w-md">
                            Professional medical services with compassionate care. Your health is our priority, 
                            and we're committed to providing exceptional healthcare services.
                        </p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-300 hover:text-medical-blue transition duration-300">
                                <i class="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-medical-blue transition duration-300">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-medical-blue transition duration-300">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-300 hover:text-medical-blue transition duration-300">
                                <i class="fab fa-linkedin text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="text-gray-300 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="services.html" class="text-gray-300 hover:text-white transition duration-300">Services</a></li>
                            <li><a href="about.html" class="text-gray-300 hover:text-white transition duration-300">About</a></li>
                            <li><a href="contact.html" class="text-gray-300 hover:text-white transition duration-300">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
                        <div class="space-y-2 text-gray-300">
                            <p class="flex items-center">
                                <i class="fas fa-phone w-5 mr-2"></i>
                                +1 (555) 123-4567
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-envelope w-5 mr-2"></i>
                                info@medcarepro.com
                            </p>
                            <p class="flex items-center">
                                <i class="fas fa-map-marker-alt w-5 mr-2"></i>
                                123 Health Street, MC 12345
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p class="text-gray-300">
                        &copy; 2024 MedCare Pro. All rights reserved. | Professional Medical Services
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
