import React, {useState} from 'react';
import Form from "../form/Form";
import AddButton from "../addButton/AddButton";
import {FormType} from "../../models";

interface AddElementFormProps<T> {
    addElement: (el: T) => void
    value: string
    className: string
    formType: FormType
}

const AddElementForm = <T extends unknown>({addElement, value, className, formType} : AddElementFormProps<T>): JSX.Element => {
    const [show, setShow] = useState(false)

    return (
        show ?
            <Form<T> formType={formType} setShow={setShow} addElement={addElement}/>
            :
            <AddButton value={value} className={className} onClick={() => setShow(true)}/>
    );
};

export default AddElementForm;