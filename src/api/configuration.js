import axios from "axios";
import { Base_url } from "../util/global";
import { headerConfig } from "../util/config";

export const createOrg = async (data) => {
  const url = Base_url + `createOrg`;
  try {
    const response = await axios.post(url, data);
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};
