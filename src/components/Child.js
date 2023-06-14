import React from 'react'

function Child({cartItems,handleDelete}) {
  return (
    <div className='child'>
      <h1>Child Component</h1>
      
        <ul>
            {
        cartItems.map((item)=>
            (
                
                    <li key='item.id'>
                       {item.Name}-${item.Price}
                    <button onClick={()=>handleDelete(item.id)}>Remove</button>
                    </li>
            )
        )
    }
        </ul>
      
    </div>
  )
}

export default Child
