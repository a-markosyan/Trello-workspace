import React, {useState} from 'react';
import './App.css';
import List from "./components/list/List";
import {FormType, ICard, IList} from "./models";
import AddElementForm from "./components/addElementForm/AddElementForm";

function App() {
    const [lists, setLists] = useState<IList[]>([
        {
            id: 1,
            title: "To Do",
            order: 1
        }
    ])

    const [cards, setCards] = useState<ICard[]>([
        {
            id: 0,
            list_id: 1,
            title: "kkk",
            order: 1
        },
        {
            id: 1,
            list_id: 1,
            title: "lll",
            order: 2
        },
    ])

    return (
        <div className="App">
            {lists.map(list => <List cards={cards.filter(card => card.list_id === list.id)}
                                     addCard={(card: Omit<ICard, "list_id">) => setCards([...cards, {
                                         ...card,
                                         list_id: list.id
                                     }])}
                                     list={list}
                                     key={list.id}
            />)}
            <AddElementForm<IList>
                formType={FormType.LIST}
                addElement={(el: IList) => setLists([...lists, el])}
                value="Add another list"
                className="btn"
            />
        </div>
    );
}

export default App;
