import "./header.scss";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../Hooks/redux";

let x: any = false;

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.userReducer);
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
            <Link to="/">Все турниры</Link>
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
              <Link to="/entry">Выйти</Link>
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
