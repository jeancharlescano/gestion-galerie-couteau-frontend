import React from "react";

const AddKnife = () => {
  return (
    <div className="bg-main-black h-[calc(100vh-56px)] overflow-hidden flex justify-center">
      <div className="w-1/3 h-auto flex flex-col items-center mt-16 rounded-xl">
        <h1 className="text-gold font-bold text-4xl mt-4">Nouveau couteau</h1>
        <form className="mt-6 w-full flex flex-col items-center">
          <div className="flex flex-col w-4/5">
            <label
              htmlFor="nameKnife"
              className="text-white font-semibold text-md"
            >
              Nom
            </label>
            <input
              id="nameKnife"
              type="text"
              className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
              placeholder="nom du couteau"
            />
          </div>
          <div className="flex  w-4/5 mt-6 justify-between">
            <div className=" flex flex-col w-2/5 ">
              <label
                htmlFor="totalSize"
                className="text-white font-semibold text-md"
              >
                Materiau de la lame
              </label>
              <input
                id="materialBlade"
                type="text"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white "
                placeholder="matériaux"
              />
            </div>
            <div className=" flex flex-col w-2/5">
              <label
                htmlFor="materialBlade"
                className="text-white font-semibold text-md"
              >
                Taille de la lame
              </label>
              <input
                id="bladeSize"
                type="number"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
                placeholder="Taille en cm"
              />
            </div>
          </div>
          <div className="flex  w-4/5 mt-6 justify-between">
            <div className=" flex flex-col w-2/5 ">
              <label
                htmlFor="materialHandle"
                className="text-white font-semibold text-md"
              >
                Materiau du manche
              </label>
              <input
                id="materialHandle"
                type="text"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
                placeholder="matériaux"
              />
            </div>
            <div className=" flex flex-col w-2/5">
              <label
                htmlFor="handleSize"
                className="text-white font-semibold text-md"
              >
                Taille du manche
              </label>
              <input
                id="handleSize"
                type="number"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white "
                placeholder="taille en cm"
              />
            </div>
            
          </div>
          <div className="flex justify-between w-4/5 mt-6">
            <label
              htmlFor="nameKnife"
              className="text-white font-semibold text-md"
            >
              Image
            </label>
            <input
              id="nameKnife"
              type="file"
              className="bg-transparent border-white focus:outline-none p-0 text-white"
            />
          </div>
          <input type="submit" value="Créer" className=" cursor-pointer font-extrabold mt-8 border-2 border-gold rounded-xl px-10 py-2 text-gold hover:border-none hover:text-main-black hover:bg-gold" />
        </form>
      </div>
    </div>
  );
};

export default AddKnife;
