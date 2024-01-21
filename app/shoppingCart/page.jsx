"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const page = () => {
  // const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState([]);
  const router = useRouter();

  const [price, setPrice] = useState(0);

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item[0].id !== id) || [];
    setCart(newCart);
    setPrice(0);
    newCart.map((item) => {
      setPrice((prevPrice) => prevPrice + item[0].price * item[1].quantity);
    });
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleToggleButtons = (id, value) => {
    const toggleCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (value == "plus") {
      toggleCart.map((item) => {
        if (item[0].id === id) {
          item[1].quantity += 1;
        }
      });
    } else {
      toggleCart.map((item) => {
        if (item[0].id === id) {
          if (item[1].quantity < 2) {
            item[1].quantity = 1;
          } else {
            item[1].quantity -= 1;
          }
        }
      });
    }

    localStorage.setItem("cart", JSON.stringify(toggleCart));
    setCart(toggleCart);
    setPrice(0);
    toggleCart.map((item) => {
      setPrice((prevPrice) => prevPrice + item[0].price * item[1].quantity);
    });
  };

  const handleCheckout = async () => {
    try {
     const sendData={cart};
     const response=await axios.get("/api/users/address");
    //  console.log("response----",response);

     if(response?.data?.data?.address.length>0){

       const data=await axios.post("/api/checkout",sendData);
      //  console.log(data,"daaataa");
       if(data.status==200){
         router.push(`${data.data.url}`);
       }
       else{
         router.push("/failure")
       }
     }
     else{
      router.push("/address");
     }
    } catch (error) {
      console.log(error,"error in frontend checkout");

    }
    

  };

  useEffect(() => {
    // setTotalPrice((prevTotalPrice)=>prevTotalPrice+product[0].price*quantity);
    // setCartData(JSON.parse(localStorage.getItem("cart")) || []);
    setPrice(0);
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    cartData.map((item) => {
      setPrice((prevPrice) => prevPrice + item[0].price * item[1].quantity);
    });
  }, []);
  return (
    <>
      <div className="flex flex-col w-[80%] container mt-[8rem]">
        <div className="flex my-[2rem] ">
          <h1 className="text-[2.5rem] font-bold text-center">YOUR CART</h1>
        </div>
        {cart.map((item) => (
          <div
            key={item[0].id}
            className="flex justify-between flex-col md:flex-row bg-gray-100 mb-[0.5rem] px-[5rem] py-[1rem]"
          >
            <div className="flex flex-wrap items-center justify-center gap-[5rem]">
                <img
                  src={item[0].img}
                  alt="Product Image"
                  className="w-[200px]   cursor-pointer"
                  onClick={() => router.push(`/product/${item[0].slug}`)}
                />
             
              <div className="flex items-center ">
                <div className="flex flex-col ">
                  <div>
                    <h3
                      className="text-[1.3rem] font-semibold cursor-pointer"
                      onClick={() => router.push(`/product/${item[0].slug}`)}
                    >
                      {item[0].name}
                    </h3>
                  </div>

                  <div className="quantity ">
                    <p className="text-[1rem] text-gray-400">Quantity:</p>
                    <p className="flex gap-[0.5rem] relative top-[0.3rem]">
                      <span
                        className="text-red-500 text-[2rem] flex relative bottom-[0.5rem] cursor-pointer"
                        onClick={() =>
                          handleToggleButtons(item[0].id, "minus    ")
                        }
                      >
                        -
                      </span>
                      <span className="text-[1.5rem] flex ">
                        {item[1].quantity}
                      </span>
                      <span
                        className="text-green-400 text-[1.5rem] flex cursor-pointer"
                        onClick={() => handleToggleButtons(item[0].id, "plus")}
                      >
                        +
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[1rem] items-center justify-center">
              <div className="flex flex-col">

                <h3 className="font-semibold text-[1.3rem]">Total Price</h3>
                <h3 className="font-semibold text-[1.1rem]">
                  ₹ {item[0].price * item[1].quantity}
                </h3>
              </div>
              <h3
                className="text-red-400 cursor-pointer"
                onClick={() => removeFromCart(item[0].id)}
              >
                Delete item
              </h3>
            </div>
            
          </div>
        ))}
        {cart.length > 0 ? (
          <>
            <h1 className="text-end px-[4.5rem] text-[1.2rem] mt-[1rem]">
              Total Price: <span className="font-semibold">₹ {price}</span>
            </h1>

            <div className="flex justify-end my-[1rem]">
              <button
                className="bg-red-500 hover:bg-red-600 cursor-pointer flex justify-center text-white w-[15rem] py-[0.8rem] text-[1.2rem] font-semibold"
                onClick={handleCheckout}
              >
                Place Order
              </button>
            </div>
          </>
        ):(
          <>
          <div className="flex flex-col">

            <h3 className="text-center text-[1.3rem] text-gray-400">Your Cart is Empty</h3>
            <h3 className="text-red-400 text-center text-[1.3rem] cursor-pointer" onClick={()=>router.push("/")}>Continue Shopping</h3>
          </div>
          </>
        )}
      </div>
      <br />
      {/* <div className="flex flex-col ">
          <h1>Previous Orders :</h1>
      </div> */}
    </>
  );
};

export default page;
