import axios from "axios";

export const _axios = axios.create({
  withCredentials: true,
});
