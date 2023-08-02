
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to='/'>
            <h3>Ku</h3>
            </Link>
            
            <div className='Categories'>
                <button>Inicio</button>
                <button>Productos</button>
                <NavLink to={`/category/buzo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                <NavLink to={`/category/buzoOver`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}></NavLink>
                
        
            </div>
            <CartWidget />

        </nav>
        


    );
}

export default NavBar;