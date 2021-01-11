import axios from "axios";
import store from "../redux/store";

import { api } from "../urlConfig";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    authorization: token ? `Beare ${token}` : ``,
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.authorization = `Beare ${auth.token}`;
  }
  return req;
});

export default axiosInstance;

//can not import outside from src in create-react-app
//do eject and remove ModuleScopePlugin from webpack configuration file.
