import axios from "axios";
import { Base_url } from "../util/global";
import { headerConfig } from "../util/config";

export const createOrg = async (data) => {
  const url = Base_url + `createOrg`;
  try {
    const response = await axios.post(url, data, headerConfig());
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};

export const getOrg = async (data) => {
  const url = Base_url + `getOrg`;
  try {
    const response = await axios.get(url, headerConfig());
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const createBranch = async (data) => {
  const url = Base_url + `createBranch`;
  try {
    const response = await axios.post(url, data, headerConfig());
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};

export const getBranch = async (id) => {
  const url = Base_url + `getBranchByOrg/${id}`;
  try {
    const response = await axios.get(url, headerConfig());
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};

export const createLocation = async (data) => {
  const url = Base_url + `createLocation`;
  try {
    const response = await axios.post(url, data, headerConfig());
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};

export const createDevice = async (data) => {
  const url = Base_url + `createDevice`;
  try {
    const response = await axios.post(url, data, headerConfig());
    console.log(response);
    return response;
  } catch (error) {
    return null;
  }
};
