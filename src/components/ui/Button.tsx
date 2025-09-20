// import React from 'react';
// import { cn } from '@/lib/utils';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary' | 'accent' | 'ghost';
//   size?: 'sm' | 'md' | 'lg';
//   children: React.ReactNode;
// }

// export const Button: React.FC<ButtonProps> = ({
//   variant = 'primary',
//   size = 'md',
//   className,
//   children,
//   ...props
// }) => {
//   const baseClasses = 'inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';

//   const variantClasses = {
//     primary: 'bg-(--primary-blue) text-(--text-white) hover:bg-opacity-90',
//     secondary: 'bg-(--background-light) text-(--text-primary) hover:bg-opacity-80',
//     accent: 'bg-(--accent-yellow) text-(--text-primary) hover:bg-opacity-90',
//     ghost: 'text-(--text-primary) hover:bg-(--background-light)'
//   };

//   const sizeClasses = {
//     sm: 'h-8 px-4 text-sm',
//     md: 'h-12 px-6 text-base',
//     lg: 'h-16 px-8 text-lg'
//   };

//   return (
//     <button
//       className={cn(
//         baseClasses,
//         variantClasses[variant],
//         sizeClasses[size],
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  showArrow?: boolean;
  arrowPosition?: "left" | "right";
  disableHover?: boolean;
  onclick?:()=>void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow = false,
  arrowPosition = "right",
  disableHover = false,
  onclick,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 overflow-hidden group";

  const variantClasses = {
    primary: "bg-(--primary-blue) text-(--text-white) hover:opacity-60",
    secondary:
      "bg-(--background-light) text-(--text-primary) hover:bg-opacity-80",
    accent: "bg-(--accent-yellow) text-(--text-primary) hover:bg-opacity-60",
    ghost: "text-(--text-primary) hover:bg-(--background-light)",
  };

  const sizeClasses = {
    sm: "h-8 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "w-[270px] h-[60px] opacity-100 rounded-[100px] px-[40px] gap-2",
    // 'h-16 px-8 text-lg'
  };

  const ArrowIcon = ({ direction }: { direction: "left" | "right" }) => (
    <svg
      className={cn(
        "w-4 h-4 transition-all duration-300",
        direction === "right"
          ? "translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
      )}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={direction === "right" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
      />
    </svg>
  );

  return (
    <button
    onClick={onclick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {/* Bottom curved accent hover effect */}

      {!disableHover && (
        <div
          className={cn(
            "absolute -bottom-[65px] mt-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out",
            "w-0 h-0 group-hover:w-20 group-hover:h-20 rounded-full ",
            variant === "primary" && "bg-yellow-400",
            variant === "secondary" && "bg-blue-600",
            variant === "accent" && "bg-[#002287]",
            variant === "ghost" && "bg-blue-600"
          )}
        />
      )}

      {/* Content container */}
      <div className="relative flex items-center gap-2 transition-all duration-300">
        {showArrow && arrowPosition === "left" && (
          <ArrowIcon direction="left" />
        )}

        <span className="transition-all duration-300 group-hover:scale-105">
          {children}
        </span>

        {showArrow && arrowPosition === "right" && (
          <ArrowIcon direction="right" />
        )}
      </div>
    </button>
  );
};
