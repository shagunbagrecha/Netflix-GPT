import { VscInfo } from "react-icons/vsc";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[30%] md:pt-[20%] px-12 md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-3xl md:text-6xl text-center md:text-left font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/2">{overview}</p>
      <div className="mt-4 md:mt-0 flex justify-center md:justify-normal">
        <button className="bg-white text-black py-1 px-4 md:py-2 md:px-8 rounded-lg text-2xl hover:bg-opacity-80">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="hidden md:inline-block mx-4 bg-gray-500 text-white py-2 px-8 rounded-lg bg-opacity-50 text-2xl hover:bg-opacity-80">
          <VscInfo className="inline text-2xl mr-2 mb-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
