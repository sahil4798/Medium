import { ChangeEvent } from "react";

export function LabelledInput({
  label,
  type,
  placeholder,
  onChange,
}: labelledInputType) {
  return (
    <div className="mt-2">
      <label className="block mb-2 text-sm  text-gray-900 dark:text-white font-semi bold">
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        type={type || "text"}
        onChange={onChange}
      />
    </div>
  );
}

interface labelledInputType {
  label: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
