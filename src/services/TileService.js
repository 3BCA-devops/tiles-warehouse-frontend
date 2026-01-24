import axios from "axios";

const API_URL = "http://localhost:8080/tiles";

export const getAllTiles = () => axios.get(API_URL);
export const addTile = (tile) => axios.post(API_URL, tile);
export const updateTile = (id, tile) => axios.put(`${API_URL}/${id}`, tile);
export const deleteTile = (id) => axios.delete(`${API_URL}/${id}`);