import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

function Input({ id, ...props }: Props) {
  return (
    <input
      id={id}
      type="text"
      placeholder="Type here"
      className="input input-ghost w-full max-w-xs"
      {...props}
    />
  );
}

export default Input;
