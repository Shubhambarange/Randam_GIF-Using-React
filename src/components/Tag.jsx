import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
export default function Tag() {
  const [tag, setTag] = useState("car");
  const { gif, loading, fetchData } = useGif(tag);
  return (
    <div className="w-1/2 bg-blue-500 mt-[160px] flex flex-col items-center border border-black gap-y-5">
      <h1 className="mt-[15px] text-3xl font-bold underline uppercase">
        Random Gif {tag}
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <div className="w-[450px] h-[450px] flex justify-center items-center">
          {" "}
          <img
            src={gif}
            width="450"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}

      <input
        placeholder="Enter your thoughts"
        className="w-10/12 rounded-lg py-2 text-lg font-bold text-black mb-[3px] text-center"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-10/12 rounded-lg py-2 text-3xl font-bold bg-white mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
