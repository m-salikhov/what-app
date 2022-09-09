import entryImg from "./entry_img.svg";
import "./entry.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { UserType } from "../../Types/user";
import { getDate } from "../../Helpers/getDate";
import { _axios } from "../../Helpers/_axios";
import { loginUser } from "../../Store/reducers/AsyncActionCreaters";
import { useAppDispatch, useAppSelector } from "../../Hooks/redux";

const testEmail = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

const Entry = () => {
  const [reg, setReg] = useState(false);
  const [passRepeat, setPassRepeat] = useState("");
  const [form, setForm] = useState<UserType>({
    email: "",
    username: "",
    password: "",
    role: "user",
    date: getDate(Date.now()),
  });
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setErrorMessage((prev) => "");

    if (!testEmail.test(form.email)) {
      return setErrorMessage("Неверный email");
    }
    if (!form.password) {
      return setErrorMessage("Введите пароль");
    }
    if (reg && form.password !== passRepeat) {
      return setErrorMessage("Повторите пароль");
    }
    if (reg && !form.username) {
      return setErrorMessage("Выберите псевдоним");
    }

    if (reg) {
      const resReg = await _axios.post<UserType>("/users", form);
      console.log("res.data", resReg.data);
      return;
    }
    dispatch(loginUser({ email: form.email, password: form.password }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { currentUser, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  return (
    <div className="entry__wrapper">
      <div className="entry">
        <div className="entry__container">
          <div className="entry__img">
            <img src={entryImg} alt="заглавное изображение" />
          </div>
          <form className="entry__form" onSubmit={onSubmit}>
            <label className="entry__input">
              <h2>Почта</h2>
              <input
                type="email"
                onChange={onChange}
                name="email"
                autoComplete="on"
                placeholder="email"
              />
            </label>
            <label className={reg ? "entry__input" : "entry__input reg"}>
              <h2>Псевдоним</h2>
              <input
                type="text"
                onChange={onChange}
                name="username"
                autoComplete="off"
                placeholder="username"
              />
            </label>
            <label className="entry__input">
              <h2>Пароль</h2>
              <input
                type="password"
                onChange={onChange}
                name="password"
                autoComplete="on"
                placeholder="password"
              />{" "}
            </label>
            <label className={reg ? "entry__input" : "entry__input reg"}>
              <h2>Повторите пароль</h2>
              <input
                autoComplete="on"
                type="password"
                name="repeatPassword"
                placeholder="repeat password"
                onChange={(e) => setPassRepeat(e.target.value)}
              />{" "}
            </label>
            {(errorMessage || error) && (
              <div className="entry__error">
                <div className="entry__error--block"></div>
                <p>{errorMessage || error}</p>
              </div>
            )}

            <div className="entry__buttons">
              <button type="submit">Отправить</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setReg(!reg);
                }}
              >
                {reg ? "Авторизироваться" : "Зарегистрироваться"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Entry;
