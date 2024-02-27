export const register = async (values) => {
  console.log("🚀 ~ register ~ values:", values);
  try {
    let response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    return response.status;
  } catch (error) {
    console.log("🚀 ~ register ~ error:", error);
  }
};
