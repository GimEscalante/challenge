//COMPONENTE BOTON
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`text-white px-4 py-2 rounded disabled:opacity-50 transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
