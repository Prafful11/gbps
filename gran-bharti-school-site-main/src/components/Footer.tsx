import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about', isExternal: false },
    { name: 'Academic Programs', href: '#programs', isExternal: false },
    { name: 'Admissions', href: '/admission', isExternal: true },
    { name: 'Faculty', href: '#faculty', isExternal: false },
    { name: 'News & Events', href: '#news', isExternal: false },
    { name: 'Contact', href: '/contact', isExternal: true }
  ];

  const resources = [
    { name: 'Student Portal', href: '#' },
    { name: 'Parent Portal', href: '#' },
    { name: 'Online Library', href: '#' },
    { name: 'Academic Calendar', href: '#' },
    { name: 'Fee Structure', href: '#' },
    { name: 'Transport', href: '#' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-school-darkBlue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-school-gold rounded-lg">
                <GraduationCap className="h-6 w-6 text-school-darkBlue" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gyan Bharti</h3>
                <p className="text-blue-200 text-sm">Public School</p>
              </div>
            </div>
            <p className="text-blue-200">
              Nurturing minds, building futures. Excellence in education since 1998.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-school-gold" />
                <span className="text-sm text-blue-200">Near D.M Office Mathura Road, Hathras, India - 204101</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-school-gold" />
                <span className="text-sm text-blue-200">+91 989 787 7198</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-school-gold" />
                <span className="text-sm text-blue-200">info@gyanbharti.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <Link 
                      to={link.href}
                      className="text-blue-200 hover:text-school-gold transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-blue-200 hover:text-school-gold transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-blue-200 hover:text-school-gold transition-colors duration-200"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
            <p className="text-blue-200 text-sm mb-4">
              Subscribe to our newsletter for latest updates and news.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-school-blue rounded-full flex items-center justify-center hover:bg-school-gold hover:text-school-darkBlue transition-colors duration-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-school-blue border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:border-school-gold"
              />
              <button className="w-full bg-school-gold text-school-darkBlue px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm">
              © 2024 Gyan Bharti Public School. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-200 hover:text-school-gold text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-200 hover:text-school-gold text-sm transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-blue-200 hover:text-school-gold text-sm transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
