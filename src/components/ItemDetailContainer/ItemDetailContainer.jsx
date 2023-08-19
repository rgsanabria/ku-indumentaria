import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductbyId } from '../../main'

import ItemDetail from '../ItemDetail/ItemDetail'

import { useParams } from 'react-router-dom'

import { getDocs, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([null])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc (db, 'products', itemId)

        getDocs(docRef)
            .then(response =>{
                const data= response.data()
                const productAdapted = { id: response.id, ...data}
                setProducts(productAdapted)
            })
            .catch (error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
            
        }, [itemId])
        

        
    }  

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />

        </div>
    )

export default ItemDetailContainer