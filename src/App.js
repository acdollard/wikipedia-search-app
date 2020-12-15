import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from  './components/Route';
import Header from './components/Header';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why React?',
        content: 'React is da bomb and da best'
    }, 
    {
        title: 'How React?',
        content: 'Wit dem components!'
    }
    
]

const options = [
    {
        label: "Rosey Red",
        value: "red",
        background: "#db7888"
    },
    {
        label: "Nature's Calming Green",
        value: "green",
        background: "#3f946b"
    },
    {
        label: "Fine Periwinkle-Blue",
        value: "blue",
        background: "#8480ec"
    },
];



export default () => {

    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route >
            <Route path="/list">
                <Search />
            </Route >
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options={options}
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route >
            <Route path="/translate">
                <Translate />
            </Route >

        </div> 
    );
}