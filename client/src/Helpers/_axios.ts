import axios from "axios";

//Подключает куки
export const _axios = axios.create({
  withCredentials: true,
});
