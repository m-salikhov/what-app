import axios from "axios";
import { useEffect, useState } from "react";
import { QuestionType } from "../../Types/question";
import Question from "../Elements/Question/Question";
import LastTournaments from "./LastTournaments";
import "./main.scss";
import refreshIcon from "./refresh.svg";

const Main = () => {
  const [message, setMessage] = useState("");
  const [newRandom, setNewRandom] = useState(0);
  const [randQuestions, setRandQuestions] = useState<QuestionType[]>([]);
  const [randTournaments, setRandTournaments] = useState<string[]>([]);

  console.log("randTournaments", randTournaments);

  useEffect(() => {
    axios.get("/tournaments/random/4").then((res) => {
      setRandQuestions(res.data);
    });
  }, [newRandom]);

  return (
    <main>
      <div className="main-content">
        <div className="main-content__random">
          <div className="main-content__refresh">
            {" "}
            <div className="refresh" onClick={() => setNewRandom((p) => ++p)}>
              {" "}
              <h2>Случайные вопросы</h2>
              <div>
                <img
                  className={
                    newRandom % 2 ? "refresh__arrow" : "refresh__arrow r"
                  }
                  src={refreshIcon}
                  alt="обновить случайные"
                />
              </div>
            </div>
          </div>
          {randQuestions.map((v) => (
            <Question q={v} random={true} key={v.id} />
          ))}
        </div>
        <div className="main-content__tournaments">
          <LastTournaments />
        </div>
      </div>
    </main>
  );
};

export default Main;
