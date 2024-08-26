import React from "react";
import { useNavigate } from "react-router-dom";
const KnifeCard = ({ knife }) => {
  console.log("🚀 ~ KnifeCard ~ knife:", knife);
  const navigate = useNavigate();

  return (
    <div
      key={knife.id}
      onClick={() =>
        navigate(`/gallery/${knife.id}`, { state: { knifeValues: knife } })
      }
      className="w-10/12 transition-all h-80 cursor-pointer flex flex-col justify-center display shadow-xl"
    >
      <div className="h-4/6 w-full relative overflow-hidden ">
        {/* <img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
        /> */}
        <img
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
        </div>
      </div>
      <div className="py-2 h-2/6">
        <p className="text-2xl text-gray-300 font-bold">
          {knife.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default KnifeCard;
