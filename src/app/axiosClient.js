import axios from "axios";
import { prodEnviroment } from "../env/prodEnvironment";

export function api() {
  return axios.create({
    baseURL: `${prodEnviroment.BASE_URL}/3`,
    timeout: 20000
  });
} 