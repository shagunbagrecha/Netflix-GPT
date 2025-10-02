import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import useHandleGPTsearchClick from "../hooks/useHandleGPTsearchClick";
const GPTsearchBar = () => {
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const handleGPTsearchClick = useHandleGPTsearchClick(searchText);

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-[90%] md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey].GPTsearchPlaceholder}
        />
        <button
          className="px-4 py-2 m-4 bg-[#E50914] rounded-lg cursor-pointer col-span-3"
          onClick={handleGPTsearchClick}
        >
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchBar;
