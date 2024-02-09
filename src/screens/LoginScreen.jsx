import React from "react";
import { Link } from "react-router-dom/dist";

import logoNOBg from "../assets/img/logoNOBg.png";

const LoginScreen = () => {
  const login = () => {
    // Ajoutez votre logique de connexion ici
  };

  const goToRegister = () => {
    // Ajoutez votre logique de redirection vers l'inscription ici
  };

  return (
    <div className="bg-main-black first-line:h-screen w-screen justify-center items-center flex absolute">
      <section className="h-full gradient-form bg-main-black md:h-screen w-11/12 lg:w-1/3">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block shadow-xl bg-gradient-to-b from-[#1A1E28] to-[#2E3D44] rounded-lg">
                <div className="px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 rounded-full"
                        src={logoNOBg}
                        alt="logo"
                      />
                      <h4 className="text-xl text-white font-semibold mt-1 mb-6 pb-1">
                        Coutellerie Tony
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4 text-white">
                        Veuillez vous connecter à votre compte
                      </p>
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="mailInput"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          name="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="passwdInput"
                          placeholder="Password"
                        />
                      </div>
                      <div className="text-center pt-1 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] rounded shadow-md hover:text-white hover:bg-transparent focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="button"
                          onClick={login}
                        >
                          Se connecter
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-between pb-6 lg:pb-0">
                        <p className="mb-2 text-white hover:underline cursor-pointer">
                          Pas encore de compte ?
                        </p>
                        <Link
                          to="/register"
                          className="inline-block px-6 py-2 border-2 border-[#AF7E39] text-[#AF7E39] font-medium text-xs leading-tight uppercase rounded  hover:bg-gradient-to-r from-[#AF7E39] to-[#ffedd4] hover:text-black hover:border-none focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          onClick={goToRegister}
                        >
                          S'inscrire
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginScreen;
