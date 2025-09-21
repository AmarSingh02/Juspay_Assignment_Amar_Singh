import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { Sidebar, Star } from 'lucide-react';
import SearchComponent from './SearchComponent'
import { useThemeContext } from '../context/ThemeContext';
import { DarkMode, NotificationAdd, Refresh, WbSunny } from '@mui/icons-material';

const Header = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Box
      display="flex"
    //   alignItems="center"
      justifyContent="space-between"
      px={2}
      py={1}
      bgcolor="background.paper"
      boxShadow={1}
    >
      
      <Box display="flex" alignItems="center" gap={2}>
        <IconButton color="default">
          <Sidebar />
        </IconButton>
        <IconButton color="default">
          <Star />
        </IconButton>
        <Typography variant="body1">
          Dashboard / &nbsp; Default
        </Typography>
      </Box>

   
     
<Box>
 <SearchComponent
            //   onSearch={}
              placeholder="Search orders..."
            />
      <IconButton onClick={toggleTheme} sx={{ color: 'text.primary' }}>
        {mode === 'dark' ? <DarkMode /> : <WbSunny />}
      </IconButton>

      <IconButton color="default">
          <Refresh />
        </IconButton>
<IconButton color="default">
          <NotificationAdd />
        </IconButton>
        <IconButton color="default">
          <Sidebar />
        </IconButton>
</Box>
      
    </Box>
  );
};

export default Header;
