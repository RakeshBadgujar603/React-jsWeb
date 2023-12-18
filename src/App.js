import React from 'react'
import UserlistingDummy from './UserlistingDummy'

function App() {

  const onClickSubmit=()=>{
  alert("hello i am success")
  }

  return (
    <div style={{alignSelf:"center"}}>
      <h1>hello</h1>
      <h2>hello</h2>
      <h3>hello</h3>
      <UserlistingDummy/>

      <button onClick={onClickSubmit}>hello</button>
    </div>
  )
}

export default App