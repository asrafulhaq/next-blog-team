import axios from "axios";

const getSinglePost = async (slug) => {
  //get data
  const response = await axios.get(`http://localhost:5050/blogs?slug=${slug}`);

  // error handle
  if (!response.data) throw new Error("Post Not Found");

  // response
  return response.data;
};

export default getSinglePost;
