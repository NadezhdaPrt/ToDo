import React from 'react';
import Header from './components/header/header';
import './App.css';
import ToDoList from './components/toDoList/toDoList';
import Input from './components/input/input';
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <Input/>
        <Button/>    
      </div>
    <ToDoList/>
    </div>
  );
}

export default App;
