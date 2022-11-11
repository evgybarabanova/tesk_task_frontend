import React, { useState } from 'react'
import { searchAdress } from '../logic'

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

  return (
    <>
      <form className="home-page-main-form" onSubmit={handleSearchAdress}>
        <div className="home-page-main__search">
          <input
            type="search"
            name="query"
            placeholder="search adress"
            id="query"
          />
          <button
            className="home-page-header__search-button"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <h1>Search adresses</h1>
      <div>
        {values.map((value, idx) => {
          return ([
            <div key={idx}>{value.value}
            </div>
          ]
          );
        })}
      </div>
    </>
  )
}