"use client";
import React,{createContext,useContext,useState,useEffect} from 'react';
import {toast} from 'react-hot-toast';

export const StateContext=createContext();


export const StateProvider=({children})=>{
    const[showCart,setShowCart]=useState(false);
    // const[cartItems,setCartItems]=useState([]);
    const [cartItems,setCartItems]=useState([]);
    const cart =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) || []
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
        
        
        // const checkProductInCart=cartItems.find((item)=>item.id===product.id);
        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product[0].price*quantity);
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity);

        // if(checkProductInCart){

        //     const updatedCartItems=cartItems.map((cartProduct)=>{
        //         if(cartProduct.id === product.id) return{
        //             ...cartProduct,
        //             quantity: cartProduct.quantity + quantity,
                    
        //         }
        //     })

        //     setCartItems(updatedCartItems);
        //     console.log("added to cart",cartItems);
        // }
        // else{
        //     product.quantity=quantity;
        //     setCartItems([...cartItems,{product}])
        // }
        // console.log(cart,"dtyuio");
        const checkProductInCart=cart.find((item)=>item[0].id===product[0].id);
        if(checkProductInCart){
            // console.log("vghvhj");
            cart.map((cartProduct)=>{
                // console.log("hgvbhj78678",cartProduct[0].id,"43567 product id",product[0].id);
                // console.log("45678");
                if(cartProduct[0].id===product[0].id){
                    cartProduct[1].quantity=cartProduct[1].quantity+quantity;
                    // console.log("ughjkluyt8890o");
                }
            })
            
        }
        else{

            product=[...product,{quantity:quantity}];
            // console.log("product fetched at context",product);
            cart.push(product);
        }

        
        // console.log("product fetched at contextbhgnbv",cart);
        localStorage.setItem('cart', JSON.stringify(cart));
        // console.log("cart items",cartItems);
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
