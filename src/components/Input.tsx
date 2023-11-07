import React, { ChangeEvent } from 'react';

interface InputProps {
    label: string;
    name: string;
    type: string;
    inputValue: string;
    onValueChange: (inputValue: string) => void;
}

const Input = ({ onValueChange, inputValue, label, name, type }: InputProps) => {

    const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        onValueChange(e.target.value);
    };

    return (
        <div className="flex flex-col items-start">
            <label htmlFor={name} className="block text-sm font-medium leading-6 text-white">
                {label}
            </label>
            <div className="mt-2 w-full">
                <input
                    id={name}
                    name={name}
                    type={type}
                    required
                    className="bg-transparent block w-full rounded-md border-0 p-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleValueChange}
                    value={inputValue}
                />
            </div>
        </div>
    )
}

export default Input