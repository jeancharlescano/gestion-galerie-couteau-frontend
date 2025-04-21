import axios from "axios";

export const sendMail = async (emailData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_REACT_APP_API_URL}/mail/send`,
      emailData
    );

    return response;
  } catch (error) {
    console.error("🚀 ~ sendMail ~ error:", error);
  }
};
