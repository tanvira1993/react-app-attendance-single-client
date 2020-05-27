import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
// export const Base_url = "http://103.129.239.20:5000/"; // dev server
export const Base_url = "http://18.188.207.2:5000/"; // stage server

export const DatePipe = (date) => {
  if (date == null) {
    return null;
  }
  const tempDate = new Date(date).toString().split(" ");
  console.log(tempDate);
  const formattedDate = `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}`;
  return formattedDate;
};

export const toastDesign = (data) => {
  toast.warn(data, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const ToastSpace = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};
