import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockTransactions } from "../../assets/TempData";
// import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import AddIcon from '@mui/icons-material/Add';
// import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
// import ProgressCircle from "../../components/ProgressCircle";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BarChart from "../../components/BarChart";
import PieChart from "../../components/PieChart";
import LineChart from "../../components/LineChart";

const avgAttendance = [
  {
    id: "Attended",
    label: "Attended",
    value: 61,
  },
  {
    id: "Absent",
    label: "Absent",
    value: 39,
  }
]

const passStudentPercentPerYear = [
  {
    id: "1st Year",
    label: "1st",
    value: 74,
  },{
    id:  "2nd Year",
    label: "2nd",
    value: 83,
  },{
    id: "3rd Year",
    label: "3rd",
    value: 49,
  },{
    id: "4th Year",
    label: "4th",
    value: 96 ,
  }
]

const AcademicInsights = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);



  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="ACADEMIC INSIGHTS" subtitle="Welcome to Academic Details Section" />

       {/* button */}
        {/* <Box>
          <Button
            onClick={downloadReport}
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="150"
            subtitle="New Admission"
            progress="0.47"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="63"
            subtitle="Enrolled Student"
            progress="0.63"
            increase="+14%"
            icon={
              <AddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,123"
            subtitle="Total Student"
            progress="1"
            increase="+21%"
            icon={
              <PersonAddAltIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,12,187"
            subtitle="Our Alumini"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Average Attendance
              </Typography>
              
            
          </Box>
          <Box height="250px" >
            <PieChart isDashboard={true} data = {avgAttendance}/>
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
               Per Year Passing Student Percentage
              </Typography>
              
            
          </Box>
          <Box height="250px" >
            <PieChart isDashboard={true}  data={passStudentPercentPerYear}/>
          </Box>
        </Box>
        

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Average GPA Rate
          </Typography>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Department Wise Student
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AcademicInsights;