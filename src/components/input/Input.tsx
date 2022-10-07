import React, {ChangeEventHandler} from "react";

interface IInputProps {
    value: string;
    className?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: string
    placeholder: string
}

const Input = ({value, className, onChange, type, placeholder}: IInputProps) => {
    return (
        <input value={value}
               className={className}
               onChange={onChange}
               type={type}
               placeholder={placeholder}
        />
    );
};

export default Input;