import { Base_url } from "./global";
import axios from "axios";

export const login = async (data) => {
  const url = Base_url + `login`;
  try {
    const response = await axios.post(url, data);
    console.log(response.data[0].token);
    if (response.data[0].token !== undefined) {
      localStorage.setItem("token", response.data[0].token);
      localStorage.setItem("organization_id", response.data[0].organization_id);
      localStorage.setItem("branch_id", response.data[0].branch_id);
      localStorage.setItem(
        "device_location_id",
        response.data[0].device_location_id
      );
      localStorage.setItem("role", response.data[0].user_role);
      localStorage.setItem("userId", response.data[0].id);
      return true;
    }
    return false;
  } catch (error) {
    return null;
  }
};

export const tokenValidate = async () => {
  const getToken = await localStorage.getItem("token");
  console.log("getToken ager blok", getToken);
  if (getToken == null) {
    console.log("getToken", getToken);
    return false;
  } else {
    const url = Base_url + `tokenValidate`;
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("userId");
    const data = {
      token: token,
      id: user_id,
    };
    try {
      const response = await axios.post(url, data);
      console.log("getToken ager blok na kutta", getToken);
      return response;
    } catch (error) {
      return false;
    }
  }
};

export const headerConfig = () => {
  if (!tokenValidate) {
    return null;
  }
  const data = {
    headers: {
      Authorization: localStorage.getItem("token"),
      organization_id: localStorage.getItem("organization_id"),
      branch_id: localStorage.getItem("branch_id"),
      role: localStorage.getItem("role"),
      userId: localStorage.getItem("userId"),
      device_location_id: localStorage.getItem("device_location_id"),
    },
  };
  return data;
};
