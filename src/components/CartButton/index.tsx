"use client";

import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AppContext from "@/context/AppContext";

const CartButton = () => {
  const { showCart, setShowCart, cartItems } = useContext(AppContext);

  return (
    <button
      type="button"
      className="text-xl flex items-center justify-center p-[5px] border-none bg-none cursor-pointer relative ml-5 text-white hover:text-green-200 transform hover:scale-105 transition duration-300 ease-in-out"
      onClick={() => setShowCart(!showCart)}
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 45 }} />
      <span className="bg-red-500 w-[20px] h-[20px] absolute top-1 left-1 text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
        {cartItems.length}
      </span>
    </button>
  );
};

export default CartButton;
