import "./header.scss";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../Hooks/redux";
import { _axios } from "../../Helpers/_axios";
import { userSlice } from "../../Store/reducers/UserSlice";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  const logout = async () => {
    await _axios
      .get("/auth/logout")
      .then((res) => console.log("res.data", res.data))
      .catch(() => console.log("ошибка"));

    dispatch(userSlice.actions.resetCurrentUser());
  };

  console.log("currentUser", currentUser);

  return (
    <header>
      <h1>База вопросов</h1>
      <nav>
        <ul>
          {currentUser?.role === "superuser" && (
            <li>
              <Link to="/edit"> Редактировать</Link>
            </li>
          )}
          {/* Только админ */}
          {currentUser?.id && (
            <li>
              <Link to="/add"> Добавить турнир</Link>
            </li>
          )}
          {/* TODO перенести в Турниры на главную */}
          {/* <li>
            <Link to="/">Режим</Link>
          </li> */}
          <li>
            <Link to="/all">Все турниры</Link>
          </li>
          {/*TODO Перенести в турниры на главной */}
          {/* <li>
            <Link to="/">Случайный турнир</Link>
          </li> */}
          {/* TODO только у пользователя и админа */}
          {currentUser?.id && (
            <li>
              <Link to="/">Профиль</Link>
            </li>
          )}
          {/* TODO войти/выйти  */}
          {currentUser?.id ? (
            <li>
              <Link to="/" onClick={logout}>
                Выйти
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/entry">Войти</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
