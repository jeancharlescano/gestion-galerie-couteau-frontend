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
      className="w-full max-w-sm sm:max-w-xs md:max-w-sm cursor-pointer flex flex-col justify-between shadow-xl rounded-3xl overflow-hidden bg-[#2e3942] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={knife.img}
          alt={`Image de ${knife.name}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 p-4">
        <p className="text-lg sm:text-xl text-gray-300 font-semibold first-letter:uppercase truncate w-full">
          {knife.name}
        </p>
        {knife.price && (
          <p className="text-base sm:text-lg text-gray-300 font-medium">
            {knife.price} €
          </p>
        )}
      </div>
    </div>
  );
};

export default KnifeCard;
