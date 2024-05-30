import Image from "next/image";
import React, { useContext } from "react";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import formatCurrency from "../../utils/formatCurrency";
import { Product } from "../Products/ProductCard";
import AppContext from "@/context/AppContext";

const CartItem: React.FC<Product> = ({ id, image, price, title }) => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const newCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems([...newCartItems]);
  };

  return (
    <section className="flex items-start relative rounded-lg pb-1 mb-2 bg-zinc-50">
      <Image
        src={image}
        alt="test"
        width={70}
        height={70}
        className="w-20 rounded-lg px-2 py-2"
      />

      <div className="pr-8 pl-2 pt-2">
        <h3 className="text-sm font-semibold text-gray-400 mb-2">{title}</h3>
        <h3 className="text-2xl font-semibold">
          {formatCurrency(price, "BRL")}
        </h3>

        <button
          type="button"
          className="absolute top-0 right-0 text-red-700 text-lg border-none cursor-pointer p"
          onClick={handleRemoveItem}
        >
          <RemoveShoppingCartIcon sx={{ fontSize: 25 }} />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
