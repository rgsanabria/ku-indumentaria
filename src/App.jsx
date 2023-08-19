
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { CartProvider } from './components/context/CartContext';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Nuestro productos'} />}></Route>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos por categoria'} />}></Route>
          <Route path='/item/:itemId' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>


    </div>
    
  );
}

export default App;
