import axios from "axios";
import { httpService } from "./http.service";

const STORAGE_KEY_USERS = "user";

export const userService = {
  getUsers,
  updateUser,
};

async function getUsers() {
  // const axiosData = await axios
  //   .get("https://jsonplaceholder.typicode.com/users")
  //   .catch(() => {
  //     console.log("error getting users data");
  //   });
  // return axiosData.data;

  let users = await httpService.get(STORAGE_KEY_USERS);
  if (!users.length) {
    users = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch(() => {
        console.log("error getting users data");
      });
    await httpService.post(STORAGE_KEY_USERS, users.data);
  }
  return users;
}

async function updateUser(user) {
  await httpService.put(`user/${user.id}`, user);
}
