import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

interface CustomInputProps {
  label?: string;
  type: "password" | "email" | "text";
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  label,
  type,
  placeholder,
  required,
  icon,
  value,
  onChange,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <div className="space-y- w-full">
      {label && (
        <label
          htmlFor={type}
          className="text-sm mb-4 font-medium text-[#F1F2F3]"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute text-gray-400 left-3 top-1/2 transform -translate-y-1/2 text-[20px]">
            {icon}
          </div>
        )}
        <input
          type={showPassword ? "text" : type}
          id={type}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          className={`bg-[#21252b80] 
            ${label && "mt-2"}
            ${
              (icon && type === "password" && "px-10") ||
              (icon && type !== "password" && "pl-10") ||
              (!icon && "px-3")
            } border border-[#2c313a]/50 focus:border-[#5593f7] rounded-md py-2 h-10 flex w-full placeholder:text-gray-500 outline-none text-[#F1F2F3] mt-2`}
        />
        {type === "password" && (
          <div
            onClick={handleShowPassword}
            className="absolute text-gray-400 right-3 top-1/2 transform -translate-y-1/2 text-[20px] cursor-pointer"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </div>
        )}
      </div>
    </div>
  );
}
