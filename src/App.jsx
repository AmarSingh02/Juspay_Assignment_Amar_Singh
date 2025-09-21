import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Table from './pages/Tables';
import { ThemeContextProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { Box } from '@mui/material';
import LeftSidebar from './components/LeftSidebar';

const Layout = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/";
  const isTables = location.pathname === "/tables"; 

  return (
    <Box 
      display="flex" 
      minHeight="100vh" 
      sx={{ overflowX: "hidden", width: "100vw" }}
    >
     
      {(isDashboard || isTables) && (
        <Box
          component="aside"
          flex={1} 
          bgcolor="background.paper"
          boxShadow={1}
          display="flex"
        >
          <Sidebar />
        </Box>
      )}

  
      <Box component="main" flex={5} display="flex" flexDirection="column">
        <Header />
        <Box flex={1} p={2} bgcolor="background.default">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tables" element={<Table />} />
          </Routes>
        </Box>
      </Box>

      {/* Right Sidebar (20%) - show only for Dashboard */}
      {isDashboard && (
        <Box
          component="aside"
          flex={1} 
          bgcolor="background.paper"
          boxShadow={1}
          display="flex"
        >
          <LeftSidebar />
        </Box>
      )}
    </Box>
  );
};

const App = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
