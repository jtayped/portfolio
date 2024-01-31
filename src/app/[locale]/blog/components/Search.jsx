import React from "react";
import { BsSearch } from "react-icons/bs";

const Search = ({ setQuery }) => {
  return (
    <div className="flex items-center pl-2 py-2 gap-4 border-b border-black">
      <BsSearch />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent w-full outline-none placeholder:text-black"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
