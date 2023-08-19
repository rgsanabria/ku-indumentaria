import './CartWidget.css'

import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext (CartContext)

    return(
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
            <img className='CartImg' src={cart} alt='cart-widget'> </img>
            { totalQuantity }
        </Link>
    );


}

export default CartWidget
