import React from 'react'
import ItemListContainer from '../itemListContainer/ItemListContainer'
import CartWidget from './CartWidget/CartWidget'
import Navbar from './Navbar/Navbar'


const landing = () => {
  return ( 
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola bienvenidos Mundo Deportivo" />
    </div>
    
    
  )
}

export default landing