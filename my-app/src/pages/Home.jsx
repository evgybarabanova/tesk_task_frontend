import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./Home.css";
import Menu from "./Menu";

export default function Home() {
  return (
    <>
      <header className="home-page-header">
        <h1 className="home-page-header__title">
          <img className="img-card" src="Vector.png" alt="logo" />
          Wrench CRM
        </h1>
        <button className="home-page-header__login">
          <img className="img-card" src="ic_person.png" alt="logo" />
          <div className="home-page-header__login-text">Имя Фамилия</div>
        </button>
      </header>
      <main className="home-page-main">
        <Routes>
          <Route path="/" element={<Menu />}></Route>
        </Routes>
      </main>
    </>
  );
}
