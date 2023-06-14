import axios from "axios";
import { httpService } from "./http.service";
import { utilService } from "./util.service";

const STORAGE_KEY_TODOS = "todo";

export const todosService = {
  getTodos,
};

async function getTodos() {
  const axiosData = await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .catch(() => {
      console.log("error getting users data");
    });
  return axiosData.data;
}
