import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <nav>
      <h1>Меню</h1>
      <p>
        <img className="img-card-home" src="home.png" alt="logo" />
        <Link to="/">Главная</Link>
      </p>
      <Link className="link" to="adress">
        <img className="img-card-search" src="search.png" alt="logo" />
        Поиск адресов
          </Link>
      <p>
        <img className="img-card-tables" src="tables.png" alt="logo" />
        Таблицы
      </p>
      <p>
        <img className="img-card-calendar" src="calendar.png" alt="logo" />
        Календарь
      </p>
      <p>
        <img className="img-card-map" src="map.png" alt="logo" />
        Карты
      </p>
      <p>
        <img className="img-card-vid" src="vid.png" alt="logo" />
        Виджеты
      </p>
      <p className="setting" onClick={handleVisibility}>
        <img className="img-card-setting" src="setting.png" alt="logo" />
        Настройки
      </p>
       {/* {menuVisible && (
        <p>
          <img className="img-card-1" src="1.png" alt="logo" />
          Настройки профиля
        </p>
        <p>
          <img className="img-card-2" src="2.png" alt="logo" />
          Управление финансами
        </p> 
         )} */}
     

      <p>
        <img className="img-card-logout" src="logout.png" alt="logo" />
        Выход
      </p>
    </nav>
  );
}
