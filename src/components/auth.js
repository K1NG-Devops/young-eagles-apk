import axios from "axios";

export async function teacherLogin(email, password) {
  try {
    const response = await axios.post(
      "https://youngeagles-api-server.up.railway.app/api/auth/teacher-login",
      { email, password },
      { headers: { "Content-Type": "application/json" } }
    );

    const token = response.data.token;

    // JWT decode function
    function parseJwt(token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

      return JSON.parse(jsonPayload);
    }

    const decodedToken = parseJwt(token);

    if (decodedToken.role !== "teacher") {
      throw new Error("You are not authorized to access this page.");
    }

    // Set localStorage once here with consistent keys
    localStorage.setItem("accessToken", token);
    localStorage.setItem("teacherId", decodedToken.id);  // consistent key
    localStorage.setItem("role", decodedToken.role);
    localStorage.setItem("user", JSON.stringify(decodedToken));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isTeacher", "true");

    return {
      success: true,
      teacherId: decodedToken.id,
      message: "Login successful",
      token: token,
      user: decodedToken,
    };
  } catch (error) {
    const message = error.response?.data?.message || error.message || "Login failed";
    return { success: false, message };
  }
}
