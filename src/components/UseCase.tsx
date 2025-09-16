import React from 'react'
import { Button } from './ui/Button';

const UseCase = () => {
    const useCases = [
  "Solution Experts",
  "Website Designers",
  "Website Builders",
  "SMEs",
];

const companyLinks = ["About Us", "Portfolio", "Solutions", "Careers", "FAQs"];

const productLinksLeft = [
  "Cretespace",
  "Cretecademy",
  "Creter",
  "Cretefly",
  "Cretestudio",
];

const productLinksRight = [
  "Cretehub",
  "Cretestate",
  "Creteflix",
  "Cretex",
  "Creteflex",
];
  return (

<footer className="relative w-full h-[699px] [background:radial-gradient(50%_50%_at_52%_50%,rgba(0,34,135,1)_0%,rgba(0,13,53,1)_100%)]">
        <div className="absolute w-[405px] h-[405px] top-[-18px] left-[986px]">
          <div className="relative w-[356px] h-[315px] top-[90px] left-[25px] bg-[url(/polygon.svg)] bg-[100%_100%]">
            <div className="flex flex-col w-[250px] items-center gap-4 relative top-[30px] left-[52px]">
              <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-1.00px] font-header-h2-small-24px-bold font-[number:var(--header-h2-small-24px-bold-font-weight)] text-white text-[length:var(--header-h2-small-24px-bold-font-size)] tracking-[var(--header-h2-small-24px-bold-letter-spacing)] leading-[var(--header-h2-small-24px-bold-line-height)] whitespace-nowrap [font-style:var(--header-h2-small-24px-bold-font-style)]">
                  Use Cases
                </h2>
              </div>

              <nav className="flex items-start justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-center gap-3 relative flex-1 grow">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                    >
                      <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-white text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                        {useCase}
                      </div>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-2.5 p-6 absolute top-[633px] left-0 bg-[linear-gradient(180deg,rgba(255,204,41,1)_0%,rgba(253,169,8,1)_100%)]">
          <div className="relative w-fit mt-[-1.00px] font-caption-12px-semibold font-[number:var(--caption-12px-semibold-font-weight)] text-primarydarkblue text-[length:var(--caption-12px-semibold-font-size)] tracking-[var(--caption-12px-semibold-letter-spacing)] leading-[var(--caption-12px-semibold-line-height)] whitespace-nowrap [font-style:var(--caption-12px-semibold-font-style)]">
            © 2025 Akonam Group. All rights reserved.
          </div>
        </div>

        <div className="absolute w-[300px] h-[300px] top-20 left-20 bg-[#ffffff03] rounded-[300px] overflow-hidden border-2 border-solid border-white shadow-[0px_0px_24px_1px_#cd3ad5,inset_0px_0px_24px_4px_#cd3ad5]">
          <div className="flex flex-col w-[250px] items-center gap-4 relative top-6 left-[25px]">
            <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] font-header-h2-small-24px-bold font-[number:var(--header-h2-small-24px-bold-font-weight)] text-white text-[length:var(--header-h2-small-24px-bold-font-size)] tracking-[var(--header-h2-small-24px-bold-letter-spacing)] leading-[var(--header-h2-small-24px-bold-line-height)] whitespace-nowrap [font-style:var(--header-h2-small-24px-bold-font-style)]">
                Company
              </h2>
            </div>

            <nav className="flex items-start justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-3 relative flex-1 grow">
                {companyLinks.map((link, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                  >
                    <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-white text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                      {link}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="absolute w-[300px] h-[300px] top-20 left-[570px] bg-[#ffffff03] rounded-xl overflow-hidden border-2 border-solid border-white shadow-[0px_0px_24px_1px_#3a7bd5,inset_0px_0px_10px_5px_#3a7bd5]">
          <div className="flex flex-col w-[250px] items-center gap-4 relative top-6 left-[25px]">
            <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative w-fit mt-[-1.00px] font-header-h2-small-24px-bold font-[number:var(--header-h2-small-24px-bold-font-weight)] text-white text-[length:var(--header-h2-small-24px-bold-font-size)] tracking-[var(--header-h2-small-24px-bold-letter-spacing)] leading-[var(--header-h2-small-24px-bold-line-height)] whitespace-nowrap [font-style:var(--header-h2-small-24px-bold-font-style)]">
                Products
              </h2>
            </div>

            <nav className="flex items-start justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-3 relative flex-1 grow">
                {productLinksLeft.map((product, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                  >
                    <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-white text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                      {product}
                    </div>
                  </div>
                ))}
              </div>

              <img
                className="relative self-stretch w-[33px] mt-[-16.00px] mb-[-16.00px]"
                alt="Vector"
                src="/vector 683.svg"
              />

              <div className="flex flex-col items-center gap-3 relative flex-1 grow">
                {productLinksRight.map((product, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]"
                  >
                    <div className="relative w-fit mt-[-1.00px] font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-white text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] whitespace-nowrap [font-style:var(--body-16px-regular-font-style)]">
                      {product}
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-4 absolute top-[466px] left-0">
          <div className="flex items-start gap-6 px-20 py-3 relative self-stretch w-full flex-[0_0_auto] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)]">
            <div className="flex items-start gap-6 relative flex-1 grow">
              <img
                className="relative w-[70px] h-[70px]"
                alt="Logo"
                src="/logo-1.svg"
              />

              <div className="inline-flex flex-col items-start gap-3 p-2.5 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] font-header-h3-small-20px-semibold font-[number:var(--header-h3-small-20px-semibold-font-weight)] text-white text-[length:var(--header-h3-small-20px-semibold-font-size)] text-center tracking-[var(--header-h3-small-20px-semibold-letter-spacing)] leading-[var(--header-h3-small-20px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h3-small-20px-semibold-font-style)]">
                  Contact
                </h3>

                <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Icons"
                      src="/icons-4.svg"
                    />
                    <div className="relative w-fit mt-[-1.00px] font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-white text-[length:var(--header-h4-small-16px-semibold-font-size)] tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] leading-[var(--header-h4-small-16px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h4-small-16px-semibold-font-style)]">
                      support@cretecad.com
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <img
                      className="relative w-6 h-6"
                      alt="Icons"
                      src="/icons.svg"
                    />
                    <div className="relative w-fit mt-[-1.00px] font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-white text-[length:var(--header-h4-small-16px-semibold-font-size)] tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] leading-[var(--header-h4-small-16px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h4-small-16px-semibold-font-style)]">
                      +234 8121 2121, +234 9121 2121
                    </div>
                  </div>
                </div>
              </div>

              <img
                className="relative self-stretch w-px h-[126px]"
                alt="Vector"
                src="/vector 684.svg"
              />

              <div className="inline-flex flex-col items-start gap-3 p-2.5 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] font-header-h3-small-20px-semibold font-[number:var(--header-h3-small-20px-semibold-font-weight)] text-white text-[length:var(--header-h3-small-20px-semibold-font-size)] text-center tracking-[var(--header-h3-small-20px-semibold-letter-spacing)] leading-[var(--header-h3-small-20px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h3-small-20px-semibold-font-style)]">
                  Follow Us
                </h3>
                <img
                  className="relative flex-[0_0_auto] ml-[-0.50px]"
                  alt="Frame"
                  src="/frame-26.svg"
                />
              </div>
            </div>

            <div className="flex flex-col w-[514px] items-start gap-2.5 relative">
              <div className="relative self-stretch mt-[-1.00px] font-caption-12px-semibold font-[number:var(--caption-12px-semibold-font-weight)] text-defaultwhite text-[length:var(--caption-12px-semibold-font-size)] tracking-[var(--caption-12px-semibold-letter-spacing)] leading-[var(--caption-12px-semibold-line-height)] [font-style:var(--caption-12px-semibold-font-style)]">
                Subscribe to stay tuned for latest updates.
              </div>

              <div className="flex items-center justify-between p-1 relative self-stretch w-full flex-[0_0_auto] bg-neutral-5 rounded-[1000px] border-2 border-solid border-[#e3e8f2]">
                <div className="flex items-center gap-2.5 px-5 py-0 relative flex-1 grow">
                  {/* <Input
                    placeholder="Enter your email"
                    className="relative w-[131.22px] mt-[-1.00px] opacity-20 font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-black text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)] border-0 bg-transparent p-0" */}
                  {/* /> */}
                </div>

                <Button className="inline-flex h-[50px] relative flex-[0_0_auto] bg-primaryyellow overflow-hidden items-center justify-center px-10 py-0 rounded-[100px] border-0 hover:bg-primaryyellow/90">
                  <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-header-h4-small-16px-semibold font-[number:var(--header-h4-small-16px-semibold-font-weight)] text-primarydarkblue text-[length:var(--header-h4-small-16px-semibold-font-size)] text-center tracking-[var(--header-h4-small-16px-semibold-letter-spacing)] leading-[var(--header-h4-small-16px-semibold-line-height)] whitespace-nowrap [font-style:var(--header-h4-small-16px-semibold-font-style)]">
                      Subscribe
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute w-full h-px top-[446px] left-0 object-cover"
          alt="Vector"
          src="/vector-685.svg"
        />

        
      </footer>
)
}

export default UseCase