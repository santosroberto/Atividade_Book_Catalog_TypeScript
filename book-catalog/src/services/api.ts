import axios from "axios";

const API_URL = "https://crudcrud.com/api/164f45f0679a409595686e7427a452f0/books";

export const api = axios.create({
  baseURL: API_URL,
});