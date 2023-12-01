import React from 'react'
import { ColorModeContext , useMode } from './theme'
import { CssBaseline , ThemeProvider } from '@mui/material'
import Topbar from "../src/pages/global/Topbar"
import Sidebar from './pages/global/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Team from './pages/Team'
import Contact from "./pages/Contact"
import Academic from "./pages/student/Academic"
import Finance from './pages/student/Finance'
import Resource from './pages/student/Resource'
import Register from './pages/register/Register'
import Bar from './pages/Bar'
import Pie from './pages/Pie'
import Line from './pages/Line'
import StudentList from './pages/student/StudentList'
import StudentRegister from './pages/student/StudentRegister'
// import Test from './components/Test'

const App = () => {
  const [theme , colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
          <div className='app'>
            <Sidebar/>
            <div className='content'>
              <Topbar/>
              <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/student-list" element={<StudentList/>}/>
                <Route path="/student-register" element={<StudentRegister/>}/>


                <Route path="/team" element={<Team/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/academic" element={<Academic/>}/>
                <Route path="/finance" element={<Finance/>}/>
                <Route path="/resource" element={<Resource/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/barchart" element={<Bar/>}/>
                <Route path="/piechart" element={<Pie/>}/>
                <Route path="/linechart" element={<Line/>}/>








              </Routes>
            </div>
          </div>

    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App