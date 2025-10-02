import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  const fullUrl = posterPath ? `${IMG_CDN_URL}${posterPath}` : null;
  if (!posterPath) return;
  return (
    <div className="w-36 md:w-48 pr-4 flex-shrink-0 rounded-md overflow-hidden hover:scale-105 transition-transform duration-300">
      {posterPath && <img alt="movie-poster" src={fullUrl} />}
    </div>
  );
};

export default MovieCard;
