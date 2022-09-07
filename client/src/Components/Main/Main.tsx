import axios from "axios";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { fetchUser } from "../../Store/reducers/AsyncActionCreaters";
// import { userSlice } from "../../Store/reducers/UserSlice";
import { QuestionType } from "../../Types/question";
import Question from "../Elements/Question/Question";
import "./main.scss";

const Main = () => {
  const [message, setMessage] = useState("");
  const [newRandom, setNewRandom] = useState(1);
  const [randQuestions, setRandQuestions] = useState<QuestionType[]>([]);

  useEffect(() => {
    axios.get("/tournaments/random/3").then((res) => {
      setRandQuestions(res.data);
    });
  }, [newRandom]);

  // const { setCurrentUser } = userSlice.actions;
  const dispatch = useAppDispatch();
  const { currentUser, isLoading } = useAppSelector(
    (state) => state.userReducer
  );
  const onClick = () => {
    dispatch(fetchUser({ id: "d00ea5b3-3df2-4b01-a345-46edb9433fbe" }));
  };
  console.log("currentUser", currentUser);
  console.log("error");

  return (
    <main>
      {/* Тестовая кнопка. Убрать! */}
      <button type="button" onClick={onClick}>
        button
      </button>
      {/* СДЕЛАТЬ КРУТИЛКУ? */}
      {isLoading && <h2>идёт загрузка...</h2>}
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
          <h2>Случайные вопросы</h2>
          <button type="button" onClick={() => setNewRandom((p) => ++p)}>
            button
          </button>
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
