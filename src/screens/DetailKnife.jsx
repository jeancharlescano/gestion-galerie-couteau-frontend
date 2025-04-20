import React, { useContext, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import Header from "../components/Header";
import {
  faTrash,
  faPenToSquare,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  deleteKnife,
  updateKnife,
  getKnifeById,
} from "../utilities/knifeRequest";
import AuthContext from "../context/authContext";

const DetailKnife = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const [knifeValues, setKnifeValues] = useState(location.state?.knifeValues);
  const [isEdit, setIsEdit] = useState(false);
  const [previewImg, setPreviewImg] = useState(knifeValues.img);

  const name = useRef();
  const bladeMaterial = useRef();
  const bladeLenght = useRef();
  const handleMaterial = useRef();
  const handleLenght = useRef();
  const description = useRef();
  const imageFile = useRef(null);

  const navigate = useNavigate();

  const delKnife = async () => {
    try {
      let result = await deleteKnife(knifeValues.id);
      if (result.status === 200) {
        navigate("/gallery");
      }
    } catch (error) {
      console.error("Error deleting knife:", error);
    }
  };

  const updateImg = () => {
    imageFile.current.click();
  };

  const putKnife = async () => {
    const formData = new FormData();

    formData.append("name", name.current.value);
    formData.append("description", description.current.value);
    formData.append("bladeMaterial", bladeMaterial.current.value);
    formData.append("bladeLenght", bladeLenght.current.value);
    formData.append("handleMaterial", handleMaterial.current.value);
    formData.append("handleLenght", handleLenght.current.value);

    if (imageFile.current) {
      formData.append("knifePic", imageFile.current.files[0]);
    }
    try {
      const result = await updateKnife(formData, knifeValues.id);
      if (result.status === 200) {
        try {
          const updatedKnife = await getKnifeById(knifeValues.id);
          setKnifeValues(updatedKnife);
          setIsEdit(false);
        } catch (error) {
          console.error("🚀 ~ putKnife ~ error:", error);
        }
      }
    } catch (error) {
      console.error("🚀 ~ updateKnife ~ error:", error);
    }
  };

  return isEdit ? (
    <>
      <Header activeNav={1} />
      <div className="min-h-screen bg-[#232c33] text-white">
        {/* Image */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-[#2e3942]">
          <img
            onClick={updateImg}
            src={previewImg}
            alt={knifeValues.name}
            className="max-h-[95%] object-contain rounded cursor-pointer"
          />
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={imageFile}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  setPreviewImg(reader.result);
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          {user?.isAdmin && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-gradient-to-r from-gold to-black hover:opacity-80 px-4 py-2 rounded shadow cursor-pointer"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <button
                onClick={putKnife}
                className="bg-gradient-to-r from-gold to-black hover:opacity-80 px-4 py-2 rounded shadow cursor-pointer"
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
            <InputUpdate
              id="nameKnife"
              type="text"
              placeholder="Nom du couteau"
              knifeValue={knifeValues.name}
              ref={name}
            />
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputUpdate
              id="bladeMaterial"
              type="text"
              ref={bladeMaterial}
              knifeValue={knifeValues.blade_material}
              placeholder="Matériaux de la lame"
            />
            <InputUpdate
              id="bladeLenght"
              ref={bladeLenght}
              knifeValue={knifeValues.blade_length}
              type="number"
              placeholder="Taille en cm"
            />
            <InputUpdate
              id="handleMaterial"
              type="text"
              knifeValue={knifeValues.handle_material}
              ref={handleMaterial}
              placeholder="Matériaux du manche"
            />
            <InputUpdate
              id="handleLenght"
              ref={handleLenght}
              knifeValue={knifeValues.handle_length}
              type="number"
              placeholder="Taille en cm"
            />
          </div>

          <div className="mt-12 border-t border-gold pt-8">
            <label
              htmlFor="description"
              className="text-2xl font-semibold text-gold mb-4"
            >
              Description
            </label>
            <textarea
              id="description"
              ref={description}
              placeholder="Description"
              defaultValue={knifeValues.description}
              className="bg-transparent w-full border-b-2 border-white focus:outline-none p-1 text-white min-h-"
            />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Header activeNav={1} />
      <div className="min-h-screen bg-[#232c33] text-white">
        {/* Image */}
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center bg-[#2e3942]">
          <img
            src={knifeValues.img}
            alt={knifeValues.name}
            className="max-h-[95%] object-contain rounded"
          />
          {user?.isAdmin && (
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => setIsEdit(!isEdit)}
                className="bg-gradient-to-r from-gold to-black hover:opacity-80 px-4 py-2 rounded shadow cursor-pointer"
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={delKnife}
                className="bg-gradient-to-r from-gold to-black hover:opacity-80 px-4 py-2 rounded shadow cursor-pointer"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gold mb-10 text-center">
            {knifeValues.name.toUpperCase()}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InfoItem label="Type de lame" value={knifeValues.blade_material} />
            <InfoItem
              label="Taille de la lame"
              value={`${knifeValues.blade_length} cm`}
            />
            <InfoItem
              label="Type de manche"
              value={knifeValues.handle_material}
            />
            <InfoItem
              label="Taille du manche"
              value={`${knifeValues.handle_length} cm`}
            />
          </div>

          <div className="mt-12 border-t border-gold pt-8">
            <h2 className="text-2xl font-semibold text-gold mb-4">
              Description
            </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {knifeValues.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ label, value }) => (
  <div>
    <h3 className="text-lg md:text-xl font-semibold text-gold">{label}</h3>
    <p className="text-base text-gray-300">{value}</p>
  </div>
);

const InputUpdate = ({ id, ref, placeholder, type, knifeValue }) => (
  <input
    id={id}
    type={type}
    ref={ref}
    defaultValue={knifeValue}
    placeholder={placeholder}
    className="bg-transparent border-b-2 border-gold focus:outline-none p-1 text-white w-1/2"
  />
);

export default DetailKnife;
