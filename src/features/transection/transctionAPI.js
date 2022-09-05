import axios from "../../utils/axios";

export const getTransactions = async (pageNo, type, search) => {
  const pageLimit = 5;
  console.log(type);
  let queryString = "";
  const limitString = `_limit=${pageLimit}&_page=${pageNo}`;
  if (type !== "All") {
    queryString += `&type_like=${type}`;
  }
  console.log(search);
  if (search !== "") {
    queryString += `&q=${search}`;
  }
  const response = await axios.get(
    `/transactions?${limitString}&${queryString}`
  );
  return response.data;
};

// example
export const getVideos = async (tags, search, pageNo, authorName) => {
  let queryString = "";
  const pageLimit = 5;
  const limitString = `_limit=${pageLimit}&_page=${pageNo}`;
  const author = authorName.includes(" ")
    ? authorName.split(" ").join("%20")
    : authorName;
  console.log(author);

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (authorName !== "") {
    queryString += `&author_like=${author}`;
  }
  if (search !== "") {
    queryString += `&q=${search}`;
  }

  // videos/?_limit=5&_page=1&author_like=jhankar%20mahbub&tags_like=react&q=javascript
  const response = await axios.get(`/videos/?${limitString}&${queryString}`);

  return response.data;
};

export const addIransactions = async (data) => {
  const response = await axios.post("/transactions", data);
  return response.data;
};
export const editIransactions = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};
export const deleteIransactions = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
