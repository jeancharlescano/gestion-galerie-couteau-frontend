import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useRef } from "react";
import { useNavigate } from "react-router";

import Header from "../components/Header";
import { createKnife } from "../utilities/knifeRequest";

const AddKnife = () => {
  // const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();
  const name = useRef();
  const bladeMaterial = useRef();
  const bladeLenght = useRef();
  const handleMaterial = useRef();
  const handleLenght = useRef();
  const description = useRef();
  const imageFile = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    imageFile.current = file;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name.current.value);
    formData.append("description", description.current.value);
    formData.append("bladeMaterial", bladeMaterial.current.value);
    formData.append("bladeLenght", bladeLenght.current.value);
    formData.append("handleMaterial", handleMaterial.current.value);
    formData.append("handleLenght", handleLenght.current.value);

    if (imageFile.current) {
      formData.append("knifePic", imageFile.current);
    }

    try {
      const result = await createKnife(formData);
      if (result) navigate("/gallery");
    } catch (error) {
      console.log("🚀 ~ file: AddKnife.jsx:54 ~ onSubmit ~ error:", error);
    }
  };

  return (
    <>
      <Header activeNav={1} />

      <div className="h-[calc(100vh-56px)] overflow-hidden flex flex-col items-center">
        <div className="h-11 w-full px-5 flex items-center">
          <FontAwesomeIcon
            icon={faCircleArrowLeft}
            style={{ color: "#AF7E39" }}
            onClick={() => navigate("/gallery")}
            className="w-10 h-10 cursor-pointer hover:scale-110 transition-all"
          />
        </div>
        <div className="w-1/3 h-auto flex flex-col items-center mt-10 rounded-xl">
          <h1 className="text-gold font-bold text-4xl mt-4">Nouveau couteau</h1>
          <form
            onSubmit={onSubmit}
            className="mt-6 w-full flex flex-col items-center"
          >
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
                ref={name}
                placeholder="Nom du couteau"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
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
                  id="bladeMaterial"
                  type="text"
                  ref={bladeMaterial}
                  placeholder="Matériaux"
                  className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white "
                />
              </div>
              <div className=" flex flex-col w-2/5">
                <label
                  htmlFor="bladeMaterial"
                  className="text-white font-semibold text-md"
                >
                  Taille de la lame
                </label>
                <input
                  id="bladeLenght"
                  ref={bladeLenght}
                  type="number"
                  step="0.01"
                  pattern="\d+(\.\d{0,2})?"
                  className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
                  placeholder="Taille en cm"
                />
              </div>
            </div>
            <div className="flex  w-4/5 mt-6 justify-between">
              <div className=" flex flex-col w-2/5 ">
                <label
                  htmlFor="handleMaterial"
                  className="text-white font-semibold text-md"
                >
                  Materiau du manche
                </label>
                <input
                  id="handleMaterial"
                  type="text"
                  ref={handleMaterial}
                  placeholder="Matériaux"
                  className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white"
                />
              </div>
              <div className=" flex flex-col w-2/5">
                <label
                  htmlFor="handleLenght"
                  className="text-white font-semibold text-md"
                >
                  Taille du manche
                </label>
                <input
                  id="handleLenght"
                  ref={handleLenght}
                  type="number"
                  step="0.01"
                  pattern="\d+(\.\d{0,2})?"
                  className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white "
                  placeholder="Taille en cm"
                />
              </div>
            </div>
            <div className="flex flex-col mt-6 w-4/5">
              <label
                htmlFor="description"
                className="text-white font-semibold text-md"
              >
                Nom
              </label>
              <textarea
                id="description"
                ref={description}
                placeholder="Description"
                className="bg-transparent border-b-2 border-white focus:outline-none p-1 text-white min-h-"
              />
            </div>
            <div className="flex justify-between w-4/5 mt-6">
              <label
                htmlFor="knifePic"
                className="text-white font-semibold text-md"
              >
                Image
              </label>
              <input
                id="knifePic"
                type="file"
                name="knifePic"
                onChange={handleFileChange}
                className="bg-transparent border-white focus:outline-none p-0 text-white"
              />
            </div>

            <input
              type="submit"
              value="Créer"
              className=" cursor-pointer font-extrabold mt-8 border-2 border-gold rounded-xl px-10 py-2 text-gold hover:border-none hover:text-main-black hover:bg-gold"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddKnife;
