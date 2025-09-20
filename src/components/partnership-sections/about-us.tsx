import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";

export const AboutUsSection = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto gap-12 px-0 py-12 flex flex-col items-start">
      <header className="flex-col items-start flex gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="bg-[linear-gradient(180deg,rgba(255,204,41,1)_0%,rgba(253,169,8,1)_100%)] relative w-[60px] h-[7px]" />

        <h1 className="relative self-stretch font-header-h1-large-40px-bold font-[number:var(--header-h1-large-40px-bold-font-weight)] text-primarydarkblue text-[length:var(--header-h1-large-40px-bold-font-size)] tracking-[var(--header-h1-large-40px-bold-letter-spacing)] leading-[var(--header-h1-large-40px-bold-line-height)] [font-style:var(--header-h1-large-40px-bold-font-style)]">
          Our Success Story
        </h1>

        <p className="relative self-stretch font-body-24px-regular font-[number:var(--body-24px-regular-font-weight)] text-[#000d35b2] text-[length:var(--body-24px-regular-font-size)] tracking-[var(--body-24px-regular-letter-spacing)] leading-[var(--body-24px-regular-line-height)] [font-style:var(--body-24px-regular-font-style)]">
          Explore our showcase of featured works
        </p>
      </header>

      <div className="flex w-full items-start gap-12 relative flex-[0_0_auto]">
        <div className="items-start gap-6 flex-1 self-stretch grow flex flex-col relative">
          <div className="flex flex-col items-start gap-4 relative flex-1 self-stretch w-full grow rounded-[10px]">
            <h2 className="relative w-fit mt-[-1.00px] font-header-h3-large-24px-bold font-[number:var(--header-h3-large-24px-bold-font-weight)] text-[#2d2d2d] text-[length:var(--header-h3-large-24px-bold-font-size)] tracking-[var(--header-h3-large-24px-bold-letter-spacing)] leading-[var(--header-h3-large-24px-bold-line-height)] whitespace-nowrap [font-style:var(--header-h3-large-24px-bold-font-style)]">
              Product ONE
            </h2>

            <p className="mb-[-17.00px] relative self-stretch font-body-20px-regular font-[number:var(--body-20px-regular-font-weight)] text-neutral-1 text-[length:var(--body-20px-regular-font-size)] tracking-[var(--body-20px-regular-letter-spacing)] leading-[var(--body-20px-regular-line-height)] [font-style:var(--body-20px-regular-font-style)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="flex w-[432px] items-start gap-3 pt-6 pb-0 px-0 relative flex-[0_0_auto]">
            <Button  className="h-[60px] gap-2 px-10 py-0  rounded-[100px]    ">
              <span className="text-[16px] font-[600] flex">
              Visit
                          
                          <ArrowRightIcon className="w-6 h-6" />
                          </span>
            </Button>
          </div>
        </div>

        <Card className="w-[600px] h-[442px] bg-[#cfffe9] rounded overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center gap-9 p-3 h-full overflow-y-scroll">
            <img
              className="relative self-stretch w-full h-[517.4px]"
              alt="Frame"
              src="/frame-1171277438.svg"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3 relative self-stretch w-full flex-[0_0_auto] items-center justify-center">
        <Button variant="accent" className="h-[60px] px-10 py-0  rounded-[100px] ">
          Load More
        </Button>
      </div>
    </section>
  );
};
