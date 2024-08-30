import axios from "axios";

const getSingleDevs = async (userId) => {
  // get single user data
  const response = await axios.get(`http://localhost:5050/devs/${userId}`);

  // validation
  if (!response.data) throw new Error("Devs Not Found");

  // return single devs data
  return response.data;
};

export default getSingleDevs;
