import { FilterIcon, SearchIcon } from "@/assets/icons";
import { useState } from "react";

const HomeSearch = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="border-[2px] relative h-[60px] rounded-[10px] overflow-hidden flex bg-bodyColor hover:bg-white">
      <div className="w-full h-full group">
        <input
          type="text"
          className="h-full bg-bodyColor w-full focus:outline-none px-10 hover:bg-white focus:bg-white "
          placeholder="Поиск"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleFocus}
          onMouseLeave={handleBlur}
        />
      </div>
      <div>
        <button className="bg-white px-5 h-full hover:text-redColor duration-100">
          <FilterIcon />
        </button>
      </div>
      <div
        className={`absolute right-[60px] h-full ${
          isFocused ? "bg-white" : "bg-bodyColor"
        } px-5 `}
      >
        <button className={`h-full hover:text-redColor duration-100`}>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default HomeSearch;
