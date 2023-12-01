import React,{useContext} from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';

function EndScreen() {
  
  const {score,setGameState} = useContext(QuizContext);

  return (
    <div className='EndScreen'>
      <h1>Score : {score} / 10</h1>
    </div>
  )
}

export default EndScreen