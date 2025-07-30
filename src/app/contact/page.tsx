'use client'

import React, { useRef } from "react";
import Header from "@/components/Header";
import { sendMail } from "@/utilities/mailRequest";

const ContactPage = () => {
  const firstname = useRef<HTMLInputElement>(null);
  const lastname = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const message = useRef<HTMLTextAreaElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstname.current || !lastname.current || !email.current || !message.current) {
      return;
    }

    const data = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      message: message.current.value,
    };

    await sendMail(data);
  };

  return (
    <>
      <Header activeNav={3} />
      <div className="lg:h-[calc(100vh-80px)] flex flex-col lg:flex-row items-center lg:px-20 pt-4">
        <div className="lg:w-1/2 lg:h-2/3 flex flex-col items-center ">
          <h1 className="text-2xl lg:text-7xl font-bold text-white">
            Contactez-Nous<span className="text-gold">.</span>
          </h1>
          <div className="lg:h-full lg:w-4/5 w-full lg:p-10 p-4 flex flex-col justify-evenly">
            <div className="flex item-center flex-col justify-evenly w-full h-1/3 border-l-4 lg:border-l-8 border-gold shadow-2xl lg:rounded-lg rounded-sm px-8 py-4 animate-slide-right">
              <p className="text-gray-400">commande / informations</p>
              <p className="text-white text-sm lg:text-md mt-2">
                Vous pouvez faire une commande parmis les couteau <br />{" "}
                Disponible dans la gallerie <br /> Ou une demande d'informations
              </p>
            </div>
            <div className="mt-4 flex item-center flex-col justify-evenly w-full h-1/3 border-l-4 lg:border-l-8 border-gold shadow-2xl lg:rounded-lg rounded-sm px-8 py-4 animate-slide-right">
              <p className="text-gray-400">Réponse</p>
              <p className="text-white text-sm lg:text-md mt-2">
                Nous nous efforçons de vous répondre dans les plus bref délais
                <br /> Nous répondons généralement sous 48h
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:h-2/3 h-96 lg:p-10 p-4">
          <div className="h-full w-full corner flex items-center justify-center animate-slide-left">
            <div className="flex justify-between lg:justify-center h-5/6 w-5/6 lg:w-4/6">
              <form
                onSubmit={sendEmail}
                className="h-full w-full flex flex-col items-center justify-between "
              >
                <div className="w-full flex items-center justify-between ">
                  <div className="w-1/3 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold">
                    <input
                      ref={firstname}
                      type="text"
                      placeholder="Prénom"
                      className="w-full text-white text-sm lg:text-lg border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                  </div>
                  <div className="w-1/3 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold">
                    <input
                      ref={lastname}
                      type="text"
                      placeholder="Nom"
                      className="w-full text-white text-sm lg:text-lg border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                  </div>
                </div>
                <div
                  className="
                 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold"
                >
                  <input
                    type="email"
                    ref={email}
                    placeholder="Adresse e-mail"
                    className="w-full text-white text-sm lg:text-lg border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                  />
                </div>
                <div
                  className="
                 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold"
                >
                  <textarea
                    placeholder="Votre message"
                    ref={message}
                    rows={4}
                    className="w-full text-white text-sm lg:text-lg border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <button
                    className="lg:h-[44px] h-8 w-1/2 lg:mb-3 p-[3px] relative no-underline bg-gradient-to-r from-gold to-black rounded-md shadow-md box-border text-xs text-white block  uppercase font-semibold  z-10 hover"
                    type="submit"
                  >
                    <span className="flex items-center bg-main-black h-full w-full rounded justify-center transition duration-200 ease-in-out txtbtn">
                      envoyer
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;