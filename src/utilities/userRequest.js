export const register = async (values) => {
  try {
    let response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/auth/register`,
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
