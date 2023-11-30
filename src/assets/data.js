import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import QuizIcon from '@mui/icons-material/Quiz';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
export  const DATA = [
  {
    title: "Student",
    subSection: [
      {
        title: "Academic",
        to:"/academic",
        icon: <SchoolOutlinedIcon />,
      },
      {
        title: "Finance",
        to:"/finance",
        icon: <CurrencyRupeeIcon />,
      },
      {
        title: "Resource",
        to:"/resource",
        icon: <LibraryBooksIcon />,
      },
      {
        title: "Exam",
        to:"/exam",
        icon: <QuizIcon />,
      },
    ],
  },
  {
    title: "Employee",
    subSection: [
      {
        title: "Teachers",
        to:"/contact",
        icon: <SupervisorAccountIcon />,
      },
      {
        title: "Attandance",
        to:"/attandance",
        icon: <SchoolOutlinedIcon />,
      },
      {
        title: "Class",
        to:"/class",
        icon: <SchoolOutlinedIcon />,
      },
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
