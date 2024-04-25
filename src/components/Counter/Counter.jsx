import React from 'react';
import '../Counter/Counter.scss'
import { useState } from 'react';

const Counter = () => {
    
    const [number, setNumber] = useState(0);
    
    const incr = () => setNumber(number + 1)
    const decr = () => number > 0 && setNumber(number - 1)

    return (
        <div className='counter'>
            <h1 className='number'>{number}</h1>
            <button onClick={incr}>Sumar</button>
            <button onClick={decr}>Restar</button>
        </div>
    );
}

export default Counter;
