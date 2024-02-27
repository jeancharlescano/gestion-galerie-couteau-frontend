import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import KnifeCard from "../components/KnifeCard";
import Header from "../components/Header";
import { getAllKnifes } from "../utilities/knifeRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../context/authContext";

const GalleryScreen = () => {
  let { user } = useContext(AuthContext);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/knife/`,
    getAllKnifes
  );

  if (error)
    return (
      <>
        <Header activeNav={1} />
        <div className=" min-h-screen h-[calc(100vh-56px)] bg-main-black p-4">
          <div className=" w-full h-full flex justify-center bg-center text-white">
            <div>failed to load</div>
          </div>
        </div>
      </>
    );
  if (!data) {
    console.log(
      "🚀 ~ file: GalleryScreen.jsx:33 ~ GalleryScreen ~ data:",
      data
    );
    return (
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <FontAwesomeIcon
          className="w-14 h-14 text-white animate-spin"
          icon={faSpinner}
        />
      </div>
    );
  }

  return (
    <>
      <Header activeNav={1} />
      <div className=" min-h-screen h-auto bg-main-black p-4">
        <div className="h-24 flex items-center justify-end">
          {user ? (
            <Link
              to="/knife/add"
              className=" rounded bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] flex items-center justify-center font-extrabold p-2  hover:text-white"
            >
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          ) : (
            <></>
          )}
        </div>
        <div className="  grid content-start justify-items-center bg-center grid-cols-3 gap-y-16">
          {data.map((knife) => (
            <KnifeCard key={knife.id} knife={knife}></KnifeCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryScreen;
