import React, { useState } from 'react'

const Favorites = () => {
  const [favorites, setFavorites]= useState([])

  const addFavorite = (item)=> {
    setFavorites([...favorites, item])
  }

  const removeFavorite = (item)=> {
    setFavorites(favorites.filter((i)=> i !== item ))
  }
  return (
    <div>
      <ul>
        {favorites.map((item)=>{
          <li key={item}>
           {item}
           <button onClick={()=> removeFavorite(item)}>Удалить</button>
          </li>
        })}
        </ul>
        <button onClick={()=> addFavorite('Добавить новый элемен')}>Добавить</button>
    </div>
  )
}

export default Favorites