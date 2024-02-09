import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

import KnifeCard from "../components/KnifeCard";
import Header from "../components/Header";
import { getAllKnifes } from "../utilities/knifeRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const GalleryScreen = () => {
  console.log(process.env.REACT_APP_API_URL);
  const { data, error } = useSWR(
    `${process.env.REACT_APP_API_URL}/knife/`,
    getAllKnifes
  );

  if (error)
    return (
      <>
        <Header activeNav={1} />
        <div className=" min-h-screen h-[calc(100vh-56px)] bg-main-black p-4">
          <div className="h-24 flex items-center justify-end">
            <Link
              to="/knife/add"
              className="border-2 rounded-lg border-gold text-gold  flex items-center justify-center font-extrabold p-2 hover:border-none hover:bg-gold hover:text-main-black"
            >
              <p>Nouveau</p>
            </Link>
          </div>
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
        <FontAwesomeIcon className="w-14 h-14 text-white animate-spin" icon={faSpinner}/>
      </div>
    );
  }

  return (
    <>
      <Header activeNav={1} />
      <div className=" min-h-screen h-auto bg-main-black p-4">
        <div className="h-24 flex items-center justify-end">
          <Link
            to="/knife/add"
            className="border-2 rounded-lg border-gold text-gold  flex items-center justify-center font-extrabold p-2 hover:border-none hover:bg-gold hover:text-main-black"
          >
            <p>Nouveau</p>
          </Link>
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
