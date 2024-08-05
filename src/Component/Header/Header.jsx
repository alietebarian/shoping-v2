import React from "react";
import { Link } from "react-router-dom";
import { useSearchContext } from "../../assets/Context/SearchContext";

function Header() {
  const { searchInput, setSearchInput } = useSearchContext();

  return (
    <div className="flex justify-around py-4 bg-slate-100 w-full">
      <div>
        <input
          type="text"
          placeholder="جست و جو ...."
          className="p-2 w-[280px] focus:outline-none rounded-md"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="font-bold border border-cyan-100 p-3 bg-cyan-200 hover:border-cyan-400 hover:bg-cyan-400 hover:cursor-pointer rounded-sm">
        <Link to="newpost">افزودن پست جدید</Link>
      </div>
    </div>
  );
}

export default Header;
