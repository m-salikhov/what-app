import { FC, useState } from "react";
import { QuestionType } from "../../../Types/question";
import Add from "./Add";
import Answer from "./Answer";
import ansArrow from "./arrow_down.svg";

import "./question.scss";

const Question: FC<{ q: QuestionType; random?: boolean }> = ({ q, random }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question">
      <div className="question__header">
        <h2>Вопрос {q.qNumber}</h2>
        {random && <h3>из {q.tournament?.title}</h3>}
      </div>
      {q.add && <Add add={q.add} />}
      <div className="question__text">
        <p>{q.text}</p>
      </div>

      <div className="ans__arrow" onClick={() => setShowAnswer(!showAnswer)}>
        <h4>Oтвет</h4>
      </div>

      {/* TODO сделать анимацию появления ответа */}
      {/* {showAnswer && <Answer q={q} />} */}
      <div className={showAnswer ? "ans open" : "ans close"}>
        <Answer q={q} />
      </div>
    </div>
  );
};

export default Question;
