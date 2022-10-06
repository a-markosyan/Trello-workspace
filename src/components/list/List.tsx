import React from 'react';
import css from "./style.module.css"
import {AiOutlineEllipsis} from "react-icons/ai";
import AddListButton from "../addListButton/AddListButton";
import {CgTemplate} from "react-icons/cg";
import {IList} from "../../models";

interface ListProps {
    list: IList
}

const List = ({list}: ListProps) => {

    return (
        <div>
            <ul className={css.ul}>
                <li key={list.id} className={css.li}>
                    <div className={css.titleContainer}>
                        <h2 className={css.title}>{list.title}</h2>
                        <div className={css.icon}><AiOutlineEllipsis/></div>
                    </div>
                    <div className={css.add}>
                        <AddListButton value="Add a card"
                                       className={css.addListButton}
                        />
                        <div className={css.icon}><CgTemplate/></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default List;