import React from "react";
import { useNavigate } from "react-router";
const KnifeCard = ({ knife }) => {
  const navigate = useNavigate();

  return (
    <div
      key={knife.id}
      onClick={() =>
        navigate(`/gallery/${knife.id}`, { state: { knifeValues: knife } })
      }
      className="w-10/12 h-96 cursor-pointer flex flex-col justify-center shadow-xl rounded-3xl overflow-hidden"
    >
      <div className="h-4/6 bg-red-500 overflow-hidden">
        <img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="object-bottom"
        />
        {/* With animation */}
        {/*<img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="absolute left-0 h-full w-full p-4 object-contain duration-500 group"
        />
         <div className="absolute top-0 -right-full w-2/3 h-full  transition-all duration-1000 ease-out data p-2">
          <div className="h-full w-full text-white flex flex-col justify-evenly">
            <span>
              Lame : {knife.blade_material} de {knife.blade_length} cm
            </span>
            <span>
              Manche : {knife.handle_material} de {knife.handle_length} cm
            </span>
          </div>
        </div> */}
      </div>
      <div className="py-2 h-2/6 ">
        <p className="text-2xl text-gray-300 font-bold">
          {knife.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default KnifeCard;
