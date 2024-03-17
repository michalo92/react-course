import Options from "./Options";
import ".././index.css";
function Question({ question, dispatch, answer, index, numQuestions }) {
  // console.log("question", question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
