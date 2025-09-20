import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";
import SocialMediaIcons from "./icons/SocialMediaIcons";
import ProductsDivider from "./icons/ProductsDivider";

const Footer: React.FC = () => {
  const companyLinks = [
    "About Us",
    "Portfolio",
    "Solutions",
    "Careers",
    "FAQs",
  ];

  const productsLeft = [
    "Cretespace",
    "Cretecademy",
    "Creter",
    "Cretefly",
    "Cretestudio",
  ];
  const productsRight = [
    "Cretehub",
    "Cretestate",
    "Creteflix",
    "Cretex",
    "Creteflex",
  ];

  const useCases = [
    "Solution Experts",
    "Website Designers",
    "Website Builders",
    "SMEs",
  ];
  return (
    <footer className="gradient-footer text-(--text-white)">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-16 ">
          {/* Company Section - Circular */}
          <div className="w-80 h-80 rounded-full  flex flex-col items-center justify-center text-center space-y-4 mx-auto relative overflow-hidden border-2 border-solid border-white shadow-[0px_0px_24px_1px_#cd3ad5,inset_0px_0px_24px_4px_#cd3ad5]">
            <div className="absolute inset-0 rounded-full  " />
            <div className="relative z-10 space-y-3">
              <h3 className="subsection-heading">Company</h3>
              <div className="space-y-2">
                {companyLinks.map((link) => (
                  <div key={link}>
                    <a
                      href="#"
                      className="body-text hover:text-(--accent-yellow) transition-colors"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Products Section - Rectangular */}
          <div className=" bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 p-8 shadow-[0px_0px_24px_1px_#3a7bd5,inset_0px_0px_10px_5px_#3a7bd5]">
            <h3 className="subsection-heading mb-6 text-center">Products</h3>
            <div className="flex items-start gap-6">
              <div className="flex-1 space-y-3">
                {productsLeft.map((product) => (
                  <div key={product}>
                    <a
                      href="#"
                      className="body-text hover:text-(--accent-yellow) transition-colors"
                    >
                      {product}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex items-center">
                <ProductsDivider
                  width={1}
                  height={169}
                  color="#3a7bd5"
                  className="shadow-[0px_0px_24px_1px_#3a7bd5,inset_0px_0px_10px_5px_#3a7bd5]"
                />
              </div>

              <div className="flex-1 space-y-3">
                {productsRight.map((product) => (
                  <div key={product}>
                    <a
                      href="#"
                      className="body-text hover:text-(--accent-yellow) transition-colors"
                    >
                      {product}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Use Cases Section - Triangular */}
          <div className=" bg-no-repeat w-[372px] h-[327px] p-6   bg-[url(/polygon.svg)] bg-[100%_100%]">
            <div className="flex flex-col w-[250px] justify-center mx-auto pt-4  gap-4 ">
              <h2 className=" subsection-heading text-center  text-white   ">
                Use Cases
              </h2>

              <nav className="flex items-start justify-center gap-2.5  self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-3 flex-1 grow">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className=" items-center justify-center gap-2.5  flex-[0_0_auto]"
                    >
                      <a
                        href="#"
                        className=" text-white hover:text-(--accent-yellow) transition-colors "
                      >
                        {useCase}
                      </a>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 border-opacity-25 grid lg:grid-cols-3 gap-8 px-16 py-12 items-start backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
        {/* Contact Info */}
        <div className="flex items-start gap-6">
          <span className="bg-white p-3 rounded-full items-center justify-center">
            <Image
              src="/assets/cretecad-logo-footer.svg"
              alt="Cretecad Logo"
              width={46}
              height={45}
              className=""
            />
          </span>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <EmailIcon width={22} height={18} color="#ffffff" />
                <span className="body-text font-semibold">
                  support@cretecad.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon width={21} height={22} color="#ffffff" />
                <span className="body-text font-semibold">
                  +234 8121 2121, +234 9121 2121
                </span>
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
          <p className="small-text">
            Subscribe to stay tuned for latest updates.
          </p>
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
      <div className="flex w-full items-center justify-center gap-2.5 p-6  bg-[linear-gradient(180deg,rgba(255,204,41,1)_0%,rgba(253,169,8,1)_100%)]">
        <div className="  text-black   font-semibold">
          © 2025 Akonam Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
