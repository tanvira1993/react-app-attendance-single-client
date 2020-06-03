import React from "react";
import RfidUserList from "../components/rfidUserList.component";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function RfidUser(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingBottom: "10px",
        }}
      >
        <Button
          onClick={() => props.history.push("/createRfidUser")}
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
        >
          Add RFID User
        </Button>
      </div>

      <RfidUserList></RfidUserList>
    </div>
  );
}

export default RfidUser;
