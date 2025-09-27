
import React from 'react'
import SectionHeader from './sections/SectionHeader';

const workflowSteps = [
  {
    number: "1",
    title: "Explore",
    description:
      "Browse prototypes to get a template that suits your business requirements or share your ideas with us.",
    bgColor: "bg-[#ffa1f20a]",
    borderColor: "border-[#ffa0f2]",
    textColor: "text-[#FFA1F2]",
  },
  {
    number: "2",
    title: "Engage",
    description:
      "Connect with our team for requirements or request a direct purchase via our website",
    bgColor: "bg-[#007aff0a]",
    borderColor: "border-[#007aff]",
    textColor: "text-[#007AFF]",
  },
  {
    number: "3",
    title: "Build",
    description:
      "Connect with our team for requirements or request a direct purchase via our website",
    bgColor: "bg-[#ffcc290a]",
    borderColor: "border-[#ffcc29]",
    textColor: "text-[#FFCC29]",
  },
  {
    number: "4",
    title: "Launch",
    description:
      "Deliver product + ongoing support.\nWe offer products post - launch support for a fixed time",
    bgColor: "bg-[#00946d0a]",
    borderColor: "border-[#00946d]",
    textColor: "text-[#00956D]",
  },
];
const HowItWorks = () => {
  return (
    <section className='py-20 items-center'>

 <SectionHeader lineColor='#FFCC29' className='pl-8 pb-20'
 text="How It Works"
 />
<div className="flex flex-wrap   justify-center gap-[100px_100px] p-2.5 w-full flex-[0_0_auto] pl-12 self-stretch">
          {workflowSteps.map((step, index) => (
            <div
            key={index}
            className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]"
            >
              <div className="absolute w-[200px] h-[200px] top-[-31px] left-[-50px]">
                <div
                  className={`relative w-[200px] h-[200px] left-[-15px] ${step.bgColor} rounded-[100px] border-[0.5px] border-solid ${step.borderColor}`}
                  >
                  <div
                    className={`opacity-40 ${step.textColor} absolute w-[100px] top-[58px] left-[49px] [font-family:'Familjen_Grotesk',Helvetica] font-normal text-[142.5px] text-center tracking-[0] leading-[121.1px] whitespace-nowrap`}
                    >
                    {step.number}
                  </div>
                </div>
              </div>

              <div className="inline-flex gap-[27px] items-center relative flex-[0_0_auto]">
                <h3 className="relative subsection-heading w-fit mt-[-1.00px]   text-primary-dark    whitespace-nowrap ">
                  {step.title}
                </h3>
              </div>

              <p className="relative w-[350px] h-[130px]   text-[#000d35b2]  whitespace-pre-line">
                {step.description}
              </p>
            </div>
          ))}
        </div>
          </section>
)
}

export default HowItWorks