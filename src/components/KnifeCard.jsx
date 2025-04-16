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
      className="w-11/12 h-[35rem] cursor-pointer flex flex-col justify-center shadow-xl rounded-3xl overflow-hidden  transition duration-500 ease-in-out transform hover:scale-101 hover:shadow-xl"
    >
      <div className="h-5/6 bg-red-500 overflow-hidden">
        <img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="object-center object-cover h-full"
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
      <div className="py-2 h-1/6 flex items-center p-2 justify-between">
        <p className="text-2xl text-gray-300 font-bold">
          {knife.name.toUpperCase()}
        </p>
        {knife.price && (
          <p className="texxt-xl text-gray-300 font-semibold">
            {knife.price} €
          </p>
        )}
      </div>
    </div>
  );
};

export default KnifeCard;
