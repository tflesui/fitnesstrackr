import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://gentle-woodland-79828.herokuapp.com/api/";

// const getPublicContent = () => {
//   return axios.get(API_URL + "all");
// };

// Add other routes which require authorization here

const getUser = () => {
  return axios.get(API_URL + "users/me", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
//   getPublicContent,
  getUser,
  getModeratorBoard,
  getAdminBoard,
};
