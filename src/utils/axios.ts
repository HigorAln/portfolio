import axios from "axios";

export const api = axios.create({
  baseURL: "https://backend-portfolio-ui.herokuapp.com/",
});
