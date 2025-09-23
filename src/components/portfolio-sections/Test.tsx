"use client";
import React,{ useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Dropdown } from "../ui/dropdown";
import { cn } from "../../lib/utils";
import SectionHeader from "../sections/SectionHeader";

const ecosystemData = [
  {
    name: "CRETESPACE",
    img: "/sectionlogo.png",
    background:
      "radial-gradient(50% 50% at 52% 50%, rgba(63,188,40,1) 0%, rgba(0,130,179,1) 100%)",
    borderRadius: "rounded-[7.95px]",
    description:
      "CRETESPACE is a modernized business centre platform, offering printing, scanning, design, and digital services across Africa.",
    howWeScaledIt:
      "By building the CRETESPACE App, we transformed traditional business centres into profitable digital hubs. The app automates service requests, integrates AI-powered assistance (via CRETER), and streamlines payments — reducing downtime, boosting efficiency, and ensuring customer satisfaction.",
    ctaText: "Visit Cretespace",
    ctaLink: "https://cretespace.com",
  },
  {
    name: "CRETECADEMY",
    img: "/sectionlogo.png",
    background:
      "radial-gradient(50% 50% at 52% 50%, rgba(60,34,232,1) 0%, rgba(190,14,172,1) 100%)",
    borderRadius: "rounded-[6.53px]",
    description:
      "CRETECADEMY is an innovative learning platform providing comprehensive digital education and skill development programs.",
    howWeScaledIt:
      "We scaled CRETECADEMY by developing an adaptive learning system that personalizes education paths for each student, integrating AI-driven assessments and real-time progress tracking.",
    ctaText: "Visit Cretecademy",
    ctaLink: "https://cretecademy.com",
  },
  {
    name: "CRETESTUDIOS",
    img: "/sectionlogo.png",
    background:
      "radial-gradient(50% 50% at 52% 50%, rgba(0,34,135,1) 0%, rgba(0,13,53,1) 100%)",
    borderRadius: "rounded-lg",
    description:
      "CRETESTUDIOS is a creative design and multimedia production platform serving businesses across Africa.",
    howWeScaledIt:
      "We scaled CRETESTUDIOS by building a collaborative platform that connects creative professionals with businesses, streamlining project management and delivery processes.",
    ctaText: "Visit Cretestudios",
    ctaLink: "https://cretestudios.com",
  },
  {
    name: "CRETEHUB",
    img: "/sectionlogo.png",
    background:
      "radial-gradient(50% 50% at 52% 50%, rgba(0,34,135,1) 0%, rgba(0,13,53,1) 100%)",
    borderRadius: "rounded-lg",
    description:
      "CRETEHUB is a comprehensive business management platform that helps SMEs streamline their operations and grow their businesses.",
    howWeScaledIt:
      "We scaled CRETEHUB by developing an all-in-one business solution that integrates inventory management, customer relations, and financial tracking in a single platform.",
    ctaText: "Visit Cretehub",
    ctaLink: "https://cretehub.com",
  },
  {
    name: "CRETEESTATE",
    img: "/sectionlogo.png",
    background:
      "radial-gradient(50% 50% at 52% 50%, rgba(135,0,122,1) 0%, rgba(53,0,42,1) 100%)",
    borderRadius: "rounded-lg",
    description:
      "CRETEESTATE is a modern real estate platform that connects property buyers, sellers, and agents across Africa.",
    howWeScaledIt:
      "We scaled CRETEESTATE by creating a comprehensive property marketplace with virtual tours, AI-powered property matching, and streamlined transaction processes.",
    ctaText: "Visit Creteestate",
    ctaLink: "https://creteestate.com",
  },
];

const servicesTags = [
  "Design",
  "Printing",
  "Flex Banner",
  "Digital Services",
  "Photocopy",
  "Scanning",
];

export const OurEcosystemSection = () => {
  const [openDropdowns, setOpenDropdowns] = useState<{
    [key: string]: boolean;
  }>({});
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleDropdown = (companyName: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [companyName]: !prev[companyName],
    }));
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    let shouldClose = true;

    // Checked if click is inside any dropdown
    Object.keys(dropdownRefs.current).forEach((key) => {
      const ref = dropdownRefs.current[key];
      if (ref && ref.contains(target)) {
        shouldClose = false;
      }
    });

    if (shouldClose) {
      setOpenDropdowns({});
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="relative w-full gray-gradient-section overflow-hidden pt-20 pb-40 px-20">
      <div className="absolute top-[-651px] left-[-349px] w-[1055px] h-[1040px] bg-[#00956D] rounded-[527.5px/520px] opacity-20" />
      <div className="absolute top-[805px] left-[-349px] w-[1055px] h-[1040px] bg-[#00956D] rounded-[527.5px/520px] opacity-20" />
      <div className="absolute top-[calc(50.00%_-_500px)] left-[calc(50.00%_+_55px)] w-[1055px] h-[1000px] bg-primaryyellow2 rounded-[527.5px/520px] opacity-20" />
{/* header  */}
   <SectionHeader lineColor="#000D35"
   text="Our Ecosystem"
   />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-16  max-w-[1278px] mx-auto">
        {ecosystemData.map((company) => (
          <div
            key={company.name}
            ref={(el) => {
              dropdownRefs.current[company.name] = el;
            }}
            className="relative "
            >
            {/* {cn(

              "relative transition-all duration-300", 
              openDropdowns ? "min-h-[100px]" : "min-h-[300px]"
            )} */}
            <Card className="bg-white border border-[#e3e8f2] p-2   rounded-none ">
              <CardContent className="p-0">
                <div className="flex flex-col items-center gap-5 bg-white rounded ">
                  <div className=" w-full h-[164px] overflow-hidden">
                    <img
                      className=" inset-0 h-[200px] w-full mx-auto"
                      alt={company.name}
                      loading="lazy"
                      src={company.img}
                    />
                  </div>

                  <div
                    className={`flex items-center gap-1 p-2.5 w-full ${company.borderRadius} `}
                    style={{ background: company.background }}
                  >
                    <div className="flex flex-col items-start gap-1 flex-1">
                      <h3 className=" text-white subsection-heading ">{company.name}</h3>
                      <div className="w-[42px] h-1 bg-primaryyellow2 rounded-[4.08px]" />
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-8 h-8 text-white cursor-pointer transition-transform duration-300 ease-in-out",
                        openDropdowns[company.name] ? "rotate-180" : "rotate-0"
                      )}
                      onClick={() => toggleDropdown(company.name)}
                    />
                  </div>

                  <div
                    className={cn(
                      "flex flex-wrap gap-2 px-4 py-2 w-full transition-opacity duration-300",
                      openDropdowns[company.name] ? "opacity-0" : "opacity-100"
                    )}
                  >
                    {servicesTags.map((service) => (
                      <Badge
                        key={service}
                        variant="secondary"
                        className="bg-gray-200 text-[20px]   text-[#000d35b2] p-2 "
                      >
                        {service}
                      </Badge>
                    ))}
                  </div>

                  <Dropdown
                    title={company.name}
                    description={company.description}
                    howWeScaledIt={company.howWeScaledIt}
                    ctaText={company.ctaText}
                    ctaLink={company.ctaLink}
                    headerBackground={company.background}
                    isOpen={openDropdowns[company.name] || false}
                    onToggle={() => toggleDropdown(company.name)}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
