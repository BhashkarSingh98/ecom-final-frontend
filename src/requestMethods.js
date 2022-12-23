import axios from "axios";

const BASE_URL = "https://enchanting-ray-vest.cyclic.app/api/";
// const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTU4OTExYWQyZTBlOGZjNDg4NzMyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTgwMDQ1NSwiZXhwIjoxNjcyMDU5NjU1fQ.125Zwvsc9qkUI-ysVKr3O_Q4gCeGOv8zO-NoiogfcRM"
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
