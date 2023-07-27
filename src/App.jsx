import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from '../src/components/ItemCount/ItemCount';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ItemListContainer />}></Route>
      <Route path='/category/:categoryId' element={<ItemListContainer />}></Route>
      <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
      <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
    
  );
}

export default App;
