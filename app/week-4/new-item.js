"use client";

import { useState } from "react";

export default function NewItem(){

    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (count < 20) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (count > 1) {
            setQuantity(quantity - 1);
        }
    }

    return(
        <dev>
            <h1>Current Quantity: {quantity}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </dev>
    )
}