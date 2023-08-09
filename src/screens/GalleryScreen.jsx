import React from "react";
import { Link } from "react-router-dom";

import Santoku from "../assets/img/knifes/couteau-japonais-santoku-19-cm-kai-shun-classic-damas.jpg";
import KnifeCard from "../components/KnifeCard";

const GalleryScreen = () => {
  const knifesArr = [{ id: 0, title: "santoku", img: Santoku }];

  return (
    <div className=" min-h-screen h-auto bg-main-black p-4">
      <div className="h-24 flex items-center justify-end">
        <Link to="/knife/add" className="border-2 rounded-lg border-gold text-gold  flex items-center justify-center font-extrabold p-2 hover:border-none hover:bg-gold hover:text-main-black"><p>Nouveau</p></Link>
      </div>
      <div className="  grid content-start justify-items-center bg-center grid-cols-3 gap-y-16">
        {knifesArr.map((knife) => (
          <KnifeCard knife={knife}></KnifeCard>
        ))}
        
      </div>
    </div>
  );
};

export default GalleryScreen;
