import { api } from "../../app/axiosClient";
import { prodEnviroment } from "../../env/prodEnvironment";

export async function getListMovie() {
  return await api().get("/discover/movie", {
    params: {
      api_key: prodEnviroment.API_KEY
    }
  });
}