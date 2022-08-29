import React from "react";
import {
  Avatar,
  Button,
  Grid,
  Typography,
  Container,
  FormHelperText,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import InputTextField from "../field/InputTextField";
import { useFormik } from "formik";

const PersonalInfo = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    nickName: "",
  };

  const onSubmit = (values) => {
    console.log("values -> ", values);
  };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <Box sx={{ mt: "2rem" }}>
      <form onSubmit={formik.handleSubmit}>
        <Typography>Profile Picture</Typography>
        <Grid container sx={{ mb: "2rem" }}>
          <Grid item container xs={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </Grid>
          <Grid item container xs={2} alignSelf="flex-start">
            <input
              accept="image/*"
              type="file"
              id="select-image"
              style={{ display: "none" }}
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <label htmlFor="select-image">
              <Button variant="outlined" color="primary" component="span">
                Change
              </Button>
            </label>
          </Grid>
          <Grid item container>
            {imageUrl && selectedImage && (
              <Box mt={2} textAlign="center">
                <div>Image Preview:</div>
                <img src={imageUrl} alt={selectedImage.name} height="100px" />
              </Box>
            )}
          </Grid>
        </Grid>
        <Grid container spacing={3} rowSpacing={3}>
          <Grid item xs={6}>
            <InputTextField
              label={"First Name"}
              name="firstName"
              {...formik.getFieldProps("firstName")}
            />
            {formik.touched.lastName && formik.errors.firstName ? (
              <div style={{ color: "red" }}>{formik.errors.firstName}</div>
            ) : null}
          </Grid>
          <Grid item xs={6}>
            <InputTextField
              label={"Last Name"}
              name="lastName"
              {...formik.getFieldProps("lastName")}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{ color: "red" }}>{formik.errors.lastName}</div>
            ) : null}
          </Grid>

          <Grid item xs={12}>
            <InputTextField
              label={"Email"}
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.lastName && formik.errors.email ? (
              <div style={{ color: "red" }}>{formik.errors.email}</div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <InputTextField
              label={"Nickname"}
              name="nickName"
              onChange={formik.handleChange}
              value={formik.values.nickName}
            />
          </Grid>
        </Grid>

        <Button
          variant="contained"
          sx={{ my: "2rem" }}
          size="large"
          type="submit"
        >
          {" "}
          Save{" "}
        </Button>
      </form>
    </Box>
  );
};

export default PersonalInfo;
