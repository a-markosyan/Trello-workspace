import React from 'react';
import css from "./style.module.css"
import {AiOutlineEllipsis} from "react-icons/ai";
import {FormType, ICard, IList} from "../../models";
import AddElementForm from "../addElementForm/AddElementForm";
import Card from "../card/Card";

interface ListProps {
    list: IList
    cards: ICard[]
    addCard: (el: ICard) => void
}

const  List = ({list, addCard, cards}: ListProps) => {
    console.log(cards)
    return (
        <div className={css.container}>
            <ul className={css.ul}>
                <li key={list.id} className={css.li}>
                    <div className={css.titleContainer}>
                        <h2 className={css.title}>{list.title}</h2>
                        <div className={css.icon}><AiOutlineEllipsis/></div>
                    </div>
                    {cards.map(card => <Card key={Math.random()} card={card}/>)}
                    <div className={css.add}>
                        <AddElementForm<ICard>
                            formType={FormType.CARD}
                            value="Add a card..."
                            className={css.addCardButton}
                            addElement={addCard}
                        />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default List;