'use client'

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import ornement from "@/assets/img/logo/Logo ornement V2.png";
import knife from "@/assets/img/logo/Logo couteau V2.png";
import background from "@/assets/img/background/background.png";
import smokeImg from "@/assets/img/background/Fumee.png";
import bacTrempe from "@/assets/img/background/Front.png";
import forging from "@/assets/img/forging.jpeg";
import daozi from "@/assets/img/knifes/machoir.jpg";
import chief from "@/assets/img/knifes/chief.jpg";
import bushcraft from "@/assets/img/knifes/bushcraft.png";
import hache from "@/assets/img/knifes/hache.jpg";

const HomePage = () => {
  const logo = useRef<HTMLImageElement>(null);
  const smoke = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = window.scrollY;

      const limitedScroll = Math.min(Math.max(scroll, 0), 200);
      const rotation = (limitedScroll / 200) * 137;

      if (logo.current) {
        logo.current.style.transform = `rotate(${rotation}deg)`;
        logo.current.style.marginTop = `${scroll * 0.8}px`;
      }
      if (smoke.current) {
        smoke.current.style.marginTop = `-${scroll / 1.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="relative h-screen bg-main-black overflow-hidden flex justify-center items-center ">
        <Image
          src={background}
          className="absolute inset-0 object-cover z-0"
          alt="background"
          fill
        />
        <Image
          ref={smoke}
          src={smokeImg}
          className="absolute inset-0 object-cover z-20"
          alt="background"
          fill
        />
        <Image
          src={bacTrempe}
          className="absolute inset-0 object-cover z-30"
          alt="background"
          fill
        />
        <div className="absolute top-40 flex flex-col items-center">
          <p className=" font text-white font-medium text-7xl tracking-widest">
            Lame De Tony
          </p>
          <div className="relative">
            <Image className="absolute h-72 w-auto" src={ornement} alt="logo" />
            <Image
              className=" relative h-72 w-auto z-20"
              ref={logo}
              src={knife}
              alt="logo"
            />
          </div>
        </div>
      </section>

      {/* PRESENTATION */}
      <section
        id="pres"
        className=" flex items-center px-[10%] py-[5%] h-screen bg-main-black"
      >
        <div className="flex items-center justify-between h-full w-full">
          <p className="w-1/2 pr-[10%] text-white text-xl font-semibold animate-slide-right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            exercitationem rerum autem repudiandae nam alias amet facere iste.
            Cupiditate eos dignissimos cumque tempore, illo in deleniti fugit
            nesciunt quidem quasi!
          </p>
          <div className="h-[25rem] w-[25rem] bg-gradient-to-r from-gold to-black rounded-full flex items-center justify-center opacity-0 anim-delay animate-slide-top">
            <div className="h-96 w-96 rounded-full flex justify-center items-center overflow-hidden ">
              <Image src={forging} alt="forging" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIE */}
      <section
        id="gallery"
        className="flex items-center px-[15%] py-[5%] h-screen bg-main-black-lighter "
      >
        <div className="flex items-center justify-between h-full w-full">
          <div className="w-96 h-96">
            <div className="flex h-1/2 ">
              <div
                id="knifes"
                className=" w-1/2 h-full mb-1 mr-1 overflow-hidden rounded-lg bg-white"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={daozi}
                  alt="daozi"
                />
              </div>
              <div
                id="knifes"
                className=" w-1/2 h-full mb-1 ml-1 overflow-hidden rounded-lg bg-white"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={bushcraft}
                  alt="bushcraft"
                />
              </div>
            </div>
            <div className="flex h-1/2">
              <div
                id="knifes"
                className=" w-1/2 h-full mt-1 mr-1 overflow-hidden rounded-lg bg-white"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={chief}
                  alt="chief"
                />
              </div>
              <div
                id="knifes"
                className=" w-1/2 h-full mt-1 ml-1 overflow-hidden rounded-lg bg-white"
              >
                <Image
                  className="w-full h-full object-contain"
                  src={hache}
                  alt="hache"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-[50%] pl-[10%] flex justify-evenly  flex-col items-center">
            <p className="text-right text-white text-xl font-semibold animate-slide-right">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
              exercitationem rerum autem repudiandae nam alias amet facere iste.
              Cupiditate eos dignissimos cumque tempore, illo in deleniti fugit
              nesciunt quidem quasi!
            </p>
            <Link
              href="/gallery"
              className=" bg-gradient-to-r from-gold to-black rounded-md box-border text-white block h-12 text-xl p-[3px] relative no-underline w-28 z-10 hover"
            >
              <span className="flex items-center bg-main-black-lighter h-full w-full rounded justify-center transition-all txtbtn">
                Gallerie
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;