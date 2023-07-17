import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "47107da6d40943edbce18327c760409c",
  },
});
