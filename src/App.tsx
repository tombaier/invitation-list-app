import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string,
  }[] 
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name:"Justin Timberlake",
      age: 40,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-Y5aVz9ylma2LPo9bCRT2x7KoyPUA2WEfrA-uX1XVpPuEHFV",
      note: "American singer-songwriter and actor",

    }
  ])

  return (
    <div className='App'>
      <h1>People Invited to the Meeting</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
