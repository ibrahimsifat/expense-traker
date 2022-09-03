import axios from "../../utils/axios";

export const getIransactions = async () => {
  const response = await axios.get("/transactions");
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
export const deketeIransactions = async (id) => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
