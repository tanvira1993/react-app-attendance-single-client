import axios from "axios";
import { Base_url } from "../util/global";
import {headerConfig} from "../util/config"

const param = 1;


export const getManualAttendance = async () => {
  const url = Base_url + `manualAttendance/${param}`;
  console.log(headerConfig())
  try {
    const response = await axios.get(url, headerConfig());
    return response.data.result;
  } catch (error) {
    return null
  }
};


export const storeManualAttendance = async (data) => {
  const url = Base_url + `manualAttendance/${param}`;
  try {
    const response = await axios.post(url, {
      device_location_id: 1,
      date: data
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }
};

export const getDailyAttendance = async(id,datestring)=>{
  const url = Base_url + `dateReport`;

  try {
    const response = await axios.post(url, {
      device_location_id: 1,
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
      device_location_id: 1,
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
      device_location_id: 1
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
      device_location_id: 1,
      start: start,
      end: end
    });
    console.log(response)
    return response.data.result;
  } catch (error) {
    return null
  }
}



///post api for manual atteendance 


// [
//   {
//   "rfid_number" : "123",
//   "rfid_users_id": 15,
//   "user_type_id": 15,
//   "organization_id": 15,
//   "branch_id": 15,
//   "devices_id": 15,
//   "device_location_id": 15,
//   "in_time": "21:21:21",
//   "month_name": "january",
//   "created_at":"2020-04-29",
//   "comment":"polaise"
  
// },
// {
//   "rfid_number" : "123",
//   "rfid_users_id": 15,
//   "user_type_id": 15,
//   "organization_id": 15,
//   "branch_id": 15,
//   "devices_id": 15,
//   "device_location_id": 15,
//   "in_time": "21:21:21",
//   "month_name": "january",
//   "created_at":"2020-04-29",
//   "comment":"polaise"
  
// }


// ]