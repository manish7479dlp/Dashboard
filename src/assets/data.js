import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export  const DATA = [
  {
    title: "Student Management",
    subSection: [
      {
        title: "Student List",
        to:"/student-list",
        icon: <SupervisorAccountIcon />,
      },
      {
        title: "Academic Insights",
        to:"/academic-insights",
        icon: <SchoolOutlinedIcon />,
      },
      {
        title: "Financial Summary",
        to:"/students-financial-summary",
        icon: <CurrencyRupeeIcon />,
      },
      
  
    ],
  },
  {
    title: "Employee Management",
    subSection: [
      {
        title: "Teachers Info",
        to:"/contact",
        icon: <SupervisorAccountIcon />,
      },
      {
        title: "Financial Summary",
        to:"/teachers-financial-summary",
        icon: <CurrencyRupeeIcon />,
      },
      {
        title: "Attendance",
        to:"/employee-attendance",
        icon: <CheckBoxIcon />,
      },
      // {
      //   title: "Class",
      //   to:"/class",
      //   icon: <SchoolOutlinedIcon />,
      // },
    ]
  }, {
    title: "Administration",
    subSection: [
      {
        title: "Register",
        to:"/register",
        icon: <PersonAddAltIcon />,
      },
      {
        title: "Bar Chart",
        to:"/barchart",
        icon: <BarChartIcon />,
      },
      {
        title: "Pie Chart",
        to:"/piechart",
        icon: <PieChartIcon />,
      },
      {
        title: "Line Chart",
        to:"/linechart",
        icon: <SsidChartIcon />,
      },
    ],
  },
];
