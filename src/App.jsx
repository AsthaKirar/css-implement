import React from 'react'
import  Header from './componets/Header'

const App = () => {
  const css = {
    fontSize:"10",
    color:"red",
    
  }
  return (
    <>
    <h1 style={{fontSize:"100px"}}>heloo</h1>
    <h2 style={css}>world</h2>
    <p className='para'>Lorem ipsum dolor sit.</p>
    <Header/>
    </>
  )
}

export default App