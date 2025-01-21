import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../features/searchSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-lg font-bold">Social Media Dashboard</h1>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded text-black" // Added text-black here
        onChange={handleSearchChange}
      />
    </nav>
  );
};

export default Navigation;
