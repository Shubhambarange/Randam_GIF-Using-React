import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {

  // ememinate the code by Custom Hook

  // const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

  // const [gif, setGif] = useState('');

  // const[loading, setloading] = useState(false)

  // async function fetchData(){
  //   setloading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   try {
  //     const { data } = await axios.get(url);
  //     const imageSource = data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     console.log(data);
  //     setloading(false)
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // Custum Hook Used
  const{ gif, loading, fetchData } = useGif()



  return (
    <div className="w-1/2 bg-green-500 mt-[160px] flex flex-col items-center border border-black gap-y-5">
      <h1 className="mt-[20px] text-3xl font-bold underline uppercase">A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<div className="w-[450px] h-[450px] flex justify-center items-center">
        <img src={gif} width="100%" height="100%" style={{ objectFit: "contain" }}></img>
      </div>)
      }
      <button onClick={()=> fetchData()} className="w-10/12 rounded-lg py-2 text-3xl font-bold bg-white mb-[20px]">
        Generate
      </button>
    </div>
  );
}
