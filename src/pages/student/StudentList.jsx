import React from "react";
import { tokens } from "../../theme";
import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import PersonIcon from "@mui/icons-material/Person";
import { useTheme } from "@emotion/react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import {studentsData} from "../../assets/studentData"


const StudentList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onRowClick = (data, row) => {
    // Access the data of the clicked row
    alert(data.row.name)
    console.log('Clicked Row Data:', data.row);
  };

  const columns = [
    { field: "firstName", headerName: "First Name", flex: 1 },
    { field: "lastName", headerName: "Last Name", flex: 1 },
    {
      field: "fathersName",
      headerName: "Father's Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "aadharNumber",
      headerName: "Aadhar Number",
      type: "number",
      // headerAlign: "left",
      // align: "left",
      flex: 1
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "district",
      headerName: "District",
      flex: 1,
    },
    {
      field: "pincode",
      headerName: "Pin Code",
      flex: 1,
    },
    {
      field: "state",
      headerName: "State",
      flex: 1,
    },
  ];


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="STUDENT LIST"
          subtitle="Welcome to Student List Section"
        />

        <Link to="/student-register">
          <Button
            // onClick={downloadReport}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <PersonIcon sx={{ mr: "10px" }} />
            REGISTER
          </Button>
        </Link>

        
      </Box>

      {/* Student list  */}

      <Box
        height="70vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={studentsData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          onRowClick={onRowClick}
        />
      </Box>

    </Box>
  );
};

export default StudentList;
