import React from 'react';
import {ICard} from "../../models";
import css from "./style.module.css"
import {AiOutlineEdit} from "react-icons/ai";

interface CardProps {
    card: ICard
}

const Card = ({card} : CardProps) => {
    return (
        <div className={css.container}>
            <ul className={css.ul}>
                <li key={card.list_id} className={css.li}>
                    <div className={css.titleContainer}>
                        <p className={css.title}>{card.title}</p>
                        <div className={css.icon}><AiOutlineEdit/></div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Card;