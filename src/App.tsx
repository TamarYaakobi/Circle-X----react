import React, { useState } from 'react'
import './App.scss'
import Game from './components/game/game'
import KeyBoard from './components/keyBoard/keyBoard'



function App() {
  const [isKeyBoard, setIsKeyBoard] = useState(true);

  const ChangState = () => {
    setIsKeyBoard(!isKeyBoard)
  }

  return (
    <>
      {(isKeyBoard) ?
        <>
          <button onClick={ChangState}>התחל משחק</button>
          <KeyBoard></KeyBoard>
        </> :
        <Game finishGame={ChangState}></Game>
      }




    </>
  )
}

export default App
