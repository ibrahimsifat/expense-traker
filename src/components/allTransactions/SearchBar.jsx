import React from "react";
import RadioFilter from "./RadioFilter";

const SearchBar = () => {
  return (
    <div className="flex items-center bg-[]">
      <RadioFilter />

      <div>
        <input
          type="search"
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
          id="exampleSearch"
          placeholder="Search Transactions"
        />
      </div>
    </div>
  );
};

export default SearchBar;
