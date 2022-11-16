import React, { useState } from 'react'
import { searchAdress } from '../logic'
import "./Address.css";

export default function Adress() {
  const [values, setValues] = useState([])

  const handleSearchAdress = (event) => {
    event.preventDefault()

    const query = event.target.query.value

    try {
      searchAdress(query)
        .then(values => setValues(values))
        .catch(error => console.log("error", error));
    } catch (error) {
      alert(error.message)
    }
  }

  return <main>
     <p className='title'>Поиск адресов</p>
    <p className='text'>Введите интересующий вас адрес</p>
    <form className="home-page-main-form" onSubmit={handleSearchAdress}>
      <div className="home-page-main__search">
        <input
          type="search"
          name="query"
          placeholder="Введите интересующий вас адрес"
          id="query"
        />
        <button
          className="home-page-header__search-button"
          type="submit"
        >
        <img className="img-card" src="Vector (1).png" alt="logo" />
          Поиск
        </button>
      </div>
    </form>
  
    <div>
      {values.map((value, idx) => {
        return ([
          <div key={idx}>{value.value}
          </div>
        ]
        );
      })}
    </div>
  </main>
}