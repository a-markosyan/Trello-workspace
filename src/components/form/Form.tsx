import React, {useState, Dispatch, SetStateAction, useCallback} from 'react';
import Input from "../input/Input";
import Button from "../button/Button";
import {AiOutlineClose} from "react-icons/ai";
import css from "./style.module.css"
import {FormType} from "../../models";

interface IProps<T> {
    setShow: Dispatch<SetStateAction<boolean>>
    addElement: (e: T) => void
    formType: FormType
}

const Form = <T extends unknown>({setShow, addElement, formType}: IProps<T>) => {
    const [value, setValue] = useState("");

    const onClose = useCallback(() => {
        setShow(false);
    }, [setShow]);

    const addElementHandler = useCallback((value: string) => {
        value.trim() && addElement({id: Math.random(), title: value} as T)
        setValue("")
    }, [addElement, setValue])

    return (
        <div className={formType === FormType.LIST ? css.container1 : css.container2}>
            <Input
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)
            }
                type="text"
                placeholder={formType === FormType.LIST ? "Enter list title..." : "Enter card title..."}
                className={formType === FormType.LIST ? css.listInput : css.cardInput}
            />
            <div className={css.add}>
                <Button
                    value={formType === FormType.LIST ? "Add list" : "Add card"}
                    onClick={() => {
                        addElementHandler(value)
                        onClose()
                    }}
                />
                <AiOutlineClose
                    style={{fontSize: "25px", color: "#9BA4B3", cursor: "pointer"}}
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default Form;
