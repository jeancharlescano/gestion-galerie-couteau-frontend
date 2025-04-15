import React, { useContext } from "react";
import { Link } from "react-router";
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
    `${import.meta.env.VITE_REACT_APP_API_URL}/knife/`,
    getAllKnifes
  );

  if (error)
    return (
      <>
        <Header activeNav={1} />
        <div className=" min-h-screen h-[calc(100vh-56px)] bg-main-black p-4">
          <div className=" w-full h-full flex justify-center bg-center text-white">
            <div>Erreur, revenez plus tard !</div>
          </div>
        </div>
      </>
    );
  if (!data) {
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
            user.isAdmin === true ? (
              <Link
                to="/knife/add"
                className=" bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] rounded box-border text-white block font-medium p-[2px] mr-4 relative no-underline z-10 hover"
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  className="flex items-center bg-[#29353D] h-8 w-8 rounded justify-center transition duration-200 ease-in-out txtbtn"
                />
              </Link>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
        </div>
        <div className="grid content-start justify-items-center bg-center grid-cols-4 gap-y-16">
          {data.map((knife) => (
            <KnifeCard key={knife.id} knife={knife}></KnifeCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryScreen;
