import axios from "axios";

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
