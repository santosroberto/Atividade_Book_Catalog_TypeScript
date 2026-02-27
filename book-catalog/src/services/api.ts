import axios from "axios";

const API_URL =
  "https://crudcrud.com/api/02f8af617a5548dc92d6182ed63aa656/books";

export const api = axios.create({
  baseURL: API_URL,
});
