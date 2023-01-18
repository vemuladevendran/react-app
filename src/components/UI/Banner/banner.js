import Card from "../Card/card";
import { data } from "../../../Data/data";
import { useCallback, useState } from "react";
function Banner(params) {
  const [quesionData, setQuesionData] = useState(data);
  const [selectedQuestion, setSelectedquestion] = useState([]);
  const [showResults, setShowresults] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizCard, setQuizCard] = useState(false)
  const [correctAnswersCount,setCorrectanswersCount]=useState([])
  const handleCheckResults = (results) => {
    const data = selectedQuestion.sort((a, b) => a.questionId - b.questionId);
    const score = quesionData.filter((answer, i) => answer.answer === data[i].item);
    setCorrectanswersCount(score)
    setShowresults(true);
    setStartQuiz(false)
    setQuizCard(false)
  };
  const handleDataFromChild = useCallback(
    (questionId, item) => {
      setSelectedquestion([...selectedQuestion, { questionId, item }]);
    },
    [selectedQuestion]
  );

  const showQuizCardDetails = () => {
    setStartQuiz(true)
    setQuizCard(true)
    setShowresults(false);
    setSelectedquestion([]);
  }
  return (
    <div className="container">
      <div className="row justify-content-center p-3">
        <div className="col-12 text-center fw-bold fs-3">Quizz App</div>
        {showResults ? (
            <div className="py-3 fw-bold my-5 text-center" style={{backgroundColor: '#ff8e71'}}>
                You have answered  {correctAnswersCount.length || '0'}/{quesionData.length} Correctly
            </div>
          ) : null}
        {!startQuiz ? (
          <div className="col-5 mt-3">
            <button
              onClick={() =>showQuizCardDetails() }
              className="p-3 w-100  text-center border-0"
              style={{ backgroundColor: "#feb993" }}
            >
              Start Quiz
            </button>
          </div>
        ) : null}
        <div>
          {quizCard ? (
            <div className="col-12 mt-4">
              <div className="row">
                {quesionData.map((x, i) => {
                  const selectedAnswer = selectedQuestion.filter(
                    (selectedAnswer) =>
                      selectedAnswer.questionId === x.questionId
                  );
                  return (
                    <div className="col-6 my-2">
                      <Card
                        key={i}
                        selectedQuestion={
                          selectedAnswer?.length > 0 ? selectedAnswer[0] : null
                        }
                        handleDataFromChild={handleDataFromChild}
                        data={x}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
          {selectedQuestion.length === 5 && quizCard ? (
            <div className="text-center">
              <button
                onClick={() => handleCheckResults(selectedQuestion)}
                className="border-0 px-2 py-1 bg-success text-white fw-bold"
              >
                Show result
              </button>
            </div>
          ) : null}
          
        </div>
      </div>
    </div>
  );
}

export default Banner;
