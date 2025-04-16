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
  const { user } = useContext(AuthContext);
  const { data, error } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}/knife/`,
    getAllKnifes
  );

  if (error)
    return (
      <>
        <Header activeNav={1} />
        <div className="min-h-screen bg-[#232c33] flex items-center justify-center text-white text-lg">
          Erreur de chargement, veuillez réessayer plus tard.
        </div>
      </>
    );

  if (!data) {
    return (
      <div className="h-screen bg-[#232c33] flex items-center justify-center">
        <FontAwesomeIcon
          icon={faSpinner}
          className="w-10 h-10 text-white animate-spin"
        />
      </div>
    );
  }

  return (
    <>
      <Header activeNav={1} />
      <div className="min-h-screen bg-[#232c33] px-4 sm:px-6 lg:px-12 py-8">
        {/* Bouton Ajouter */}
        {user?.isAdmin && (
          <div className="flex justify-end mb-6">
            <Link
              to="/knife/add"
              className="flex items-center gap-2 bg-[#db2b39] hover:bg-red-700 text-white font-medium py-2 px-4 rounded shadow transition"
            >
              <FontAwesomeIcon icon={faPlus} />
              <span className="hidden sm:inline">Ajouter un couteau</span>
            </Link>
          </div>
        )}

        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((knife) => (
            <KnifeCard key={knife.id} knife={knife} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryScreen;
