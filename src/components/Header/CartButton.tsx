"use client";

import React, { useContext } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AppContext from "@/context/AppContext";

const CartButton = () => {
  const { showCart, setShowCart } = useContext(AppContext);

  console.log("Botão:", showCart);

  return (
    <button
      type="button"
      className="text-xl flex items-center justify-center p-[5px] border-none bg-none cursor-pointer relative ml-5 text-gray-800 bg-zinc-50 rounded-lg w-14 h-14"
      onClick={() => setShowCart(!showCart)}
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      <span className="bg-red-500 w-[15px] h-[15px] absolute top-1 left-1 text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
        1
      </span>
    </button>
  );
};

export default CartButton;
