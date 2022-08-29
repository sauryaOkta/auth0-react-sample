import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {
  Engineering,
  ModelTraining,
  Storefront,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import CloudCircle from "@mui/icons-material/CloudCircleOutlined";

export default function CompanyZero() {
  return (
    <>
      <Box sx={{ bgcolor: "#eee" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ py: "6rem", mt: "0" }}>
            <Grid item md={8}>
              <Typography
                sx={{ mb: "1rem", typography: { xs: "h3", sm: "h1" } }}
              >
                We want to be a part of your success
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "400" }} gutterBottom>
                Instantly unlock seed, revenue, and margin with seamless
                artificial intelligence workflows for distributors.
              </Typography>
              <Button variant="contained" size="large" sx={{ mt: "1rem" }}>
                Start a free trial
              </Button>
            </Grid>
            <Grid item md={4} sx={{ mt: { xs: "2rem", md: "0" } }}>
              <Box
                component="img"
                sx={{ width: "100%", borderRadius: "1rem" }}
                loading="lazy"
                src="https://images.pexels.com/photos/12968496/pexels-photo-12968496.jpeg?cs=srgb&dl=pexels-adi-perets-12968496.jpg&fm=jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: "4rem" }}>
        <Typography
          variant="h4"
          sx={{ my: "1rem", textAlign: "center", color: "lightslategrey" }}
        >
          Our values are highly valuable.
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { sm: "block", md: "grid" },
            gridTemplateColumns: "repeat(5, 1fr)",
            textAlign: "center",
            my: "3rem",
          }}
        >
          <Box>
            <Engineering sx={{ fontSize: 60, color: "#dd004f" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightslategrey" }}
            >
              Custom Offerings
            </Typography>
          </Box>
          <Box>
            <ModelTraining sx={{ fontSize: 60, color: "#dd004f" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightslategrey" }}
            >
              Quality Assured
            </Typography>
          </Box>
          <Box>
            <Storefront sx={{ fontSize: 60, color: "#dd004f" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightslategrey" }}
            >
              Business Oriented
            </Typography>
          </Box>
          <Box>
            <FavoriteBorderOutlined sx={{ fontSize: 60, color: "#dd004f" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightslategrey" }}
            >
              Empathy Based
            </Typography>
          </Box>
          <Box>
            <CloudCircle sx={{ fontSize: 60, color: "#dd004f" }} />
            <Typography
              variant="h6"
              sx={{ textAlign: "center", color: "lightslategrey" }}
            >
              Data Driven
            </Typography>
          </Box>
        </Box>
        <Grid container spacing={8} sx={{ textAlign: "center" }}>
          <Grid item sm={12} md={6}>
            <Typography variant="h6">For yourseft</Typography>
            <Box
              component="img"
              sx={{
                width: { xs: "calc(100vw - 2rem)", sm: "100%" },
                mt: "1rem",
                borderRadius: "1rem",
                height: "300px",
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/12968496/pexels-photo-12968496.jpeg?cs=srgb&dl=pexels-adi-perets-12968496.jpg&fm=jpg"
            />
          </Grid>
          <Grid item sm={12} md={6} lg={6}>
            <Typography variant="h6">For yourseft</Typography>
            <Box
              component="img"
              sx={{
                width: { xs: "calc(100vw - 2rem)", sm: "100%" },
                mt: "1rem",
                borderRadius: "1rem",
                height: "300px",
                objectFit: "cover",
              }}
              src="https://images.pexels.com/photos/12968496/pexels-photo-12968496.jpeg?cs=srgb&dl=pexels-adi-perets-12968496.jpg&fm=jpg"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
