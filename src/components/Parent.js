import React,{useState} from 'react'
import Child from './Child'

function Parent() {
    const [cartItems,setCartItems]=useState([{ id: 1, Name: 'Item 1', Price: 10 },
    { id: 2, Name: 'Item 2', Price: 20 },
    { id: 3, Name: 'Item 3', Price: 30 },
    { id: 4, Name: 'Item 4', Price: 40 }
])
    const [itemName,setItemName]=useState('')
    const [itemPrice,setItemPrice]=useState('')

    function handleSubmit(event){
        event.preventDefault();

        if (!itemName || !itemPrice) {
            return; // Prevent adding empty items
          }
          
        const items={
            id: cartItems.length,
            Name:itemName,
            Price:itemPrice,
        };

        setCartItems([...cartItems,items]);

        //setting itemName and itemPrice to empty
        setItemName('');
        setItemPrice('');
    };

    //for Deleting
    const handleDelete=(itemsId)=>{
        setCartItems((prevCartItems)=>
        prevCartItems.filter((item)=>itemsId!==item.id)
        )
    };

  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Item Name">Item Name:</label>
        <input id='itemName' type="text" value={itemName} onChange={(e)=>setItemName(e.target.value)}/>
        <label htmlFor="Item Price">Item Price:</label>
        <input id='itemPrice' type="number" value={itemPrice} onChange={(e)=>setItemPrice(e.target.value)} />
        <button type='Submit'>Add Item</button>
      </form>
      <Child cartItems={cartItems} handleDelete={handleDelete}/>
    </div>
  )
}

export default Parent
