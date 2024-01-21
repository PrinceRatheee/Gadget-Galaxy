"use client";
import axios from "axios";
import toast from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router=useRouter();
  const [address, setAddress] = useState({
    Name: "",
    Phone: "",
    Pincode: "",
    Locality: "",
    Address: "",
    City: "",
    State: "",
  });
  const saveAddress = async () => {
    // console.log(address, "ghfhh---dsvc------");
    if (
      !address.Name ||
      !address.Phone ||
      !address.Pincode ||
      !address.Locality ||
      !address.Address ||
      !address.City ||
      !address.State
    ) {
      toast.error("Fill all the details");
    } else {
      const response = await axios.post("/api/users/address", address);
      console.log(response.data, "-----------");
      if (response?.data?.status == 200) {
        toast.success(response?.data?.message);
        
        router.push("/");
      } else {
        toast.error(response?.data?.message);
      }
    }
  };
  const fetchAddress = async () => {
    const data = await axios.get("/api/users/address");
    if (data?.data?.data?.address?.length > 0) {
      const order = data?.data?.data?.address[0];
      setAddress(order);
    }
    // console.log(data,"gfhjlk--------------jhvkk|||");
  };
  useEffect(() => {
    fetchAddress();
  }, []);
  // console.log(address, "address");
  return (
    <div className="flex flex-col items-center justify-center gap-[2rem] mt-[6rem]">
      <h1 className="font-bold text-[3.5rem] ">Your Address:</h1>
      <div className="flex flex-wrap gap-[10%] items-center justify-center">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-solid border-black  px-[1rem] py-[0.6rem]  "
          name={address?.Name}
          value={address?.Name}
          onChange={(e) => setAddress({ ...address, Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          className="border-2 border-solid border-black px-[1rem] py-[0.6rem]  "
          name={address?.Phone}
          value={address?.Phone}
          onChange={(e) => setAddress({ ...address, Phone: e.target.value })}
        />
      </div>
      <div className="flex flex-wrap gap-[10%] items-center justify-center">
        <input
          type="text"
          placeholder="Pincode"
          className="border-2 border-solid border-black  px-[1rem] py-[0.6rem]  "
          name={address?.Pincode}
          value={address?.Pincode}
          onChange={(e) => setAddress({ ...address, Pincode: e.target.value })}
        />
        <input
          type="text"
          placeholder="Locality"
          className="border-2 border-solid border-black px-[1rem] py-[0.6rem]  "
          name={address?.Locality}
          value={address?.Locality}
          onChange={(e) => setAddress({ ...address, Locality: e.target.value })}
        />
      </div>
      <div className="flex w-[31%] justify-center  ">
        <textarea
          rows="4"
          cols="50"
          className="border-2 border-solid border-black px-[1rem] py-[0.5rem]  w-full text-start"
          placeholder="Address(Area and Street)"
          name={address?.Address}
          value={address?.Address}
          onChange={(e) => setAddress({ ...address, Address: e.target.value })}
        />
      </div>

      <div className="flex flex-wrap gap-[10%] justify-center">
        <input
          type="text"
          placeholder="City/District/Town"
          className="border-2 border-solid border-black  px-[1rem] py-[0.6rem]  "
          name={address?.City}
          value={address?.City}
          onChange={(e) => setAddress({ ...address, City: e.target.value })}
        />
        <input
          type="text"
          placeholder="State"
          className="border-2 border-solid border-black  px-[1rem] py-[0.6rem]  "
          name={address?.State}
          value={address?.State}
          onChange={(e) => setAddress({ ...address, State: e.target.value })}
        />
      </div>

      <button
        className="bg-red-500 hover:bg-red-600 font-semibold py-[0.6rem] md:w-[15%] w-[8rem] justify-center   text-white  cursor-pointer flex "
        onClick={(e) => saveAddress(e)}
      >
        Save and Deliver Here
      </button>
    </div>
  );
};

export default page;
