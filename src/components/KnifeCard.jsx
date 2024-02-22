import React from "react";
import { useNavigate } from "react-router-dom";
import toto from "../assets/img/knifes/santoku.png";
const KnifeCard = ({ knife }) => {
  const navigate = useNavigate();

  return (
    <div
      key={knife.id}
      onClick={() =>
        navigate(`/gallery/${knife.id}`, { state: { knifeValues: knife } })
      }
      className="w-11/12 transition-all h-96 cursor-pointer text-white border-gold border-2 rounded-xl flex flex-col justify-center hover:scale-105  display"
    >
      <div className="h-4/6 w-full border-b-2 border-gold relative bg-white rounded-t-xl overflow-hidden">
        {/* <img
          src={`data:image/jpeg;base64, ${knife.img}`}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
        /> */}
        <img
          src={toto}
          alt=""
          className="absolute w-full left-0 h-full object-cover duration-500 group"
        />
        <div className="absolute top-0 -right-full w-1/2 h-full bg-blue-600 transition-all duration-1000 ease-out data"> </div>
      </div>
      <div className="h-2/6 flex justify-center items-center">
        <p className="text-4xl text-white font-bold">
          {knife.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default KnifeCard;
