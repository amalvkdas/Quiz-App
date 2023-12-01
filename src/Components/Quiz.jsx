import React,{useState,useContext} from 'react';
import {QuizContext} from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';


const shuffle = (Array)=>{
  return Array.sort(()=>Math.random() - 0.5).slice(0,10)
};
const shuffledQuestions = shuffle(Questions);


function Quiz() {

const {score,setScore,gamestate,setGameState} = useContext(QuizContext);
const [currentQuestion,setCurrentQuestion] = useState(0);
const[optionChosen,setOptionChosen] = useState("")


const nextQuestion = ()=>{
  if(shuffledQuestions[currentQuestion].answer == optionChosen){
    setScore(score+1);
  }
  setCurrentQuestion(currentQuestion +1);
};

  return (
    <div className='Quiz'>
      <h1>{shuffledQuestions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={()=>{setOptionChosen("A")}}>{shuffledQuestions[currentQuestion].optionA}</button>
        <button onClick={()=>{setOptionChosen("B")}}>{shuffledQuestions[currentQuestion].optionB}</button>
        <button onClick={()=>{setOptionChosen("C")}}>{shuffledQuestions[currentQuestion].optionC}</button>
        <button onClick={()=>{setOptionChosen("D")}}>{shuffledQuestions[currentQuestion].optionD}</button>
      </div>

      {currentQuestion == shuffledQuestions.length-1 ? 
      <button onClick={()=>setGameState("end")}>Finish Test</button>
    :
    <button onClick={nextQuestion}>Next Question</button>
    }
      
    </div>
  )
}

export default Quiz