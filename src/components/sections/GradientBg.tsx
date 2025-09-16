import React from 'react'
type Props = {
    className?: string;
    children?: React.ReactNode;
} 
const GradientBg = ({className,children}:Props) => {
  return (

<section className={`w-full py-[103px] [background:radial-gradient(50%_50%_at_52%_50%,rgba(0,34,135,1)_0%,rgba(0,13,53,1)_100%)] `}>

{children}
        </section>
)
}

export default GradientBg