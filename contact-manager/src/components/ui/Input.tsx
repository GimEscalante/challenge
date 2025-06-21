//COMPONENTE INPUT
import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref} 
        {...props}
        className={`border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      />
    );
  }
);

export default Input;
