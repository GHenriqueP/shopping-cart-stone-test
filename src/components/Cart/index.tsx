"use client";

import React, { useContext, useEffect } from "react";
import CartItem from "../CartItem";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "@/context/AppContext";

const Cart: React.FC = () => {
  const { cartItems, showCart } = useContext(AppContext);

  const totalPrice = cartItems.reduce(
    (acc, item) => (item.quantity || 1) * item.price + acc,
    0
  );

  useEffect(() => {
    if (showCart) {
    }
  }, [showCart]);

  return (
    <>
      {showCart && (
        <section className="w-full max-w-80 bg-white h-screen fixed top-0 right-0 pt-24 px-5 p-[100px_20px_20px] flex flex-col justify-between transition-all shadow-lg">
          <div className="flex-grow overflow-auto">
            {cartItems.length === 0 ? (
              <p className="font-medium mt-5 text-xl whitespace-nowrap">
                Nenhum produto no carrinho.
              </p>
            ) : (
              cartItems.map((item) => <CartItem key={item.id} {...item} />)
            )}
          </div>
          <div className="text-2xl font-medium pt-4 pb-4 text-zinc-900 border-t-1 border-solid border-slate-200">
            {formatCurrency(totalPrice, "BRL")} <br />
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
