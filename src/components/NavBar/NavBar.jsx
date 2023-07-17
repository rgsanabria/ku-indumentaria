import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Inicio</button>
                <button>Productos</button>
                <button>Envios</button>
                <button>Contactos</button>
        
            </div>
            <CartWidget />

        </nav>
        


    );
}

export default NavBar;