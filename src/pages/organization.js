import React from "react";
import Data from "./dataTable";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/Box";

function organization(props) {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <Box display="flex" p={1}>
          <Box p={1} flexGrow={1}></Box>
          {/* <Box p={1}></Box> */}
          <Box p={1}>
            <Button
              onClick={() => props.history.push("/createorg")}
              // className="mb-2"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
            >
              Add organization
            </Button>
          </Box>
        </Box>
      </div>

      <Data></Data>
    </div>
  );
}

export default organization;
