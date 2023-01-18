import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  loading?: boolean;
}

const Button: FC<ButtonProps> = ({ id, loading, label, ...props }) => {
  return (
    <button
      id={id}
      className={`btn w-48 normal-case bg-hijaubotton border-white tracking-wider ${
        loading && "bg-[#00715C] cursor-not-allowed"
      }`}
      disabled={loading}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
