"use client";

import React, { useContext, useEffect } from "react";
import CartItem from "./CartItem";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "@/context/AppContext";

const Cart: React.FC = () => {
  const { cartItems, showCart } = useContext(AppContext);

  useEffect(() => {
    if (showCart) {
    }
  }, [showCart]);

  return (
    <>
      {showCart && (
        <section className="w-full max-w-80 bg-green-950 h-screen fixed top-0 right-0 pt-24 px-5">
          <div className="flex-grow overflow-auto">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </div>
          <div className="text-2xl font-medium pt-8 pb-4 text-zinc-50">
            {formatCurrency(30, "BRL")} <br />
            Total do Carrinho
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
