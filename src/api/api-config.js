import axios from "axios";

// baseURL: "https://us-central1-revou-fullstack-2.cloudfunctions.net/week_17_steffansim/api",
// baseURL: "https://todo-list-server-production-6c12.up.railway.app/api",

export const api = axios.create({
  baseURL: "https://us-central1-personal-d9ef9.cloudfunctions.net/todo_server_steffansim/api",
});


// Rotating token
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry && originalRequest.url !== "/refresh") {
      originalRequest._retry = true;

      const response = await api.post("/refresh", {}, { withCredentials: true });
      const newToken = response.data.accessToken;

      localStorage.setItem("accessToken", newToken);
      originalRequest.headers["Authorization"] = "Bearer " + newToken;
      window.location.reload()

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);
