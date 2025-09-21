import React, { useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Checkbox,
  Button,
  Pagination,
  Toolbar,
  AppBar,
  Badge,
  Stack,
  Tooltip
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  FilterList as FilterIcon,
  Sort as SortIcon,
  MoreHoriz as MoreHorizontalIcon,
  CalendarToday as CalendarIcon,
  LocationOn as LocationIcon,
  Work as WorkIcon,
  LightMode,
  Brightness4,
  Brightness7,
  WbSunny,
  DarkMode
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import PaginationComponent from '../../components/PaginationComponent'
import SearchComponent from '../../components/SearchComponent';
import { useThemeContext } from '../../context/ThemeContext';

// Sample data structure
const sampleData = [
  {
    id: "#OM9801",
    user: { name: "Natori Craig", avatar: "N", bgColor: "#6b7280" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { label: "In Progress", color: "#3b82f6" }
  },
  {
    id: "#OM9802",
    user: { name: "Kate Morrison", avatar: "K", bgColor: "#f97316" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "4 minutes ago",
    status: { label: "Complete", color: "#10b981" }
  },
  {
    id: "#OM9803",
    user: { name: "Drew Cano", avatar: "D", bgColor: "#dc2626" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { label: "Pending", color: "#60a5fa" }
  },
  {
    id: "#OM9804",
    user: { name: "Orlando Diggs", avatar: "O", bgColor: "#ca8a04" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: { label: "Approved", color: "#fb923c" }
  },
  {
    id: "#OM9805",
    user: { name: "Andi Lane", avatar: "A", bgColor: "#a855f7" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { label: "Rejected", color: "#6b7280" }
  },
  {
    id: "#OM9806",
    user: { name: "Natori Craig", avatar: "N", bgColor: "#6b7280" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: { label: "In Progress", color: "#3b82f6" }
  },
  {
    id: "#OM9807",
    user: { name: "Kate Morrison", avatar: "K", bgColor: "#f97316" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "4 minutes ago",
    status: { label: "Complete", color: "#10b981" }
  },
  {
    id: "#OM9808",
    user: { name: "Drew Cano", avatar: "D", bgColor: "#dc2626" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: { label: "Pending", color: "#60a5fa" }
  },
  {
    id: "#OM9809",
    user: { name: "Andi Lane", avatar: "A", bgColor: "#a855f7" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: { label: "Rejected", color: "#6b7280" }
  }
];

// Custom styled components
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const OrderListChip = styled(Chip)({
  backgroundColor: '#1976d2',
  color: 'white',
  fontWeight: 600,
});




// Status Badge Component
const StatusBadge = ({ status }) => (
  <Box display="flex" alignItems="center">
    <Box
      sx={{
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: status.color,
        mr: 1,
      }}
    />
    <Typography variant="body2" color="text.secondary">
      {status.label}
    </Typography>
  </Box>
);

const OrderListTable = ({ data = sampleData }) => {
     const { mode, toggleTheme } = useThemeContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [filteredData, setFilteredData] = useState(data);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

 
  const handleSearch = (searchTerm) => {
    const filtered = data.filter(item => 
      item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleRowSelection = (id) => {
    const newSelection = new Set(selectedRows);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedRows(newSelection);
  };

  const toggleAllSelection = () => {
    if (selectedRows.size === currentData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(currentData.map(item => item.id)));
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header */}
        {/* <OrderListChip label="Order List" sx={{mb:2}} /> */}
        <Typography variant='h6' fontWeight={600}  mb={2}>
            Order List
        </Typography>
      <AppBar position="static" elevation={1} sx={{ background:'#F7F9FB' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" gap={1}>
          
            <IconButton color="default">
              <AddIcon />
            </IconButton>
            <IconButton color="default">
              <FilterIcon />
            </IconButton>
            <IconButton color="default">
              <SortIcon />
            </IconButton>
          </Box>
          
          <Box display="flex" alignItems="center" gap={1}>
           
            <SearchComponent
              onSearch={handleSearch}
              placeholder="Search orders..."
            />
          </Box>
           


        </Toolbar>
      </AppBar>

      {/* Table Container */}
      <Box sx={{  }}>
        <Paper elevation={1} sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={selectedRows.size > 0 && selectedRows.size < currentData.length}
                      checked={currentData.length > 0 && selectedRows.size === currentData.length}
                      onChange={toggleAllSelection}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Order ID
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      User
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Project
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Address
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Date
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2" fontWeight={600}>
                      Status
                    </Typography>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentData.map((item, index) => (
                  <StyledTableRow key={item.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selectedRows.has(item.id)}
                        onChange={() => toggleRowSelection(item.id)}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" fontWeight={500}>
                        {item.id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={2}>
                        <Avatar 
                          sx={{ 
                            bgcolor: item.user.bgColor, 
                            width: 32, 
                            height: 32,
                            fontSize: '0.875rem'
                          }}
                        >
                          {item.user.avatar}
                        </Avatar>
                        <Typography variant="body2" fontWeight={500}>
                          {item.user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <WorkIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {item.project}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {item.address}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <CalendarIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {item.date}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={item.status} />
                    </TableCell>
                    <TableCell>
                      <IconButton size="small" color="default">
                        <MoreHorizontalIcon />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredData.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </Box>
  );
};

export default OrderListTable;