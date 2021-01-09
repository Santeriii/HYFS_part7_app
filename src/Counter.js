import React from 'react'
import useCounter from './Hooks/useCounter'

const Counter = () => {
    const counter = useCounter()

    return (
        <div>
            <div>{counter.value}</div>
            <button onClick={counter.increase}>
                plus
            </button>
            <button onClick={counter.decrease}>
                minus
            </button>
            <button onClick={counter.reset}>
                reset
            </button>
        </div>
    )
}

export default Counter