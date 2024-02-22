import axios from "axios";

export const createKnife = async (knife) => {
  const token = JSON.parse(localStorage.getItem("authToken"))
  try {
    await axios.post(`${process.env.REACT_APP_API_URL}/knife/add`, knife, {
      headers: {
        'Authorization': 'Bearer ' + token.accessToken
      }
    });
  } catch (error) {
    console.log("🚀 ~ file: serverRequest.js:8 ~ createServer ~ error:", error);
  }
};

export const getAllKnifes = (url) => axios.get(url).then((res) => res.data);
