import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  return (
    <>
      <div className="flex items-center flex-wrap flex-col mt-3 lg:mt-5">
        <h1 className="text-4xl sm:text-3xl lg:text-5xl text-center tracking-wide">
          virtualV buil tools{" "}
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            for <br />
            developers
          </span>
        </h1>
        <p className="text-sm mt-7 text-center text-neutral-600 max-w-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
          suscipit officiis sequi quasi quia, ipsa officia soluta aperiam autem
          inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Illo suscipit officiis sequi quasi quia, ipsa officia soluta aperiam
          autem inventore.
        </p>
        <div className="flex items-center my-7 space-x-2 max-w-4xl">
          <a
            href="#"
            className="text-sm bg-orange-600 py-1 px-3 hover:bg-gradient-to-r from-orange-500 to-red-800 hover:text-slate-400 rounded-md"
          >
            start free
          </a>
          <a
            href="#"
            className=" py-1 px-3 border rounded-md text-sm hover:text-slate-400 "
          >
            ducumentation
          </a>
        </div>
        <div className="flex justify-center max-w-4xl">
          <video
            loop
            muted
            autoPlay
            className="rounded-lg border border-orange-500 shadow-orange-700 w-1/2 my-4 mx-2"
          >
            <source src={video1} type="video/mp4" />
          </video>
          <video
            loop
            muted
            autoPlay
            className="rounded-lg border border-orange-500 shadow-orange-700 w-1/2 my-4 mx-2"
          >
            <source src={video2} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Herosection;
