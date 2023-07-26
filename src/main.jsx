import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const products = [
  {
    id:'1',
    name:'Buzo Street',
    price:'4000',
    category:'buzos',
    img:'./assets/buzo3',
    stock:10,
    Description:'Detalle fabricacion',
  },
  { id: '2', name: 'Buzo Guerrero', price: 5000, category:'buzos', img:'./assets/buzo3'},
  { id: '3', name: 'Buzo Overzide', price: 3000, category:'buzos', img:'./assets/buzo3'}
]

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products)
    
    }, 500)
  })
}

export const getProductbyId = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product.find(prod => prod.id === producId))
    }, 500)

  })




}