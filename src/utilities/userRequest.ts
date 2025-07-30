const API_URL = process.env.NEXT_PUBLIC_API_URL || process.env.VITE_REACT_APP_API_URL;

interface RegisterData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export const register = async (values: RegisterData): Promise<number | undefined> => {
  try {
    let response = await fetch(
      `${API_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    return response.status;
  } catch (error) {
    console.log("🚀 ~ register ~ error:", error);
  }
};