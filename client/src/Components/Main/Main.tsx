import { useState } from "react";
import { QuestionType } from "../../Types/question";

import Question from "../Elements/Question/Question";

import "./main.scss";

const test: QuestionType[] = [
  {
    id: 11,
    qNumber: 13,
    type: "regular",
    tourNumber: 3,
    text: "Один из создателей Фантомаса вспоминал, как однажды встретил писателя-интеллектуала, который читал его книгу, СДЕЛАВ ЭТО. В рассказе Андрея Колганова юный фанат Цоя пробрался в библиотеку с лезвием, но обнаружил, что кто-то уже успел СДЕЛАТЬ ЭТО. Какие два слова, начинающиеся на одну и ту же букву, мы заменили словами СДЕЛАТЬ ЭТО?",
    answer: "оторвать обложку",
    alterAnswer: "отодрать обложку, вырезать обложку",
    comment:
      "интеллектуалу было негоже читать такое дешёвое чтиво, однако книги оказались невероятно интересными. Чтобы скрыть от посторонних, какую книгу он читает, драматург Франсис де Круассэ предусмотрительно оторвал обложку. Герой рассказа хотел вырезать из библиотечного журнала обложку с Цоем, но его опередил другой фанат",
    source: [
      "https://www.google.ru/books/edition/%D0%91%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D1%83%D1%80/X_soEAAAQBAJ?hl=en&gbpv=1&dq=%D0%BE%D1%82%D0%BE%D1%80%D0%B2%D0%B0%D1%82%D1%8C%20%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D1%83&pg=PT124&printsec=frontcover",
    ],
    author: "Владимир Сушков (Саранск)",
  },
  {
    id: 22,
    type: "regular",
    qNumber: 17,
    tourNumber: 2,
    text: 'В романе 1875 года владелец ЕЁ в разговоре со своим другом цинично называет ЕЁ "предметом роскоши". Однако друг резонно замечает, что из-за НЕЁ семейная жизнь хозяина находится под угрозой. Назовите ЕЁ точно.',
    answer: "[рабыня] Изаура",
    comment:
      '"Предметом роскоши" сеньор Леонсио называет свою рабыню, семнадцатилетнюю Изауру. Но его друг уверен, что поскольку подросшая красивая девушка день и ночь маячит перед хозяином, тот рано или поздно в неё влюбится (что, кстати, и произошло). Автор романа — бразильский писатель Бернарду Жоакима да Силва Гимарайнш. Лишь в 1888 году, через 4 года после смерти писателя, рабство в Бразилии было отменено. "Рабыня Изаура" была экранизирована в 1976 году.',
    source: [
      "Б.Ж.да С.Гимарайнш. Рабыня Изаура ( http://fb5.online/b/331942/read )",
      "https://ru.wikipedia.org/wiki/Рабыня_Изаура_(роман)",
      "https://ru.wikipedia.org/wiki/Рабыня_Изаура_(телесериал)",
    ],
    author: "Виктор Мялов (Днепр)",
  },
  {
    type: "regular",
    id: 134,
    qNumber: 4,
    tourNumber: 1,
    add: "https://db.chgk.info/sites/default/files/scrull2_2.png",
    text: "Считается, что ОН сознательно использовал дактилический стих, ритм которого напоминает топот. На раздаточном материале ЕГО лицо скрыто. Назовите ЕГО.",
    answer: "Альфред Теннисон",
    alterAnswer: "по фамилии Теннисон без неверных уточнений.",
    comment:
      "лицо английского поэта мы скрыли под балаклавой. Во время Крымской войны под Балаклавой произошла атака лёгкой бригады, воспетая Теннисоном в одноимённом стихотворении, ритм которого напоминает стук копыт.",
    source: [
      "https://ru.wikipedia.org/wiki/Атака_лёгкой_бригады_(стихотворение)",
    ],
    author: "Максим Мерзляков (Воронеж)",
  },
  {
    id: 13,
    qNumber: 4,
    type: "regular",
    tourNumber: 1,
    add: "The officia account of ****** Footba Cub",
    text: " Так выглядел заголовок твиттера известного клуба в годовщину выдающегося сезона. Восстановив пропуск, ответьте: под руководством кого?",
    answer: "Арсена Венгера.",
    alterAnswer: "Арсена, Венгера, Arsena.",
    comment:
      "В легендарном сезоне у «Арсенала» не было ни одного поражения, которые обозначаются буквой L, поэтому название клуба почти превратилось в имя тогдашнего тренера.",
    source: ["https://www.dropbox.com/s/5t2we2321jdlxoj/a11.png?dl=0"],
    author: "Илья Иванов (Путилково)",
  },
];
const tourney = {};

const Main = () => {
  const [message, setMessage] = useState("");

  return (
    <main>
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
          {test.map((v) => (
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
