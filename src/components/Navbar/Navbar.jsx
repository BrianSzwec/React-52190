
import foto from '../../assets/LogoSch.svg'
import CartWidget from '../Cartwidget/Cartwidget'
import { Link } from 'react-router-dom'


const Navbar = () => {

   
    
    return (
        <header className="navHeader">
            <div className="navContainer">
                <img src={foto} alt="logosch" className='schlogo'/>
                
                <nav className="navbar">
                    <Link to="/" className="navbar-link">Productos</Link>
                    <Link to="/categorias/vinilo" className="navbar-link">Vinilo</Link>
                    <Link to="/categorias/plasticos" className="navbar-link">Plasticos</Link>
                    <Link to="/categorias/transfer" className="navbar-link">Transfer</Link>
                </nav>

               <CartWidget/>

            </div>

        </header>
    )
}

export default Navbar
