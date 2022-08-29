import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";

const InputTextField = ({ label, ...props }) => {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <Typography sx={{ mb: "5px" }}>{label}</Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        // label="Outlined"
        variant="outlined"
        {...props}
      />
    </FormControl>
  );
};

export default InputTextField;
