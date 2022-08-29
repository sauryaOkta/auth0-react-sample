import * as React from "react";
import { Button, Container, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function PartnerPortal() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" color="initial">
        Partner Opportunity Tracker
      </Typography>
      <Button variant="outlined" sx={{ mb: 4, mt: 2 }}>
        Create Opportunity
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, maxWidth: 1400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "primary.main" }}>Customer</TableCell>
              <TableCell align="right" sx={{ color: "primary.main" }}>
                Order
              </TableCell>
              <TableCell align="right" sx={{ color: "primary.main" }}>
                Value
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Customer Name
              </TableCell>
              <TableCell align="right">$1312312</TableCell>
              <TableCell align="right">$1312312</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
