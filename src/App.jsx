import { useState,useContext} from 'react'
import './App.css'
import Mainmenu from './Components/Mainmenu'
import Quiz from './Components/Quiz'
import Endscreen from './Components/Endscreen'
import {QuizContext} from './Helpers/Contexts'

function App() {
  const [gameState,setGameState] = useState("menu");
  const [score,setScore] = useState(0)

  return (
    <div className='App'>
    <h1>Quiz App</h1>
    <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
    {gameState == "menu" && <Mainmenu/>}
    {gameState == "quiz" && <Quiz/>}
    {gameState == "end" && <Endscreen/>}
    </QuizContext.Provider>
    </div>
  )
}

export default App
