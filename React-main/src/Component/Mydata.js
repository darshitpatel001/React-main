import React from 'react'
import reviews from './Data'
import { useState } from 'react';

export default function Mydata() {
    const [Input, setInput] = useState();

    const Handler = (e) => {
        setInput(e.target.value)
    }


    return (
        <div>
            <input type="text" onChange={Handler} value={Input} />

            <button>Click</button>

            {reviews.map((value, index, array) => { 
                    return <h5>{value.name}</h5>
                })}
        </div>

    )
}

