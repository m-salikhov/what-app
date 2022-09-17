import AddTournamentInfo from "./AddTournamentInfo";
import "./add.scss";
import { useState } from "react";
import AddQuestion from "./AddQuestion";
import { TournamentType } from "../../Types/tournament";
import { QuestionType } from "../../Types/question";
import { useAppSelector } from "../../Hooks/redux";
import { _axios } from "../../Helpers/_axios";

const AddTournament = () => {
  const [tournament, setTournament] = useState<TournamentType>({
    title: "",
    date: 0,
    tours: 0,
    questionsQuantity: 0,
    questions: [],
    editors: [],
    dateUpload: 0,
    uploaderUuid: "",
  });
  const [qCount, setqCount] = useState([1]);
  const { currentUser } = useAppSelector((state) => state.userReducer);

  const handleChange = (field: Partial<TournamentType>) => {
    setTournament((prev) => ({ ...prev, ...field }));
  };
  const handleChangeQuestion = (q: QuestionType) => {
    const i = tournament.questions.findIndex((v) => v.idQ === q.idQ);
    if (i === -1) {
      const questions = [...tournament.questions, q];
      setTournament((prev) => ({ ...prev, questions }));
    } else {
      const questions = tournament.questions;
      questions[i] = q;
      setTournament((prev) => ({ ...prev, questions }));
    }
  };
  const addTournament = async () => {
    const res = await _axios.post("/tournaments", {
      ...tournament,
      dateUpload: Date.now(),
      uploaderUuid: currentUser?.id,
    });
    console.log("res", res.data);
  };

  return (
    <div className="add__wrapper">
      <div className="add">
        <AddTournamentInfo handleChange={handleChange} />
        <div className="add-t__button">
          <button onClick={addTournament}>
            <h3>Отправить турнир</h3>
          </button>
        </div>
        <div className="add__questions">
          {qCount.map((v) => {
            return (
              <AddQuestion
                key={v}
                handleChangeQuestion={handleChangeQuestion}
                idQ={Math.random()}
              />
            );
          })}
        </div>
        <div className="add-q__button">
          {" "}
          <button onClick={() => setqCount((p) => [...p, p.length + 1])}>
            <h3>Следующий вопрос</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTournament;
