import React, { useState } from "react";
import { modelData } from "../../assets/data";

const Quiz = () => {
  // console.log(modelData)

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(modelData[index]);
  let [selected, setSelected] = useState(true);
  let [ score, setScore ] = useState(0)
  let [ result, setResult ] = useState(false)

  const checkAnswer = (e, ans) => {
    if (selected === true) {
      if (question.answer === ans) {
        e.target.classList.add("correct");
        setSelected(false)
        setScore(prev => prev + 1)
        // alert("Correct")
      } else {
        e.target.classList.add("incorrect");
        setSelected(false)
        let correctAns = document.getElementById(question.answer);
        correctAns.classList.add("correct");
        // alert("Incorrect")
      }
    }
  };

  const changeQuestion = () => {
    if(selected === false){
        if (index === modelData.length - 1) {
            setResult(true)
            return 0;
        }
        // Remove classes before moving to next question
        document.querySelectorAll('li').forEach(li => {
          li.classList.remove('correct', 'incorrect');
        });
        
        setIndex(index + 1);
        setQuestion(modelData[index + 1]);
        setSelected(true)
    }
  };

  const resetGame = () => {
    setIndex(0)
    setQuestion(modelData[0])
    setSelected(true)
    setScore(0)
    setResult(false)
  }

  return (
    <div className="w-[640px] m-auto mt-[70px] bg-white text-black flex flex-col gap-5 p-6 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Quiz App</h1>
      <hr className="border-t-2 border-gray-200"/>
      {
        result ? 
        <>
        <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">You Scored <span className="text-5xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{score}</span> out of {modelData.length}</h2>
            <button onClick={resetGame} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">Play Again</button>
        </div>
        </>
        :
        <>
        <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed">
        {index + 1}. {question.question}
      </h2>
      <ul className="flex flex-col gap-4">
        <li id="1" onClick={(e) => checkAnswer(e, 1)} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 font-medium text-gray-700">{question.option1}</li>
        <li id="2" onClick={(e) => checkAnswer(e, 2)} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 font-medium text-gray-700">{question.option2}</li>
        <li id="3" onClick={(e) => checkAnswer(e, 3)} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 font-medium text-gray-700">{question.option3}</li>
        <li id="4" onClick={(e) => checkAnswer(e, 4)} className="p-4 bg-gray-50 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50 transition-all duration-200 font-medium text-gray-700">{question.option4}</li>
      </ul>
      <button className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 font-semibold text-lg
  ${selected ? "pointer-events-none opacity-60 bg-gray-100 border-gray-300 text-gray-500" : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-transparent hover:shadow-xl transform hover:scale-105"}
`}
 onClick={changeQuestion}>Next</button>
      <div className="text-center text-gray-600 font-medium text-lg">
        {index + 1} of {modelData.length} Questions
      </div>
        </>
      }
      
      <style jsx>{`
        .correct {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important;
          color: white !important;
          border-color: #059669 !important;
        }
        .incorrect {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%) !important;
          color: white !important;
          border-color: #dc2626 !important;
        }
      `}</style>
      
    </div>
  );
};

export default Quiz;