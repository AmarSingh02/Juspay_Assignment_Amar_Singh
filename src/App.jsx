import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeContextProvider } from './context/ThemeContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSidebar';
import { Box, CircularProgress } from '@mui/material';


const Dashboard = lazy(() => import('./pages/Dashboard'));
const Table = lazy(() => import('./pages/Tables'));

const Layout = () => {
  const location = useLocation();

  const isDashboard = location.pathname === "/";
  const isTables = location.pathname === "/tables";

  return (
    <Box display="flex" minHeight="100vh" sx={{ overflowX: "hidden", width: "100vw" }}>
      
      {/* Left Sidebar */}
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

      {/* Main Content */}
      <Box component="main" flex={5} display="flex" flexDirection="column">
        <Header />
        <Box flex={1} p={2} bgcolor="background.default">
          <Suspense fallback={<CircularProgress />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tables" element={<Table />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>

      {/* Right Sidebar */}
      {isDashboard && (
        <Box
          component="aside"
          flex={1}
          bgcolor="background.paper"
          boxShadow={1}
          display="flex"
        >
          <Suspense fallback={<CircularProgress />}>
            <LeftSidebar />
          </Suspense>
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
