import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.countrystatecity.in/v1",
  headers: {
    "X-CSCAPI-KEY": "NnhLMjZvV2xZREQ5MGU5Y2cyVHIyRDVUSTNYT2FwRG9jV2lma0U1Tg==",
  },
  options: {
    redirect: "follow",
  },
});

export default instance;
