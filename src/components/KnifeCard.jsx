import React from "react";
import { useNavigate } from "react-router-dom";

const KnifeCard = ({ knife }) => {
  const navigate = useNavigate();

  return (
    <div
      key={knife.id}
      onClick={() => navigate(`/gallery/${knife.id}`,  { state: { knifeValues: knife } })}
      className="w-11/12 transition-all h-96 cursor-pointer text-white border-gold border-2 rounded-xl flex flex-col justify-center hover:scale-105 group"
    >
      <div className="h-4/6 w-full border-b-2 border-gold relative ">
        <img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
        />
      </div>
      <div className="h-2/6 flex justify-center items-center">
        <p className="text-4xl text-white font-bold group-hover:underline ">
          {knife.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default KnifeCard;
