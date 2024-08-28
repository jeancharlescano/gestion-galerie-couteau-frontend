import React, { useRef } from "react";

import logoNOBg from "../assets/img/logo/Logo V2.png";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../utilities/userRequest";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();

  const registerUser = async (e) => {
    e.preventDefault();

    const newUserData = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    try {
      const result = await register(newUserData);
      if (result === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log("🚀 ~ registerUser ~ error:", error);
    }
  };

  return (
    <div className="first-line:h-screen w-screen justify-center items-center flex absolute">
      <section className="h-full  md:h-screen w-11/12 lg:w-1/3">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6">
            <div className="xl:w-10/12">
              <div className="block shadow-xl bg-gradient-to-b from-[#1A1E28] to-[#2E3D44] rounded-lg">
                <div className="px-4 md:px-0">
                  <div className="md:p-8">
                    <div className="text-center">
                      <img
                        className="mx-auto w-24 "
                        src={logoNOBg}
                        alt="logo"
                      />
                      <h4 className="text-xl text-white font-semibold mt-1 mb-6 pb-1">
                        Inscription
                      </h4>
                    </div>
                    <form onSubmit={registerUser}>
                      <div className="mb-4 flex justify-between w-full">
                        <input
                          type="text"
                          name="fistname"
                          className="form-control block w-[45%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="fistnameInput"
                          placeholder="Prénom"
                          ref={firstname}
                        />
                        <input
                          type="text"
                          name="lastname"
                          className="form-control block w-[45%] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="lastnameInput"
                          placeholder="Nom"
                          ref={lastname}
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="email"
                          name="email"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="emailInput"
                          placeholder="Email"
                          ref={email}
                        />
                      </div>
                      <div className="mb-8">
                        <input
                          type="password"
                          name="password"
                          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                          id="passwdInput"
                          placeholder="Password"
                          ref={password}
                        />
                      </div>
                      <div className="text-center pt-1 pb-1">
                        <button
                          className="inline-block px-6 py-2.5 text-black font-medium text-xs leading-tight uppercase bg-gradient-to-r from-gold to-[#ffedd4] rounded shadow-md hover:text-white hover:bg-transparent focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          type="submit"
                        >
                          S'inscrire
                        </button>
                      </div>
                      <div className="flex flex-col items-center justify-between pb-6 lg:pb-0">
                        <p className="mb-2 text-white">Déjè membre ?</p>
                        <Link
                          to="/login"
                          className="text-gold text-md hover:scale-105"
                        >
                          Se connecter
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

export default RegisterScreen;
