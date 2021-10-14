import React, { useState } from "react"

const Greeting = ({ name, age, gender }) => {
  const [counter, setCounter] = useState(0)
  const [info, setInfo] = useState("no info")
  const [loading, setLoading] = useState(false)

  return (
    <>
      <h1>Name: {name}</h1>
      <h1>Gender: {gender}</h1>
      <h1>Info: {info}</h1>
      <input 
        type="text" 
        onChange={event => setInfo(event.target.value)}
      /><br/>
      <button onClick={() => setLoading(!loading)}>Toggle Loading true/false</button>
      { loading ? 
          <>
          <div>loading true</div>
          <marquee  bgcolor="#ffff01" width="500" scrollamount="150" scrolldelay="500" loop="infinite" >⚔ Game Update ver. 6.17.0 RELEASED! ⚔</marquee>
          </>    
          : 
          <div>loading false</div> 
      }
    </>
  )
}

export default Greeting;