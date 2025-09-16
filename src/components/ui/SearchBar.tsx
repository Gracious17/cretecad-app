import React from 'react'
type Props = {
   placeholder?: string;
  onchange?: () => void;
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "rounded";
};
const SearchBar = ({placeholder,onchange,children,className,variant = "default"}:Props) => {
    const variantClasses = {
    default: "",
    outlined: "border border-gray-300",
    rounded: "rounded-full shadow-md",
  };
  return (
<div className={`search-input flex items-center justify-between p-4 max-w-lg ${variantClasses[variant]} ${className ??""}`}>
              <input
                type="text"
                placeholder={placeholder}
                onChange={onchange}
                className="flex-1 bg-transparent border-none outline-none body-text text-(--text-primary) placeholder:text-(--text-primary) placeholder:opacity-20"
              />
              <div className="flex items-center justify-center">
                {/* <SearchButtonIcon width={20} height={20} color="#ffffff" /> */}
                {children}
              </div>
            </div>  )
}

export default SearchBar
