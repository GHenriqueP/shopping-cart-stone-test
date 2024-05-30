"use client";

import React, { useContext, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AppContext from "@/context/AppContext";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value); // Atualiza o valor da pesquisa no contexto
  };

  return (
    <form
      className="flexBetween bg-white w-full max-w-lg shadow-sm gap-3 pr-3 rounded" /*onSubmit={}*/
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        placeholder="Buscar produtos"
        className="p-3 grow outline-none text-base font-medium border-r border-solid border-gray-100 rounded"
        value={searchValue}
        onChange={handleSearchChange}
        required
      />

      <button
        type="submit"
        className="bg-none border-none text-base flexCenter items-center hover:text-gray-300 transition-all"
      >
        <SearchIcon sx={{ fontSize: 25 }} />
      </button>
    </form>
  );
};

export default SearchBar;
