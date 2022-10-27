import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "../../infrastructure/design/about_me_component_styles/background.scss";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#f377357c",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "1vw",
    fontFamily: "Poppins",
    fontWeight: "300",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: "0.85vw",
    fontFamily: "Poppins",
    color: "rgba(195, 195, 195, 1)",
    borderColor: "rgba(255, 255, 255, 0.125)",
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(2, 2, 2, 0.125)",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(2, 2, 2, 0.125)",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData(
    "Professional Summary",
    `I am a passionate and results-oriented eLearning Developer, Instructional Designer, and Web Developer with 3+ years of experience delivering superior learning solutions impacting 3000+ learners. I have a background in higher education and a commitment to
accessibility and sustainability.`,
  ),
  createData("First Name", "Billy"),
  createData("Middle Name", "Gaspard"),
  createData("Last Name", "Présumé"),
  createData("Age", "23"),
  createData("Gender", "Male"),
  createData("Country of Residence", "United States"),
  createData("City", "Epworth"),
  createData("State", "Georgia"),
  createData("Job Status", "Available for hire"),
  createData("Type of Position", "Full-time"),
  // createData(
  //   "Field",
  //   `Instructional Design, E-Learning Development, Web Development, Software Development & Information Technology`,
  // ),
  createData("Work Authorization", "Authorized to work in the United States"),
];

const Background = () => {
  return (
    <div className="background">
      <TableContainer
        component={Paper}
        sx={{
          minWidth: "100%",
          minHeight: "100%",
          backgroundColor: "rgba(1, 1, 1, 0.125)",
        }}
      >
        <Table
          sx={{ minWidth: "100%", minHeight: "100%" }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell style={{ width: "18%" }}>
                Background Overview
              </StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "100%" }}>
                  {row.calories}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Background;
