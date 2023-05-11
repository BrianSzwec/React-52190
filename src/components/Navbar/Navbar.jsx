import foto from '../../assets/LogoSch.svg'
import CartWidget from '../Cartwidget/Cartwidget'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <header className="navHeader">
            <div className="navContainer">
                <img src={foto} alt="logosch" className='schlogo'/>
                
                <nav className="navbar">
                    <Link to="./productos" className="navbar-link">Productos</Link>
                    <Link to="./categoria" className="navbar-link">Categorias</Link>
                    <Link to="./historia" className="navbar-link">Historia</Link>
                </nav>

                <CartWidget/>

            </div>

        </header>
    )
}

export default Navbar
