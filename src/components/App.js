import React from 'react'

const App = ({ counter, add, increment, decrement }) => (
  <div>
    <h1>App</h1>
    <p>Counter: <strong>{counter}</strong></p>
    <p>
      <button onClick={() => add(5)}>Add 5</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </p>
  </div>
)

export default App
