import { Grid } from "@mui/material";
import React from "react";
import InputTextField from "../field/InputTextField";
import CountryPicker from "../picker/CountryPicker";

const ContactInfo = () => {
  return (
    <form>
      <Grid container spacing={3} rowSpacing={3}>
        <Grid item xs={12}>
          <InputTextField label={"Street"} name="street" />
        </Grid>
        <Grid item xs={6}>
          <InputTextField label={"City"} name="city" />
        </Grid>
        <Grid item xs={6}>
          <InputTextField label={"State"} name="state" />
        </Grid>
        <Grid item xs={6}>
          <CountryPicker />
        </Grid>
        <Grid item xs={6}>
          <InputTextField label={"Zipcode"} name="zipcode" />
        </Grid>
        <Grid item xs={12}>
          <InputTextField label={"Phone Number"} name="phoneNumber" />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactInfo;
