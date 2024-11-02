import React from "react";
import { Button } from "./ui/MovingBorders";

const Prize = () => {
  return (
    <div className="w-full flex justify-center items-center mb-20">
      <div className="w-full px-6 flex flex-col items-center">
        {" "}
        {/* Removed max-width */}
        <h1 className="heading text-center mb-8">
          Prize<span className="text-purple">Pool</span>
        </h1>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          className="py-4 px-6 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex justify-center items-center" // Smaller padding for a snug fit
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {" "}
            {/* Reduced gap and padding */}
            <img
              src="LW.png"
              alt="Thumbnail"
              className="w-1/4 md:w-20 lg:w-24"
            />
            <div className="text-center lg:text-start">
              <h1 className="text-4vw md:text-4xl lg:text-6xl font-bold">
                200000 IND
              </h1>
            </div>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Prize;
