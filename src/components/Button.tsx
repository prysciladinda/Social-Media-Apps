import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="btn w-48 normal-case bg-hijaubotton border-white tracking-wider "
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
