import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ children, className = "", ...props }, ref) => {
  const baseStyles =
    "text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center active:scale-95 transition-transform duration-100";

  return (
    <button ref={ref} className={`${baseStyles} ${className}`} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
