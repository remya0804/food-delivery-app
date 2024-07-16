import { createContext, useEffect, useState } from "react";
import { foodList } from "../assets/assets";

export const storeContext = createContext();

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});
    
    const addToCart = (id) => {

        if(!cartItems[id]){

            setCartItems((prev) => ({...prev,[id] : 1}))
        } else{

            setCartItems((prev) => ({...prev,[id]: prev[id]+1}))
        }

        

    }

    // useEffect (() => {

    //     console.log(cartItems)
    // },[cartItems])


    const removeFromCart = (id) => {

        setCartItems((prev) => ({...prev,[id]: prev[id]-1}))
    }

    const getTotal = () => {

        let total = 0;

        for (const i in cartItems){

            if(cartItems[i] > 0){
                
                let itemInfo = foodList.find((item) => item.id==i);
                total += itemInfo.price * cartItems[i];
                // console.log(itemInfo)

            }
            
           
        }

        return total;
    }

    // getTotal()

    const contextValue = {
        foodList,
        cartItems,setCartItems,
        addToCart,removeFromCart,
        getTotal
    }

    return (

        <storeContext.Provider value={contextValue}>

            {props.children}

        </storeContext.Provider>
    )
}

export default StoreContextProvider;