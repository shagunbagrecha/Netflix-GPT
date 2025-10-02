import { useEffect } from "react";
import GPTsearchBar from "./GPTsearchBar";
import GPTmovieSuggestions from "./GPTmovieSuggestions";
import { BACKDROP } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearGPTResults } from "../utils/GPTslice";

const GPTsearch = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearGPTResults());
  }, [dispatch]);
  return (
    <>
      <div className="-z-10 fixed inset-0">
        <img className="h-full w-full object-cover" src={BACKDROP} alt="Background" />
      </div>
      <div>
        <GPTsearchBar />
        <GPTmovieSuggestions />
      </div>
    </>
  );
};

export default GPTsearch;
