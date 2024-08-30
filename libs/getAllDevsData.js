import axios from "axios";

const getAllDevsData = async () => {
  // get all data form api
  const response = await axios.get("http://localhost:5050/devs");

  // validation
  if (!response.data) throw new Error("Devs Data not found");

  // return data
  return response.data;
};

export default getAllDevsData;
