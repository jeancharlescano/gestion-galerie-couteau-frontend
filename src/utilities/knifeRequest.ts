import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL;

export const createKnife = async (knife: FormData): Promise<number> => {
  const token = JSON.parse(localStorage.getItem("authToken") || "{}");

  try {
    const result = await axios.post(
      `${API_URL}/knife/add`,
      knife,
      {
        headers: {
          Authorization: "Bearer " + token.accessToken,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("🚀 ~ createKnife ~ result:", result);
    if (result.status != 200) {
      return 0;
    }
    return 1;
  } catch (error) {
    console.error("🚀 ~ createKnife ~ error:", error);
    return 0;
  }
};

export const getAllKnifes = (url: string) => axios.get(url).then((res) => res.data);

export const getKnifeById = async (id: string) => {
  try {
    let result = await axios.get(`${API_URL}/knife/${id}`);
    return result.data;
  } catch (error) {
    console.error("🚀 ~ getKnifeById ~ error:", error);
  }
};

export const updateKnife = async (formdata: FormData, id: string) => {
  try {
    const token = JSON.parse(localStorage.getItem("authToken") || "{}");

    const result = await axios.put(
      `${API_URL}/knife/update/${id}`,
      formdata,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    );
    return result;
  } catch (error) {
    console.error("🚀 ~ updateKnife ~ error:", error);
  }
};

export const deleteKnife = async (id: string) => {
  const token = JSON.parse(localStorage.getItem("authToken") || "{}");
  try {
    const result = await axios.delete(
      `${API_URL}/knife/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    );
    console.log("🚀 ~ deleteKnife ~ result:", result);
    return result;
  } catch (error) {
    console.log("🚀 ~ deleteKnife ~ error:", error);
  }
};