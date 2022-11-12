import './Header.css'

function Header() {
    return <header className="header">
        <h1 className="header__title">
            <img className="img-card" src="Vector.png" alt="logo" />
            Wrench CRM
        </h1>
        <button className="header__login">
            <img className="img-card" src="ic_person.png" alt="logo" />
            <div className="header__login-text">Имя Фамилия</div>
        </button>
    </header>
}

export default Header