import React, {useState} from 'react';
import './App.css';
import AddListButton from "./components/addListButton/AddListButton";
import AddListForm from "./components/addListForm/AddListForm";
import List from "./components/list/List";
import {IList} from "./models";

function App() {

    const [show, setShow] = useState(false)
    const [lists, setLists] = useState<IList[]>([
        {
            id: 1,
            title: "To Do",
            order: 1,
            // "card": {"list_id": 1, "title": "Js", "order":1}
        }
    ])
    console.log(lists)



    return (
        <div className="App">
            {lists.map(list => <List list={list} key={list.id}/>)}
            <>
                {
                    !show ?
                        <AddListButton value="Add another list" className="btn" onClick={() => setShow(true)}/>
                        :
                        <AddListForm setShow={setShow} lists={lists} setLists={setLists}/>
                }
            </>
        </div>
    );
}

export default App;
