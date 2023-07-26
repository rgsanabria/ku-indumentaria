import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductbyId } from '../../main'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductbyId ('1')
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />

        </div>
    )

}

export default ItemDetailContainer