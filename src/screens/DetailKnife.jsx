import React from "react";
import { useLocation } from "react-router-dom";

import Header from "../components/Header";

const DetailKnife = () => {
  const location = useLocation();
  const knifeValues = location.state?.knifeValues;
  console.log(
    "🚀 ~ file: DetailKnife.jsx:7 ~ DetailKnife ~ knifeValues:",
    knifeValues
  );

  return (
    <>
      <Header activeNav={1} />
      <div className="bg-gradient-to-b from-main-black to-black-lighter h-auto flex flex-col items-center">
        <div className="w-2/4 h-auto flex flex-col items-center mt-12">
          <div className="w-full h-96 relative">
            <img
              src={`data:image/jpeg;base64, ${knifeValues.img}`}
              alt=""
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
          </div>
          <h1 className="text-3xl w-full mt-6 text-white font-bold">
            {knifeValues.name.toUpperCase()}
          </h1>
          <div id="Description" className="pl-4 w-full h-auto mt-12">
            <div id="spacer" className=" w-1/3 h-1 bg-gold rounded"></div>
            <div className="my-4 flex">
              <h2 className="text-lg text-white font-semibold">
                Type de lame :&nbsp;
              </h2>
              <h2 className="text-lg text-white">
                {knifeValues.blade_material}
              </h2>
            </div>
            <div id="spacer" className=" w-1/3 h-1 bg-gold rounded"></div>
            <div className="my-4 flex">
              <h2 className="text-lg text-white font-semibold">
                Taille de la lame :&nbsp;
              </h2>
              <h2 className="text-lg text-white">
                {knifeValues.blade_length} cm
              </h2>
            </div>
            <div id="spacer" className=" w-1/3 h-1 bg-gold rounded"></div>
            <div className="my-4 flex">
              <h2 className="text-lg text-white font-semibold">
                Type de manche :&nbsp;
              </h2>
              <h2 className="text-lg text-white">
                {knifeValues.handle_material}
              </h2>
            </div>
            <div id="spacer" className=" w-1/3 h-1 bg-gold rounded"></div>
            <div className="my-4 flex">
              <h2 className="text-lg text-white font-semibold">
                Taille du manche:&nbsp;
              </h2>
              <h2 className="text-lg text-white">
                {knifeValues.handle_length} cm
              </h2>
            </div>
            <div id="spacer" className=" w-1/3 h-1 bg-gold rounded"></div>
            <div className="my-4 flex flex-col">
              <h2 className="text-lg text-white font-semibold">
                Description :&nbsp;
              </h2>
              <h2 className="text-lg text-white mb-20">
                {knifeValues.description}{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailKnife;
