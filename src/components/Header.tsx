"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import SearchIcon from "./icons/SearchIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HighlightPill from "./ui/HighlightPill";

const Header: React.FC = () => {
  const pathname = usePathname(); 

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

            <SearchIcon width={13} height={13} color="#7e8491" />
          </nav>

          <Button variant="primary" size="md">
            <span>Get Started</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
