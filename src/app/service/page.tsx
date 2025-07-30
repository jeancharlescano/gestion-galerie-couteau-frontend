import React from "react";
import Header from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { faArrowRight, faScroll } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ServicePage = () => {
  return (
    <>
      <Header activeNav={2} />
      <div className="min-h-[calc(100vh-80px)] bg-[#232c33] px-4 py-8 flex items-center ">
        {/* Grille responsive : 1 colonne sur mobile, 3 sur md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 container mx-auto ">
          {/* Carte Hache */}
          <div className="h-96 w-92 bg-[#2e3942] shadow-2xl rounded-3xl p-8 flex flex-col justify-between text-white mx-auto">
            <Image
              width={50}
              height={50}
              src="https://img.icons8.com/ios/50/db2b39/small-axe.png"
              alt="small-axe"
            />
            <h2 className="font-extrabold text-xl">Hache</h2>
            <p className="">
              Nous proposons des haches de lancer, des hachettes, mais aussi des
              manches personnalisés.
            </p>
            <Link
              className=" text-gold font-bold hover:underline "
              href="/contact"
            >
              Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {/* Carte Couteau */}
          <div className="h-96 w-92 bg-gradient-to-b from-[#db2b39] to-black shadow-2xl rounded-3xl p-8 flex flex-col justify-between text-white mx-auto">
            <Image
              className="w-16 h-16"
              width={48}
              height={48}
              src="https://img.icons8.com/material-outlined/48/232C33/knife.png"
              alt="knife"
            />
            <h2 className="font-extrabold text-xl ">Couteau</h2>
            <p className=" font-medium">
              Allant du couteau de lancer au bushcraft, nous saurons répondre à
              vos besoins.
            </p>
            <Link
              className="text-white font-bold hover:underline "
              href="/contact"
            >
              Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {/* Carte Conseil */}
          <div className="h-96 w-92 bg-[#2e3942] shadow-2xl rounded-3xl p-8 flex flex-col justify-between text-white mx-auto">
            <FontAwesomeIcon
              className=" text-gold self-start"
              size="3x"
              icon={faScroll}
            />
            <h2 className="font-extrabold text-xl">Conseil</h2>
            <p className="">
              Nous pouvons répondre à vos questions concernant la fabrication de
              couteaux.
            </p>
            <Link
              className="text-gold font-bold hover:underline "
              href="/contact"
            >
              Contactez-nous <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;