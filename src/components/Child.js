import React from 'react'

function Child({cartItems,handleDelete}) {
  return (
    <div className='child'>
      <h1>Child Component</h1>
      
        <ul>
            {
        cartItems.map((item)=>
            (<div key='item.id'>
                
                    <li>
                       <span>{item.Name}-${item.Price}</span> 
                    <button onClick={()=>handleDelete(item.id)}>Remove</button>
                    </li>
            </div>)
        )
    }
        </ul>
      
    </div>
  )
}

export default Child
