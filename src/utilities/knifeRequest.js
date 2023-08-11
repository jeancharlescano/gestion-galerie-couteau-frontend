import axios from "axios";

export const createKnife = async (knife) => {
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/knife/`, knife);
  } catch (error) {
    console.log("🚀 ~ file: serverRequest.js:8 ~ createServer ~ error:", error);
  }
};

export const getAllKnifes = (url) => axios.get(url).then((res) => res.data);
