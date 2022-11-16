import './Header.css'

function Header() {
    return <header className="header">
        <p className="header__title">
            <img className="img-card" src="Vector.png" alt="logo" />
            Wrench CRM
        </p>
        <button className="header__login">
            <img className="img-card" src="ic_person.png" alt="logo" />
            Имя Фамилия
        </button>
    </header>
}

export default Header