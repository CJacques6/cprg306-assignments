"use client";

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category , setCategory] = useState("produce");

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let item = {
            name,
            quantity,
            category
        }

        console.log({quantity} + ' '  + {name}+'s from the ' + {category} + 'added')
    }


    return(
        <dev>
            <h1>Item Name:</h1>
            <input name="item_name" value={name} type="text" onChange={setName} required/>
            <h1>Current Quantity: {quantity}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <select value={category} onChange={setCategory}>
                <option value="produce">produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            <button onClick={handleSubmit} className="text-green-700">Submit</button>
        </dev>
    )
}