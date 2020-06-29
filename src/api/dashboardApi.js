import axios from "axios";
import { Base_url } from "../util/global";
import { headerConfig } from "../util/config";
import { toastDesign } from "../util/global";
import { da } from "date-fns/locale";

export const getallUsers = async () => {
  const url = Base_url + `getallRfidUsersByDeviceLocation`;
  try {
    const response = await axios.get(url, headerConfig());
    return response.data.count;
  } catch (error) {
    return null;
  }
};

export const getpresent = async () => {
  const url = Base_url + `getPresentRfidUsersByDeviceLocation`;
  try {
    const response = await axios.get(url, headerConfig());
    return response.data.result;
  } catch (error) {
    return null;
  }
};

export const getChartValue = async () => {
  const url = Base_url + `presentMonthRatioByDeviceLocation`;
  try {
    const response = await axios.get(url, headerConfig());
    console.log("rerer", response);
    return response.data;
  } catch (error) {
    return null;
  }
};

export const rfidUserCreate = async (data) => {
  const url = Base_url + `createRUser`;
  console.log("header", headerConfig());
  try {
    const response = await axios.post(url, data, headerConfig());
    console.log("rerer", response);
    toastDesign("Success!!");
    return response;
  } catch (error) {
    return null;
  }
};

export const registerFinger = async(value) =>{
  let name = localStorage.getItem('device_name')
  let data = {
    name : name,
    id : value.id
  }
  console.log("=================================",data)
  return data;
  // const url = Base_url + `createRUser`;
  const url = `139.162.14.41:9000/getId`
  // try {
  //   const response = await axios.post(url, data, headerConfig());
  //   console.log("rerer", response);
  //   toastDesign("Success!!");
  //   return response;
  // } catch (error) {
  //   return null;
  // }
}
