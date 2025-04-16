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
      <div className="min-h-[100vh] bg-[#111111] text-white">
        <div className="relative w-full h-[500px] bg-gradient-to-br from-[#1f1f1f] to-[#2a2a2a] flex items-center justify-center">
          <img
            src={`data:image/png;base64, ${knifeValues.img}`}
            alt={knifeValues.name}
            className="max-h-[80%] object-contain"
          />
          {user?.isAdmin && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-gold hover:bg-[#AF7E39] text-black px-4 py-2 rounded shadow"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={delKnife}
                className="bg-gold hover:bg-[#AF7E39] text-black px-4 py-2 rounded shadow"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>

        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gold mb-8 text-center">
            {knifeValues.name.toUpperCase()}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InfoItem label="Type de lame" value={knifeValues.blade_material} />
            <InfoItem label="Taille de la lame" value={`${knifeValues.blade_length} cm`} />
            <InfoItem label="Type de manche" value={knifeValues.handle_material} />
            <InfoItem label="Taille du manche" value={`${knifeValues.handle_length} cm`} />
          </div>

          <div className="mt-12 border-t border-gold pt-8">
            <h2 className="text-2xl font-semibold text-gold mb-4">Description</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
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
    <h3 className="text-xl font-semibold text-gold">{label}</h3>
    <p className="text-lg text-gray-300">{value}</p>
  </div>
);

export default DetailKnife;




/* import React, { useContext, useState } from "react";
import { useLocation } from "react-router";

import Header from "../components/Header";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteKnife } from "../utilities/knifeRequest";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import AuthContext from "../context/authContext";

const DetailKnife = () => {
  let { user } = useContext(AuthContext);
  const location = useLocation();
  const [isEdit, setIsEdit] = useState(false);
  const knifeValues = location.state?.knifeValues;
  console.log(
    "🚀 ~ file: DetailKnife.jsx:7 ~ DetailKnife ~ knifeValues:",
    knifeValues
  );

  const delKnife = async () => {
    try {
      console.log("🚀 ~ deleteKnife ~ knifeValues.id:", knifeValues.id);
      const result = await deleteKnife(knifeValues.id);
      console.log("🚀 ~ deleteKnife ~ result:", result);
    } catch (error) {
      console.log("🚀 ~ file: AddKnife.jsx:54 ~ onSubmit ~ error:", error);
    }
  };

  return (
    <>
      <Header activeNav={1} />
      <div className=" h-auto min-h-[calc(100vh+80px)] flex flex-col items-center p-4">
        <div className="w-full flex items-center justify-end">
          {user ? (
            user.isAdmin === true ? (
              <>
                <button
                  className="rounded bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] flex items-center justify-center font-extrabold p-2  hover:text-white"
                  onClick={() => setIsEdit(!isEdit)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button
                  className="ml-2 rounded bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] flex items-center justify-center font-extrabold p-2  hover:text-white"
                  onClick={() => delKnife()}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="w-2/4 h-auto flex flex-col items-center mt-6">
          {isEdit ? (
            <>toto</>
          ) : (
            <>
              <div className="w-5/6 h-96 relative shadow-2xl">
                <img
                  src={`data:image/png;base64, ${knifeValues.img}`}
                  alt=""
                  className="absolute top-0 left-0 w-full h-full object-contain   "
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailKnife;
*/