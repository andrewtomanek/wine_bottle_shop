import axios from "axios";

const instance = axios.create({
  baseURL: "https://bottle-2f0f4.firebaseio.com/"
});

export default instance;
