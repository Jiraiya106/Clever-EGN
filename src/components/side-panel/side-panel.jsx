import React, { useContext } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { ThemeContext } from "../theme-context";

import "./side-panel.css";

export const SidePanel = () => {
  const history = useHistory();
  let location = useLocation();
  console.log("location: ", location);

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="side-panel"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <NavLink className="link" to="/main">
        Главная
      </NavLink>
      <NavLink className="link" to="/catalogue">
        Каталог
      </NavLink>
      <NavLink className="link" to="/table">
        Таблица данных
      </NavLink>
      <NavLink className="link" to="/todo">
        ToDo
      </NavLink>
      <NavLink className="link" to="/questions">
        Вопросы
      </NavLink>
      <NavLink className="link" to="/messages">
        ЧАТ
      </NavLink>
      <button type="button" onClick={history.goBack}>
        Назад
      </button>
      <button type="button" onClick={history.goForward}>
        Вперед
      </button>
    </div>
  );
};
