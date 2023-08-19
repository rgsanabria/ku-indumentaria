import { useState, useEffect } from "react";

import ItemList from '../ItemList/ItemList'

import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebases/firebaseConfig'




const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId
            ? query(collection(db, 'products'), where('category', '==', categoryId))
            : collection(db, 'products')
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {

                })
            } )


        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },  [categoryId])


    return (
        <div>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
        </div>

    )

}

export default ItemListContainer;