import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" w-11/12 bg-white rounded-lg absolute mt-[40px] 
      px-10 py-3 text-center text-3xl font-bold">
        Random GIF
      </h1>
      <div className="flex flex-col w-full items-center " >
        <Random />
        <Tag />
      </div>
    </div>
  );
}
