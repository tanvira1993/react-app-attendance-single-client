import React from "react";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function device(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        <Button
          onClick={() => props.history.push("/createDevice")}
          // className="mb-2"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
        >
          Add Device
        </Button>
      </div>
    </div>
  );
}

export default device;
