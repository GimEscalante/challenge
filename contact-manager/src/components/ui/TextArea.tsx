//COMPONENTE TEXTAREA
import type { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}
