import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Adress from "./Adress";
import "./Menu.css";

export default function Menu() {

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <h1>Меню</h1>
      <p>
        <img className="img-card-home" src="home.png" alt="logo" />
        Главная
      </p>
      <p>
        <img className="img-card-search" src="search.png" alt="logo" />
        Поиск адресов
        <Routes>
          <Route path="adress" element={<Adress />}></Route>
        </Routes>
      </p>
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
      <button className="setting" onClick={handleMenuVisibility}>
        <img className="img-card-setting" src="setting.png" alt="logo" />
        Настройки
      </button>
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
    </>
  );
}
