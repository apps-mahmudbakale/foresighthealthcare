import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from 'lucide-react';
import ForesightLogo from '../foresightlogo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src={ForesightLogo} 
                alt="Foresight Healthcare Logo" 
                className="h-14 w-auto object-contain" 
              />
              <div>
                <h3 className="text-2xl font-bold">Foresight Healthcare</h3>
                <p className="text-gray-400">Comprehensive Healthcare Services</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              For over 15 years, we've been providing exceptional healthcare services to our community. 
              Our mission is to enhance the quality of life for all our patients 
              through comprehensive, compassionate medical care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('staff')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:07070797979" className="text-gray-300 hover:text-white transition-colors">
                    +234 707 079 7979
                  </a>
                  <p className="text-blue-300 text-sm mt-1">Call us for inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="mailto:info@foresighthealthcare.com.ng" className="text-gray-300 hover:text-white transition-colors">
                    info@foresighthealthcare.com.ng
                  </a>
                  <p className="text-green-300 text-sm mt-1">Email us anytime</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Plot 2978, Logone close<br />
                    Off Nile street, Maitama<br />
                    Abuja, Nigeria
                  </p>
                  <a href="https://maps.google.com/?q=Plot+2978+Logone+close+off+Nile+street+Maitama+Abuja" target="_blank" rel="noopener noreferrer" className="text-purple-300 text-sm hover:underline">
                    View on map
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 6AM-8PM</p>
                  <p className="text-gray-300">Sat: 6AM-4PM</p>
                  <p className="text-red-400 text-sm">Emergency: 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Foresight Healthcare. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Medicare Certified | Joint Commission Accredited | State Licensed
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Patient Rights
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;