import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import { getDate } from "../../Helpers/getDate";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";
import { tournamentSlice } from "../../Store/reducers/TournamentSlice";
import back from "./back.svg";
import next from "./next.svg";

const LastTournaments = () => {
  const [lastTenTournamebts, setLastTenTournamebts] = useState<
    { title: string; dateUpload: number }[]
  >([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(`/tournaments/last/${pageNumber * 10}`).then((res) => {
      setLastTenTournamebts(res.data);
    });
  }, [pageNumber]);
  useEffect(() => {
    axios.get(`/tournaments/last/-1`).then((res) => {
      setPageCount(res.data);
    });
  }, []);

  const changePageNumber = (e: MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.className;
    if (name === "next" && pageNumber < pageCount - 1) {
      setPageNumber((p) => ++p);
    }
    if (name === "back" && pageNumber > 0) {
      setPageNumber((p) => --p);
    }
  };

  return (
    <>
      <h2>Последние добавленные турниры</h2>
      <div className="tournaments__header">
        <h3>Название</h3>
        <h3>Добавлен</h3>
      </div>
      {lastTenTournamebts.map((v, i) => {
        return (
          <div className="tournaments__item" key={i}>
            <h4
              onClick={() =>
                dispatch(tournamentSlice.actions.setTitle(v.title))
              }
            >
              {v.title}
            </h4>
            <h4>{getDate(v.dateUpload)}</h4>
          </div>
        );
      })}
      <div className="tournaments__footer">
        <div className="back" onClick={changePageNumber}>
          {" "}
          <img src={back} alt="обновить случайные" />
        </div>
        <p>{pageNumber + 1}</p>
        <div className="next" onClick={changePageNumber}>
          {" "}
          <img src={next} alt="обновить случайные" />
        </div>
      </div>
    </>
  );
};

export default LastTournaments;