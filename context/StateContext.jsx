"use client";
import React,{createContext,useContext,useState,useEffect} from 'react';
import {toast} from 'react-hot-toast';

export const StateContext=createContext();


export const StateProvider=({children})=>{
    const[showCart,setShowCart]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const cart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage?.getItem('cart')) || []
      : [];
    const[totalPrice,setTotalPrice]=useState(0);
    const[totalQuantities,setTotalQuantities]=useState();
    const[qty,setQty]=useState(1);
    const incQty=()=>{
        setQty((prevQty)=>prevQty+1);
    }
    const decQty=()=>{
        setQty((prevQty)=>{
            if(prevQty-1<1) return 1;

            return prevQty-1;
        })
    }

    

    

    const onAdd=(product,quantity)=>{
        
        
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product[0].price*quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);

       
        const checkProductInCart=cart.find((item)=>item[0].id===product[0].id);
        if(checkProductInCart){
            cart.map((cartProduct)=>{
               
                if(cartProduct[0].id===product[0].id){
                    cartProduct[1].quantity=cartProduct[1].quantity+quantity;
                }
            })
            
        }
        else{

            product=[...product,{quantity:quantity}];
            cart.push(product);
        }

        
        localStorage.setItem('cart', JSON.stringify(cart));
        toast.success(`${qty} ${product[0].name} added to the cart`);

    }
    return(
        <StateContext.Provider
            value={{
                showCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incQty,
                decQty,
                onAdd,
                
               
                
            }}
        >
            {children}
        </StateContext.Provider>
    )
}
