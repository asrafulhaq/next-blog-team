import axios from "axios";

const getAllPosts = async () => {
  //get data
  const response = await axios.get("http://localhost:5050/blogs");

  // error handle
  if (!response.data) throw new Error("Posts Not Found");

  // response
  return response.data;
};

export default getAllPosts;
