// export const Base_url = "http://103.129.239.20:5000/"; // dev server
export const Base_url = "http://18.188.207.2:5000/";  // stage server

export const DatePipe = date => {
    if(date ==null){
        return null
    }
    const tempDate = new Date(date).toString().split(' ');
    console.log(tempDate)
    const formattedDate = `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}`;
    return formattedDate;
  };
