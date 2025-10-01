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
    <div>
      <img className="-z-10 fixed" src={BACKDROP} alt="Background" />
      <GPTsearchBar />
      <div>
        <GPTmovieSuggestions />
      </div>
    </div>
  );
};

export default GPTsearch;
