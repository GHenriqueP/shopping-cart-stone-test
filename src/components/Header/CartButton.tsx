import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartButton = () => {
  return (
    <button
      type="button"
      className="text-xl flex items-center justify-center p-[5px] border-none bg-none cursor-pointer relative ml-5 text-gray-800"
      /*onClick={() => setIsCartVisible(!isCartVisible)}*/
    >
      <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />
      <span className="bg-red-500 w-[15px] h-[15px] absolute top-0 left-0 text-white text-[11px] font-semibold rounded-full flex items-center justify-center">
        1
      </span>
    </button>
  );
};

export default CartButton;
