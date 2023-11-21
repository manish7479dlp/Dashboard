import React from 'react'
import { ColorModeContext , useMode } from './theme'
import { CssBaseline , ThemeProvider, Typography } from '@mui/material'
import Topbar from "../src/pages/global/Topbar"
import Sidebar from './pages/global/Sidebar'
import Dashboard from './pages/dashboard/Dashboard'
import { Route, Routes } from 'react-router-dom'
import Team from './pages/Team'
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
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/team" element={<Team/>}/>

              </Routes>
            </div>
          </div>

    </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App