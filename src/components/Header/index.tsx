import React from "react";
import CartButton from "../CartButton";
import SearchBar from "../SearchBar";

const Header = () => {
  return (
    <header className="bg-green-950 fixed w-full z-20">
      <div className="max-container padding-container relative flexBetween items-center p-5">
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
};

export default Header;
