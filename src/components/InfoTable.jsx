import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ReviewComp from "./ReviewComp";

function createData(name, orderNo, amount, status, avatar) {
  return { name, orderNo, amount, status, avatar };
}

const rows = [
  createData(
    "Wade Warren",
    15478256,
    "$124.00",
    "Delivered",
    "https://randomuser.me/api/portraits/men/1.jpg"
  ),
  createData(
    "Jane Cooper",
    48965786,
    "$365.02",
    "Delivered",
    "https://randomuser.me/api/portraits/women/2.jpg"
  ),
  createData(
    "Guy Hawkins",
    78958215,
    "$45.88",
    "Cancelled",
    "https://randomuser.me/api/portraits/men/3.jpg"
  ),
  createData(
    "Kristin Watson",
    20965732,
    "$65.00",
    "Pending",
    "https://randomuser.me/api/portraits/women/4.jpg"
  ),
  createData(
    "Cody Fisher",
    95715620,
    "$545.00",
    "Delivered",
    "https://randomuser.me/api/portraits/men/5.jpg"
  ),
  createData(
    "Savannah Nguyen",
    78514568,
    "$128.20",
    "Delivered",
    "https://randomuser.me/api/portraits/women/6.jpg"
  ),
];

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid #424242",
        },
      },
    },
  },
});

const getStatusColor = (status) => {
  switch (status) {
    case "Delivered":
      return "success";
    case "Cancelled":
      return "error";
    case "Pending":
      return "warning";
    default:
      return "default";
  }
};

export default function BasicTable() {
  return (
    <div className="container-fluid row g-2">
      <div className=" col-lg-8 col-md-12">
        <ThemeProvider theme={theme}>
          <TableContainer component={Paper}>
            <Box
              sx={{ backgroundColor: "#1F2029", padding: 2, borderRadius: 2 }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#fff" }}>Customer</TableCell>
                    <TableCell align="right" sx={{ color: "#fff" }}>
                      Order No.
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#fff" }}>
                      Amount
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#fff" }}>
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Avatar
                            alt={row.name}
                            src={row.avatar}
                            sx={{ marginRight: 2 }}
                          />
                          {row.name}
                        </Box>
                      </TableCell>
                      <TableCell align="right">{row.orderNo}</TableCell>
                      <TableCell align="right">{row.amount}</TableCell>
                      <TableCell align="right">
                        <Chip
                          label={row.status}
                          color={getStatusColor(row.status)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </TableContainer>
        </ThemeProvider>
      </div>
      <div className="col-lg-4 col-md-12">
        <ReviewComp />
      </div>
    </div>
  );
}
