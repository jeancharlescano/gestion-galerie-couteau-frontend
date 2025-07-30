'use client'

import React, { useContext } from "react";
import Link from "next/link";
import useSWR from "swr";

import KnifeCard from "@/components/KnifeCard";
import Header from "@/components/Header";
import { getAllKnifes } from "@/utilities/knifeRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "@/context/authContext";

const GalleryPage = () => {
  const { user } = useContext(AuthContext);
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL}/knife/`,
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
      <>
        <Header activeNav={1} />
        <div className="h-screen bg-[#232c33] flex items-center justify-center">
          <FontAwesomeIcon
            icon={faSpinner}
            size="3x"
            spin={true}
            color="#db2b39"
          />
        </div>
      </>
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
              href="/knife/add"
              className="flex items-center gap-2 bg-gradient-to-r from-gold to-black hover:bg-red-700 text-white font-medium p-0.5 rounded shadow transition"
            >
              <FontAwesomeIcon
                className="bg-[#232c33] p-1 hover:bg-transparent"
                icon={faPlus}
                size="lg"
              />
            </Link>
          </div>
        )}

        {/* Grille responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((knife: any) => (
            <KnifeCard key={knife.id} knife={knife} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GalleryPage;