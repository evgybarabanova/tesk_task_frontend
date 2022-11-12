import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {

  const [visible, setVisible] = useState(false);

  const handleVisibility = () => {
    setVisible(!visible);
  };

  return <div>
    <h2>Меню</h2>
    <menu class="menu-list">
      <li><Link to="/"><img src="home.png" alt="logo" /> Главная</Link></li>
      <li><Link to="/address"><img src="search.png" alt="logo" /> Поиск адресов</Link></li>
      <li><Link><img src="tables.png" alt="logo" /> Таблицы</Link></li>
      <li><Link><img src="calendar.png" alt="logo" />Календарь</Link></li>
      <li><Link><img src="map.png" alt="logo" /> Карты</Link></li>
      <li><Link><img src="vid.png" alt="logo" /> Виджеты</Link></li>
      <li><Link onClick={handleVisibility}><img src="setting.png" alt="logo" /> Настройки</Link></li>
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
      <li><Link><img src="logout.png" alt="logo" /> Выход</Link></li>
    </menu>
  </div>
}
