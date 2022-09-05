import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/transection/filterSlice";
import RadioFilter from "./RadioFilter";

const SearchBar = () => {
  const { search } = useSelector((state) => state.filters);
  const [input, setInput] = useState(search);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // clean
    setInput("");
  };
  return (
    <div className="flex items-center bg-[]">
      <RadioFilter />

      <div>
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
