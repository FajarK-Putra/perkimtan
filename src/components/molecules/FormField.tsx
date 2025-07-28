import React from "react";
import Input from "../atoms/Input";

type FormFieldProps = {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormField({ label, type = "text", name, value, onChange }: FormFieldProps) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-[#003366]" htmlFor={name}>
        {label}
      </label>
      <Input id={name} name={name} type={type} value={value} onChange={onChange} />
    </div>
  );
}