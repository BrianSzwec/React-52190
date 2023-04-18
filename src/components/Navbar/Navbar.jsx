import foto from '../../assets/react.svg'
import logo from '../../assets/carro.svg'
import CartWidget from '../Cartwidg/Cartwidget'

const Navbar = () => {
    return (
        <header className="navHeader">
            <div className="navContainer">
                <img src={foto} alt="prueba" />
                <h1 className="sch1">SCH</h1>
                <nav className="navbar">
                    <a href="" className="navbar-link">Productos</a>
                    <a href="" className="navbar-link">Historia</a>
                </nav>

                <CartWidget/>

            </div>

        </header>
    )
}

export default Navbar
