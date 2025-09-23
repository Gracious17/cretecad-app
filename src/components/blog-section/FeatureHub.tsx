import React from "react";
import { Button } from "../ui/Button";
import { Card, CardContent } from "../ui/card";

export const ResourcesOverviewSection = ()=> {
  const insightsData = [
    {
      image: "/966d161c6c6b33732e610738d5cf452a-1-1.png",
      category: "CRETECAD  Whitepaper",
      title: "AI in Africa's Business Evolution",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[352px] h-[255px]",
    },
    {
      image: "/de5eaf740b8b64661130b9352c9f7fef-1-1.png",
      category: "BLUMBERG",
      title: "How CRETESPACE is Redefining the Business Centre",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[401px] h-[225px]",
    },
    {
      image: "/9697b1b6ff9906fb77686bc60830b814-1.png",
      category: "CRETECAD  Whitepaper",
      title: "The Future of Digital Learning: Inside CRETECADEMY",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[369px] h-[277px]",
    },
    {
      image:
        "/68bc8f518c9ccd031b4bbf0d-ad73829e-cd7c-4f6d-b8e3-3e9e9e7056e2-1.png",
      category: "CRETECAD  Whitepaper",
      title: "How CRETESPACE is Redefining the Business Centre",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[352px] h-[467px]",
    },
    {
      image: "/966d161c6c6b33732e610738d5cf452a-1-1.png",
      category: "CRETECAD  Whitepaper",
      title: "AI in Africa's Business Evolution",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[352px] h-[255px]",
    },
    {
      image: "/de5eaf740b8b64661130b9352c9f7fef-1-1.png",
      category: "BLUMBERG",
      title: "How CRETESPACE is Redefining the Business Centre",
      description:
        "AI is reshaping Africa's business landscape, driving smarter decisions and unlocking new opportunities across industries. From financial services to agriculture, it accelerates growth, efficiency, and innovation. As adoption deepens, AI stands as a catalyst for inclusive progress and sustainable economic evolution on the continent.",
      imageClasses: "w-[401px] h-[225px]",
    },
  ];

  return (
    <section className="w-full py-[60px] bg-defaultwhite">
      <div className="max-w-[1440px] mx-auto px-20">
        <header className="mb-[42px]">
          <h2 className="font-header-h2-large-32px-bold font-[number:var(--header-h2-large-32px-bold-font-weight)] text-primarydarkblue text-[length:var(--header-h2-large-32px-bold-font-size)] leading-[var(--header-h2-large-32px-bold-line-height)] tracking-[var(--header-h2-large-32px-bold-letter-spacing)] [font-style:var(--header-h2-large-32px-bold-font-style)]">
            Featured Insights
          </h2>
        </header>

        <div className="grid grid-cols-3 gap-12">
          {insightsData.map((insight, index) => (
            <Card
              key={index}
              className="flex flex-col rounded-lg overflow-hidden border-0 shadow-none bg-transparent"
            >
              <div className="relative w-full h-56 rounded-lg overflow-hidden">
                <img
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover ${insight.imageClasses}`}
                  alt="Insight image"
                  src={insight.image}
                />
              </div>

              <CardContent className="flex flex-col w-full max-h-[185px] h-[185px] gap-1 p-0 py-1">
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="w-full font-caption-12px-regular font-[number:var(--caption-12px-regular-font-weight)] text-primaryblue text-[length:var(--caption-12px-regular-font-size)] tracking-[var(--caption-12px-regular-letter-spacing)] leading-[var(--caption-12px-regular-line-height)] [font-style:var(--caption-12px-regular-font-style)]">
                    {insight.category}
                  </div>

                  <h3 className="w-full font-header-h3-small-20px-semibold font-[number:var(--header-h3-small-20px-semibold-font-weight)] text-primarydarkblue text-[length:var(--header-h3-small-20px-semibold-font-size)] tracking-[var(--header-h3-small-20px-semibold-letter-spacing)] leading-[var(--header-h3-small-20px-semibold-line-height)] [font-style:var(--header-h3-small-20px-semibold-font-style)]">
                    {insight.title}
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-2.5 relative flex-1 w-full grow overflow-hidden">
                  <p className="w-full font-body-16px-regular font-[number:var(--body-16px-regular-font-weight)] text-neutral-1 text-[length:var(--body-16px-regular-font-size)] tracking-[var(--body-16px-regular-letter-spacing)] leading-[var(--body-16px-regular-line-height)] [font-style:var(--body-16px-regular-font-style)]">
                    {insight.description}
                  </p>

                  <div className="absolute left-0 bottom-0 w-[332px] h-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]" />
                </div>

                <div className="flex items-center justify-end gap-2.5 px-4 py-0 w-full">
                  <Button
                    // variants="link"
                    className="h-auto p-0 [font-family:'Segoe_UI-Regular',Helvetica] font-normal text-neutral-1 text-[13px] tracking-[0] leading-[13px]"
                  >
                    <span className="text-[#7d8490] leading-[19.5px] underline">
                      Read more
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
