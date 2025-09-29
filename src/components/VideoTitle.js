import { VscInfo } from "react-icons/vsc";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 rounded-lg text-2xl hover:bg-opacity-80">
          <span className="mr-2">▶</span> Play
        </button>
        <button className="mx-4 bg-gray-500 text-white py-2 px-8 rounded-lg bg-opacity-50 text-2xl hover:bg-opacity-80">
          <VscInfo className="inline text-2xl mr-2 mb-1" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
