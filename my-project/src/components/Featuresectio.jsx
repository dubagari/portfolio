import { features } from "../constants";
import { GlobeLock } from "lucide-react";

const Feature = () => {
  return (
    <div className=" mt-10 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="uppercase bg-neutral-700 text-orange-600 rounded-full h-6 text-sm py-2 px-3">
          feature
        </span>
        <h2 className="text-3xl sm:text-2xl lg:text-4xl text-center  mt-10 capitalize">
          easily buil{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className=" mt-10 h-10 lg:mt-20 ">
        <div className="w-full flex flex-wrap ">
          {features.map((items, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3 " key={index}>
              <div className="flex justify-center py-2 px-4 w-[20rem]">
                <div className="bg-neutral-500-400 mr-4 px-2  py-2 rounded-full h-7 w-7 text-orange-500">
                  {items.icon}
                </div>
                <div>
                  <h5 className="text-sm mt-1 mb-4">{items.text}</h5>
                  <p className="text-sm p-2 mb-10">{items.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
