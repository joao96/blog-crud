import axios from "axios";

export default axios.create({
  // it will change once every 8 hours
  baseURL: "http://57dd132b.ngrok.io"
});
