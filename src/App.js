import './index.scss';
import { useState, useRef} from 'react';
const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
      
    ],
    correct: 2,
  },
];

function Result({correctAnswers, setStep}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correctAnswers.current} ответов из {questions.length}</h2>
      <button onClick={() => {
        setStep(0);
        correctAnswers.current = 0;
        }}>Попробовать снова</button>
    </div>
  );
}


function Game({question, correctAnswers, setStep, step}) {

  function checkAnswer(i_question, i_correct){
    if (i_question == i_correct){
      correctAnswers.current++;
    }
    setStep(c => c + 1);
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: `${(step + 1) * 100 / questions.length}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => 
          <li key = {index} onClick = {() => {checkAnswer(index, question.correct)}}>{variant}</li>
        )}
      </ul>
    </>
  );
}

function App() {

  const [step, setStep] = useState(0);
  const question = questions[step];
  const correctAnswers = useRef(0);

  return (
    <div className="App">
      { step <= questions.length -1 && <Game step = {step} setStep = {setStep}question={question} correctAnswers = {correctAnswers}/>}
      {step > questions.length - 1 && <Result correctAnswers = {correctAnswers} setStep = {setStep} />}
    </div>
  );
}

export default App;
