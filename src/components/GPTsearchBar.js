import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
const GPTsearchBar = () => {

  const languageKey = useSelector((store) => store.config.lang)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[languageKey].GPTsearchPlaceholder}
        />
        <button className="px-4 py-2 m-4 bg-[#E50914] rounded-lg cursor-pointer col-span-3">
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTsearchBar;
