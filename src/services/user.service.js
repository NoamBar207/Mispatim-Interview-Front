import axios from "axios";
import { httpService } from "./http.service";

const STORAGE_KEY_USERS = "user";

export const userService = {
  getUsers,
};

async function getUsers() {
  const axiosData = await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .catch(() => {
      console.log("error getting users data");
    });
  return axiosData.data;
}
