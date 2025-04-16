import React, { useContext, useState } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteKnife } from "../utilities/knifeRequest";
import AuthContext from "../context/authContext";

const DetailKnife = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const knifeValues = location.state?.knifeValues;

  const delKnife = async () => {
    try {
      await deleteKnife(knifeValues.id);
    } catch (error) {
      console.error("Error deleting knife:", error);
    }
  };

  return (
    <>
      <Header activeNav={1} />
      <div className="min-h-screen bg-[#232c33] text-white">
        {/* Image */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-[#2e3942]">
          <img
            src={`data:image/png;base64, ${knifeValues.img}`}
            alt={knifeValues.name}
            className="max-h-[95%] object-contain rounded"
          />
          {user?.isAdmin && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-[#db2b39] hover:bg-red-700 text-white px-4 py-2 rounded shadow"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={delKnife}
                className="bg-[#db2b39] hover:bg-red-700 text-white px-4 py-2 rounded shadow"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#db2b39] mb-10 text-center">
            {knifeValues.name.toUpperCase()}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem label="Type de lame" value={knifeValues.blade_material} />
            <InfoItem
              label="Taille de la lame"
              value={`${knifeValues.blade_length} cm`}
            />
            <InfoItem
              label="Type de manche"
              value={knifeValues.handle_material}
            />
            <InfoItem
              label="Taille du manche"
              value={`${knifeValues.handle_length} cm`}
            />
          </div>

          <div className="mt-12 border-t border-[#db2b39] pt-8">
            <h2 className="text-2xl font-semibold text-[#db2b39] mb-4">
              Description
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {knifeValues.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <h3 className="text-lg md:text-xl font-semibold text-[#db2b39]">{label}</h3>
    <p className="text-base text-gray-300">{value}</p>
  </div>
);

export default DetailKnife;
