import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import QuizIcon from '@mui/icons-material/Quiz';
import Diversity3Icon from '@mui/icons-material/Diversity3';
export  const DATA = [
  {
    title: "Student",
    subSection: [
      {
        title: "Examination",
        to:"/exam",
        icon: <SchoolOutlinedIcon />,
      },
      {
        title: "Contacts",
        to:"/contact",
        icon: <QuizIcon />,
      },
      {
        title: "Team",
        to:"/team",
        icon: <Diversity3Icon />,
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
