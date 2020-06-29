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
  let savedata = {
    name : name,
    id : value.id,
    user_name : 'test',
    device_location_id : localStorage.getItem('device_location_id')
  }
  console.log("data",savedata,data)
  // return data;
  console.log("data",savedata,data)
  const Chkurl = Base_url + `checkFinger`;
  const save = Base_url + `createFinger`;
  const url = "http://139.162.14.41:5000/getId"
  try{
    const chk = await  axios.post(Chkurl, data)
  if(chk){
    const broker = await  axios.post(url, data)
    const dbset = await  axios.post(save, savedata)
    toastDesign("Success!!");
    return true

  }
  else{
    toastDesign("This ID already registered!");
    return false
  }
  }
  catch (error) {
    toastDesign("Something is wrong!");
    return null;
  }
  
}
