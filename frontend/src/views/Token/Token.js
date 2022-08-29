import { Avatar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

export default function Token() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          my: "4rem",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            m: "auto",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "success.main",
              mr: "15px",
              width: 75,
              height: 75,
              fontSize: "35px",
            }}
          >
            N
          </Avatar>
          <Box>
            <Typography variant="h4">andrew.rymarczyk</Typography>
            <Typography variant="subtitle">
              andrew.rymarczyk@okta.com
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ bgcolor: "#999", p: 4, borderRadius: 4, color: "white" }}>
        <code>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus
          odio? Aliquam iure at voluptate. Dolor nemo quaerat perspiciatis
          eligendi a! Exercitationem corrupti molestias magni in rerum
          dignissimos minima laudantium.
        </code>
      </Box>
    </Container>
  );
}
