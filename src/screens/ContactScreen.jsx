import React from "react";
import Header from "../components/Header";
const ContactScreen = () => {
  return (
    <>
      <Header activeNav={3} />
      <div className="h-[calc(100vh-80px)] flex justify-center items-center px-20 ">
        <div className="w-1/2 h-2/3 ">
          <h1 className="text-7xl font-bold text-white">
            Contactez-Nous<span className="text-gold">.</span>
          </h1>
          <div className="h-full w-4/5  p-10 flex flex-col justify-evenly">
            <div className="flex item-center flex-col justify-evenly w-full h-1/3 border-l-8 border-gold shadow-2xl rounded-lg px-8 py-4 animate-slide-right">
              <p className="text-gray-400">commande / informations</p>
              <p className="text-white mt-2">
                Vous pouvez faire une commande parmis les couteau <br />{" "}
                Disponible dans la gallerie <br /> Ou une demande d'informations
              </p>
            </div>
            <div className="flex item-center flex-col justify-evenly w-full h-1/3 border-l-8 border-gold shadow-2xl rounded-lg px-8 py-4 animate-slide-right">
              <p className="text-gray-400">Réponse</p>
              <p className="text-white mt-2">
                Nous nous efforçons de vous répondre dans les plus bref délais
                <br /> Nous répondons généralement sous 48h
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-2/3 p-10">
          <div className="h-full w-full corner flex items-center justify-center animate-slide-left">
            <div className="flex justify-center h-5/6 w-4/6 ">
              <form
                onSubmit=" "
                className="h-full w-full flex flex-col items-center justify-between "
              >
                <div className="w-full flex items-center justify-between ">
                  <div class="w-1/3 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold">
                    <input
                      type="text"
                      placeholder="Prénom"
                      class="w-full text-white border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                  </div>
                  <div class="w-1/3 transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold">
                    <input
                      type="text"
                      placeholder="Nom"
                      class="w-full text-white border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                    />
                  </div>
                </div>
                <div
                  class="
                 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold"
                >
                  <input
                    type="email"
                    placeholder="Adresse e-mail"
                    class="w-full text-white border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                  />
                </div>
                <div
                  class="
                 w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-gold"
                >
                  <textarea
                    placeholder="Votre message"
                    rows="4"
                    class="w-full text-white border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                  />
                </div>
                <div className="w-full flex items-center justify-center">
                  <button
                    className="self-center  inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] rounded shadow-md hover:text-white hover:bg-transparent focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-1/2 mb-3"
                    type="submit"
                  >
                    Envoyer
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

export default ContactScreen;
