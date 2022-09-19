import axios from "axios";
import { useEffect, useState } from "react";
import { QuestionType } from "../../Types/question";
import Question from "../Elements/Question/Question";
import "./main.scss";
import refreshIcon from "./refresh.svg";

// const getRandonQuestions = async () => {
//   const res = await axios
//     .get<QuestionType[]>("/tournaments/random/3")
//     .then((res) => res.data);
//   console.log("res1", res);
//   return res;
// };

const Main = () => {
  const [message, setMessage] = useState("");
  const [newRandom, setNewRandom] = useState(0);
  const [randQuestions, setRandQuestions] = useState<QuestionType[]>([]);
  const [randTournaments, setRandTournaments] = useState<string[]>([]);

  console.log("randTournaments", randTournaments);

  useEffect(() => {
    // const res = getRandonQuestions().then((res) => setRandQuestions(res));
    // console.log("res", res);
    axios.get("/tournaments/random/3").then((res) => {
      setRandQuestions(() => res.data);
    });
    // setRandQuestions(res);
  }, [newRandom]);

  return (
    <main>
      {/* СДЕЛАТЬ КРУТИЛКУ? */}
      <div className="search">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            console.log(message);
          }}
        >
          <input
            className="search__input"
            type="text"
            placeholder="название турнира"
            onChange={(e) => setMessage(e.target.value)}
          />
          {/* СТИЛИ ДЛЯ ДАТ */}
          <input
            type="date"
            className="search__start-date"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          />
          <input
            type="date"
            className="search__end-date"
            onMouseDown={(e) => {
              e.preventDefault();
            }}
          />
          <button className="search__button" type="submit">
            Найти
          </button>
        </form>
      </div>
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
          <h2>Название турнира</h2>
        </div>
      </div>
    </main>
  );
};

export default Main;
