import axios from "axios";

const KEY = "AIzaSyCKRPxD1CPgNx-9wRm7DJE36XXfom014RA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
