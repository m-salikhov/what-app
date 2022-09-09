import "./header.scss";
import { Link } from "react-router-dom";

let x: any = false;

const Header = () => {
  return (
    <header>
      <h1>База вопросов</h1>
      <nav>
        <ul>
          {/* Только админ */}
          <li>
            <Link to="/"> Добавить турнир</Link>
          </li>
          <li>
            <Link to="/">Режим</Link>
          </li>
          <li>
            <Link to="/">Все турниры</Link>
          </li>
          <li>
            <Link to="/">Случайный турнир</Link>
          </li>
          {/* TODO только у пользователя и админа */}
          {x && (
            <li>
              <Link to="/">Профиль</Link>
            </li>
          )}
          {/* TODO войти/выйти  */}
          <li>
            <Link to="/entry">Войти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
