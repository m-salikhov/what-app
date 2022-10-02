import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import { TournamentShortType } from "../../Types/tournament";
import "./all.scss";
import chart from "./bar_chart.svg";

import LineAll from "./LineAll";
import { sortFunction } from "./sortFunction";

const All = () => {
  //ts = tournaments Все турниры
  const [ts, setTs] = useState<TournamentShortType[]>([]);
  const [field, setField] = useState("");
  const [redraw, setRedraw] = useState(false);

  useEffect(() => {
    axios.get(`/tournaments/allshort`).then((res) => {
      setTs(res.data);
    });
  }, []);

  function sort(e: MouseEvent<HTMLDivElement>) {
    const { className } = e.currentTarget;
    if (field === className) {
      setTs((prev) => prev.reverse());
      setRedraw(!redraw);
    } else {
      sortFunction(ts, className);
      setField(className);
    }
  }

  return (
    <main>
      <div className="table">
        <div className="table__header">
          <div className="table__header_t">№</div>
          <div className="table__header_t">
            Название{" "}
            <div className="title" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
          <div className="table__header_t">
            Дата{" "}
            <div className="date" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
          <div className="table__header_t">
            Вопросы{" "}
            <div className="questionsQuantity" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
          <div className="table__header_t">
            Туры{" "}
            <div className="tours" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
          <div className="table__header_t">
            Добавлен{" "}
            <div className="dateUpload" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
          <div className="table__header_t">
            Добавил{" "}
            <div className="uploader" onClick={sort}>
              <img src={chart} alt="обновить случайные" />
            </div>{" "}
          </div>
        </div>
        <div className="table__body">
          {ts.map((v, i) => (
            <LineAll item={v} index={i} key={v.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default All;
