import React from "react"

function Numbers({ value, amount }){
  const [counter, setCounter] = React.useState(value) 
  return (
    <>
      <h1>Current number: { counter }</h1>
      <h1>Current number squared: { counter * counter }</h1>
      <button onClick={() => setCounter(counter + amount)}>Add {amount}</button>
      <button onClick={() => setCounter(counter - amount)}>Deduct {amount}</button>
      <button onClick={() => setCounter(counter * amount)}>Multiply {amount}</button>
      <button onClick={() => setCounter(counter / amount)}>Divide {amount}</button>
    </>
  )
}

export default Numbers