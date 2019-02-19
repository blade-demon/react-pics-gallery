import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 79089ac110230f5ff518998c56cda2917b5efdd52ea628542ccdd114e8fd1ac9"
  }
});
