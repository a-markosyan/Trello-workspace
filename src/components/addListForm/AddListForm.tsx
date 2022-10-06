import React, {useState, Dispatch, SetStateAction, useCallback} from 'react';
import InputForList from "../inputForList/InputForList";
import AddButton from "../addButton/AddButton";
import {AiOutlineClose} from "react-icons/ai";
import css from "./style.module.css"
import {IList} from "../../models";

interface IProps {
    setShow: Dispatch<SetStateAction<boolean>>
    lists: IList[]
    setLists: Dispatch<SetStateAction<IList[]>>
}

const AddListForm = ({ setShow, lists, setLists }: IProps) => {
    const [value, setValue] = useState("");

    const onClose = useCallback(() => {
        setShow(false);
        // setValue("");
    }, [setShow]);

    const addList = () => {
        setLists(lists => [...lists,{ id: Math.random(), title: value} ])
        setValue("")
    }

    return (
        <div className={css.container}>
            <InputForList
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                type="text"
                placeholder="Enter list title..."
            />
            <div className={css.add}>
                <AddButton
                    value="Add list"
                    onClick={() => addList()}
                />
                <AiOutlineClose
                    style={{fontSize:"25px", color:"#9BA4B3", cursor:"pointer"}}
                    onClick={onClose}
                />
            </div>
        </div>
    );
};

export default AddListForm;
