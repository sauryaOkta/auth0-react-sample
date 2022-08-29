import * as React from "react";
import { Box, Container } from "@mui/system";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#eee" }}>
      <Container maxWidth="lg" sx={{ py: "1rem", fontWeight: "600" }}>
        <footer>&copy; CompanyZero</footer>
      </Container>
    </Box>
  );
}
