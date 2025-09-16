import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import SocialMediaIcons from './icons/SocialMediaIcons';
import ProductsDivider from './icons/ProductsDivider';
import UseCasesTriangle from './icons/UseCasesTriangle';

const Footer: React.FC = () => {
  const companyLinks = ['About Us', 'Portfolio', 'Solutions', 'Careers', 'FAQs'];
  
  const productsLeft = ['Cretespace', 'Cretecademy', 'Creter', 'Cretefly', 'Cretestudio'];
  const productsRight = ['Cretehub', 'Cretestate', 'Creteflix', 'Cretex', 'Creteflex'];
  
  const useCases = ['Solution Experts', 'Website Designers', 'Website Builders', 'SMEs'];

  return (
    <footer className="gradient-footer text-(--text-white)">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-16 mb-16">
          {/* Company Section - Circular */}
          <div className="relative">
            <div className="w-80 h-80 rounded-full border-2 border-(--accent-yellow) flex flex-col items-center justify-center text-center space-y-4 mx-auto relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_16px_rgba(255,204,41,0.3)]" />
              <div className="relative z-10 space-y-3">
                <h3 className="subsection-heading">Company</h3>
                <div className="space-y-2">
                  {companyLinks.map((link) => (
                    <div key={link}>
                      <a href="#" className="body-text hover:text-(--accent-yellow) transition-colors">
                        {link}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section - Rectangular */}
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 p-8">
              <h3 className="subsection-heading mb-6 text-center">Products</h3>
              <div className="flex items-start gap-6">
                <div className="flex-1 space-y-3">
                  {productsLeft.map((product) => (
                    <div key={product}>
                      <a href="#" className="body-text hover:text-(--accent-yellow) transition-colors">
                        {product}
                      </a>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center">
                  <ProductsDivider width={1} height={169} color="#3a7bd5" />
                </div>
                
                <div className="flex-1 space-y-3">
                  {productsRight.map((product) => (
                    <div key={product}>
                      <a href="#" className="body-text hover:text-(--accent-yellow) transition-colors">
                        {product}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Use Cases Section - Triangular */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <UseCasesTriangle width={409} height={389} color="#ffffff" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-4">
                <h3 className="subsection-heading">Use Cases</h3>
                <div className="space-y-2">
                  {useCases.map((useCase) => (
                    <div key={useCase}>
                      <a href="#" className="body-text hover:text-(--accent-yellow) transition-colors">
                        {useCase}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-25 mb-12" />

        {/* Bottom Footer */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Contact Info */}
          <div className="flex items-start gap-6">
            <Image
              src="/assets/cretecad-logo-footer.svg"
              alt="Cretecad Logo"
              width={46}
              height={45}
              className="mt-2"
            />
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <EmailIcon width={22} height={18} color="#ffffff" />
                  <span className="body-text font-semibold">support@cretecad.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon width={21} height={22} color="#ffffff" />
                  <span className="body-text font-semibold">+234 8121 2121, +234 9121 2121</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-l border-white border-opacity-50 pl-8">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <SocialMediaIcons width={190} height={30} color="#ffffff" />
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <p className="small-text">Subscribe to stay tuned for latest updates.</p>
            <div className="search-input flex items-center justify-between p-4 bg-white bg-opacity-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none outline-none body-text text-white placeholder:text-white placeholder:opacity-20"
              />
              <Button variant="accent" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-white border-opacity-25">
          <p className="small-text">© 2025 Akonam Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;