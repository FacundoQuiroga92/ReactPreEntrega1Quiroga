import React from 'react'

const ItemListContainer = ( {greeting} ) => {
    const textoContenedor = 'Tienda en progreso, aún faltan funcionalidades!'
  return (
    <div>
        <h1> {greeting} </h1>
        <h3> {textoContenedor} </h3>
    </div>
  )
}

export default ItemListContainer