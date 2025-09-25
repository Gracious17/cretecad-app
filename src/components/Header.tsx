"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import SearchIcon from "./icons/SearchIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HighlightPill from "./ui/HighlightPill";
import { X } from "lucide-react";

const Header: React.FC = () => {
  const pathname = usePathname(); 
  const [showSearch, setShowSearch] = useState(false);

  // Toggle search visibility
  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
  };

  const navItems = [
    {
      name: "Solutions",
      href: "/solutions",
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Partnerships", href: "/partnership" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-[1.5px] bg-white/80 h-[80px] items-center    [border-bottom-style:solid] border-transparent backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] [border-image:linear-gradient(90deg,rgba(0,13,53,0)_0%,rgba(0,13,53,0)_21%,rgba(0,34,135,0.2)_48%,rgba(0,13,53,0)_78%,rgba(0,13,53,0)_100%)_1]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/assets/cretecad-logo.svg"
                alt="Cretecad Logo"
                width={47}
                height={56}
                className="h-14 w-auto"
              />
            </div>
          </Link>
          
  
  <div className="flex-1 flex justify-center">
{

  !showSearch ?(


    
    <nav className="hidden lg:flex items-center gap-6 ">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                key={item.name}
                href={item.href}
                className={`relative body-text text-(--text-primary) hover:text-(--primary-blue)    transition-all duration-500 ${
                  isActive ? "":"hover:pb-4"
                }`}
                >
                  {item.name}
                  { isActive&&(
                    <HighlightPill/>
                  )}
                </Link>
              );
            })}
            <SearchIcon onClick={toggleSearch} width={13} height={13} color="#7e8491"  className=" cursor-pointer transition-all duration-500"/>
          </nav>
          ):
          (
            <div className="flex items-center w-full max-w-md border border-gray-300 rounded-full px-6 py-4 ">
                 <SearchIcon width={20} height={20} color="#7e8491" />
                <input
                  type="text"
                 placeholder="Search CRETECAD"
                 className="flex-1 ml-2 outline-none bg-transparent text-gray-700"
                />
              <button onClick={toggleSearch} className="cursor-pointer ">
                  <X className="w-6 h-6 text-gray-300 " />
               </button>
             </div>


          )
          }

              </div>
          <Button variant="primary" size="md">
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;




