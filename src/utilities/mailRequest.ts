import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL;

interface EmailData {
  firstname: string;
  lastname: string;
  email: string;
  message: string;
}

export const sendMail = async (emailData: EmailData) => {
  try {
    const response = await axios.post(
      `${API_URL}/mail/send`,
      emailData
    );

    return response;
  } catch (error) {
    console.error("🚀 ~ sendMail ~ error:", error);
  }
};