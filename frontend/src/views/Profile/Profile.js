import { Email } from "@mui/icons-material";
import {
  Button,
  Divider,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ContactInfo from "../../components/profile/ContactInfo";
import PersonalInfo from "../../components/profile/PersonalInfo";

export const Profile = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ mt: "2rem" }}>
          Profile
        </Typography>
        <Typography variant="body1">
          Manage your personal, contact and security information.
        </Typography>

        <PersonalInfo />
        <Divider />
        <Typography variant="h5" sx={{ mt: "2rem", mb: "1rem" }}>
          Contact Information
        </Typography>
        <ContactInfo />

        <Grid container spacing={3} rowSpacing={3}>
          <Grid item xs={12} sx={{ mt: "2rem" }}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Accounts Linked</Typography>
            <Typography>Main Account</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Box display="flex" justifyContent="right">
              <Email />
              <Typography sx={{ ml: "0.5rem" }}>
                andrew.rymarczyk@okta.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5">Security</Typography>
            <Typography>Two-factor Authentication</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <Typography>Not enrolled</Typography>
          </Grid>
        </Grid>
        <Button variant="contained" size="large" sx={{ my: "2rem" }}>
          Enroll in MFA
        </Button>
      </Container>
    </React.Fragment>
  );
};
