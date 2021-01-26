import axios from "axios";

const url = "http://localhost:5000/";

export const getUser = ()=> axios.get(url);
export const postUser = (user)=> axios.post(url,user);
export const postShop = (shop)=> axios.post(`${url}openshop`,shop);