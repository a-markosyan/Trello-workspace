import React, {ChangeEventHandler} from "react";
import css from "./style.module.css"

interface IInputProps {
    value: string;
    className?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    type: string
    placeholder: string
}

const InputForList = ({value, className, onChange, type, placeholder}: IInputProps) => {
    return (
        <input value={value}
               className={css.input}
               onChange={onChange}
               type={type}
               placeholder={placeholder}
        />
    );
};

export default InputForList;