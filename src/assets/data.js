import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import QuizIcon from '@mui/icons-material/Quiz';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
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
        title: "Examination",
        to:"/exam",
        icon: <SchoolOutlinedIcon />,
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
        title: "Examination",
        to:"/exam",
        icon: <SchoolOutlinedIcon />,
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
    ],
  },
];
