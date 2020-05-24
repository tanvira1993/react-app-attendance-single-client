import React from "react";
import Data from "./dataTable";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function organization(props) {
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
          onClick={() => props.history.push("/createorg")}
          // className="mb-2"
          variant="contained"
          color="primary"
          size="small"
          startIcon={<AddIcon />}
        >
          Add organization
        </Button>
      </div>

      <Data></Data>
    </div>
  );
}

export default organization;
