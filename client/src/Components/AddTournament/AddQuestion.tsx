import { ChangeEvent, FC, useEffect, useState } from "react";
import { QuestionType } from "../../Types/question";
import { TournamentType } from "../../Types/tournament";

interface AddQuestionProp {
  handleChangeQuestion: (q: QuestionType) => void;
  idQ: number;
}

const AddQuestion: FC<AddQuestionProp> = ({ handleChangeQuestion, idQ }) => {
  const [sources, setSources] = useState<string[]>([]);
  const [sourcesCount, setSourcesCount] = useState([1]);

  const [question, setQuestion] = useState<QuestionType>({
    idQ,
    type: "regular",
    qNumber: 0,
    tourNumber: 0,
    add: "",
    text: "",
    answer: "",
    alterAnswer: "",
    comment: "",
    source: sources,
    author: "",
  });

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setQuestion({ ...question, [e.target.name]: e.target.value });
  };

  const onAddQ = () => {
    handleChangeQuestion(question);
  };

  return (
    <div className="add-q">
      <button onClick={() => console.log("question", question)}>button</button>
      <div className="add-q__header">
        <label className="add-q__number">
          <p> Номер вопроса:</p>
          <input name="qNumber" type="text" onChange={onChange} />
        </label>{" "}
        <label className="add-t__tour">
          <p> Номер тура:</p>
          <input name="tourNumber" type="text" onChange={onChange} />
        </label>{" "}
        <label>
          {" "}
          <p>Тип вопроса:</p>
          <select name="type" onChange={onChange}>
            <option defaultValue="regular" value="regular">
              Обычный
            </option>
            <option value="double">Дуплет</option>
            <option value="triple">Блиц</option>
            <option value="other">Другой</option>
            <option value="outside">Вне турнира</option>
          </select>
        </label>
      </div>
      <div className="add-q__addition ">
        <label>
          <p> Раздатка:</p>
          <input
            name="add"
            placeholder="Ссылка на изображение или текст раздатки"
            type="text"
            onChange={onChange}
          />
        </label>
      </div>
      <div className="add-q__text">
        <p>Текст вопроса:</p>
        <textarea
          rows={4}
          placeholder="Введите текст вопроса..."
          onChange={onChange}
          name="text"
        />
      </div>
      <div className="add-q__ans">
        <label>
          <p> Ответ:</p>
          <input
            name="answer"
            placeholder="Ответ"
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          <p> Зачёт:</p>
          <input
            name="alterAnswer"
            placeholder="Зачёт"
            type="text"
            onChange={onChange}
          />
        </label>
        <label>
          <p> Автор:</p>
          <input
            name="author"
            placeholder="Автор"
            type="text"
            onChange={onChange}
          />
        </label>
      </div>
      <div className="add-q__comment">
        <p>Текст комментария:</p>
        <textarea
          rows={4}
          placeholder="Введите текст комментария..."
          onChange={onChange}
          name="comment"
        />
      </div>

      <div className="add-q__sources">
        <p> Введите источники по одному:</p>
        {sourcesCount.map((v, i) => {
          return (
            <label key={v}>
              <input
                name="add"
                placeholder="Источник"
                type="text"
                onChange={(e) => {
                  sources[i] = e.target.value;
                  setSources(sources);
                }}
              />
            </label>
          );
        })}
      </div>

      <div className="add-q__footer">
        {" "}
        <p
          onClick={() => {
            setSourcesCount((p) => [...p, p.length + 1]);
          }}
        >
          Добавить источник +
        </p>
        <button onClick={onAddQ}>Добавить вопрос</button>
      </div>
    </div>
  );
};

export default AddQuestion;
