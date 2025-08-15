import React,{useState} from 'react';
import './App.css';
// import Counter from './counter/Counter';
// import Item from './components/Item';
// import ItemDate from './components/ItemDate';
import Navbar from './Shopping/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Shopping/Home';
import Cart from './Shopping/Cart';
// function App(props) {
//   const [xyz,abc]=useState("nirma");
//   function handler(){
//     abc("pop");
//     console.log("clicked");
//   }

function App() {
  return (
    <div>
      {/* <Item name={xyz}></Item>
      <ItemDate day="20" month="july" year="1909"></ItemDate>
      <Item name="surfexcel"></Item>
      <ItemDate day="26" month="oct" year="1009"></ItemDate>
      <div className="App">Hello jee</div>
      <Item name="ghadi"></Item>
      <ItemDate day="10" month="Jan" year="2010"></ItemDate>
      <button onClick={handler}>Add cart</button> */}

      {/* <Counter/> */}

      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
  );

}

export default App;
