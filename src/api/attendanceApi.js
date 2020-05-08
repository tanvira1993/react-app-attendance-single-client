import axios from "axios";
import { Base_url } from "../util/global";

const param = 1;


export const getManualAttendance = async () => {
  const url = Base_url + `manualAttendance/${param}`;
  try {
    const response = await axios.get(url);
    return response.data.result;
  } catch (error) {
    return null
  }
};

export const getDailyAttendance = async(id,datestring)=>{
  const url = Base_url + `dateReport`;

  try {
    const response = await axios.post(url, {
      device_location_id: id,
      date: datestring
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }
}


export const getmonthlyAttendance = async(id,month)=>{

  const url = Base_url + `monthReport`;

  try {
    const response = await axios.post(url, {
      device_location_id: id,
      month: month
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }

}

export const getWeeklyyAttendance = async(id)=>{
  const url = Base_url + `weekReport`;

  try {
    const response = await axios.post(url, {
      device_location_id: id
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }
}

export const getSelectedAttendance = async(id,start,end)=>{
  const url = Base_url + `dateRangeReport`;

  try {
    const response = await axios.post(url, {
      device_location_id: id,
      start: start,
      end: end
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }
}
