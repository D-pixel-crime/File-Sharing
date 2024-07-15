import axios from "axios";

const BACKEND_API_URI = "http://localhost:8000";

export const uploadFile = async (data: FormData) => {
  try {
    const { data: any } = await axios.post(`${BACKEND_API_URI}/upload`, data);
    return data;
  } catch (error) {
    console.log("Error while calling uploading file." + error);
  }
};
