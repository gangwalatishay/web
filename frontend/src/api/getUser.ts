import axios from "axios";

export const getCurrentUser = async () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  try {
    const res = await axios.get("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.user; // important (based on your code)
  } catch (err) {
    console.error("User fetch error:", err);
    localStorage.removeItem("token");
    return null;
  }
};