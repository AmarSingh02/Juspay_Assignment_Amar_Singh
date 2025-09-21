import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  useTheme,
} from "@mui/material";
import { TrendingUp, TrendingDown, MapPin } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import MapImg from '../../assets/Map.png'

// Mock Data
const barChartData = [
  { month: "Jan", value1: 20, value2: 30 },
  { month: "Feb", value1: 25, value2: 36 },
  { month: "Mar", value1: 22, value2: 28 },
  { month: "Apr", value1: 28, value2: 31 },
  { month: "May", value1: 18, value2: 26 },
  { month: "Jun", value1: 30, value2: 46 },
];

const lineChartData = [
  { month: "Jan", current: 15, previous: 20 },
  { month: "Feb", current: 25, previous: 18 },
  { month: "Mar", current: 20, previous: 22 },
  { month: "Apr", current: 30, previous: 25 },
  { month: "May", current: 28, previous: 30 },
  { month: "Jun", current: 35, previous: 28 },
];

const pieChartData = [
  { name: "Direct", value: 300.56, color: "#ef4444" },
  { name: "Affiliate", value: 135.18, color: "#3b82f6" },
  { name: "Sponsored", value: 154.02, color: "#10b981" },
  { name: "E-mail", value: 48.96, color: "#f59e0b" },
];

const topProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const locationData = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
];

const Dashboard = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box 
      p={3} 
      minHeight="100vh" 
      sx={{ 
        background: theme.palette.background.default,
        color: theme.palette.text.primary 
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="body1" fontWeight="bold">
          eCommerce
        </Typography>
      </Box>

      {/* Top Metrics */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{height:'100%'}}>
          <Grid container spacing={2} mb={3} sx={{height:'100%'}}>
            <Box>
              <Grid item xs={12} md={5} sx={{ minWidth: "200px" }}>
                <Card sx={{ background: theme.palette.background.paper, mb: 3 }}>
                  <CardHeader
                    title={
                      <Typography variant="body3" fontWeight={700}>
                        Customers
                      </Typography>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5">3,781</Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      color="success.main"
                    >
                      <TrendingUp size={16} />
                      <Typography variant="body2" ml={1}>
                        +11.01%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} sx={{ minWidth: "200px" }}>
                <Card sx={{ background: theme.palette.background.paper }}>
                  <CardHeader
                    title={
                      <Typography variant="body3" fontWeight={700}>
                        Orders
                      </Typography>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5">1,219</Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      color="error.main"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TrendingDown size={16} />
                      <Typography variant="body2" ml={1}>
                        -0.03%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
            <Box>
              <Grid item xs={12} md={3} sx={{ minWidth: "200px" }}>
                <Card sx={{ background: theme.palette.background.paper, mb: 3 }}>
                  <CardHeader
                    title={
                      <Typography variant="body3" fontWeight={700}>
                        Revenue
                      </Typography>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5">$695</Typography>
                    <Box
                      display="flex"
                      alignItems="center"
                      color="success.main"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TrendingUp size={16} />
                      <Typography variant="body2" ml={1}>
                        +15.03%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={3} sx={{ minWidth: "200px" }}>
                <Card sx={{ background: theme.palette.background.paper }}>
                  <CardHeader
                    title={
                      <Typography variant="body3" fontWeight={700}>
                        Growth
                      </Typography>
                    }
                  />
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h5">30.1%</Typography>
                    <Box
                      color="success.main"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <TrendingUp size={16} />
                      <Typography variant="body2" ml={1}>
                        +6.08%
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Box>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={3} mb={3} sx={{ minWidth: "150px" }}>
            {/* Bar Chart */}
            <Grid item xs={12} lg={6} sx={{ minWidth: "550px" }}>
              <Card sx={{ background: theme.palette.background.paper }}>
                <CardHeader
                  title="Projections vs Actuals"
                />
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart
                      data={barChartData}
                      margin={{
                        top: 10,
                        right: 10,
                        left: 10,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid 
                        strokeDasharray="2 2" 
                        stroke={theme.palette.divider}
                      />
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: theme.palette.text.primary }}
                      />
                      <YAxis 
                        tick={{ fill: theme.palette.text.primary }}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: theme.palette.background.paper,
                          border: `1px solid ${theme.palette.divider}`,
                          color: theme.palette.text.primary
                        }}
                      />
                      <Legend />
                      <Bar dataKey="value1" stackId="a" fill="#A8C5DA" />
                      <Bar dataKey="value2" stackId="a" fill={theme.palette.grey[400]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{display:'flex', justifyContent:'space-between', marginBottom:'20px'}}>
        <Box>
          {/* Revenue + Location Side by Side */}
          <Grid container spacing={3} mb={3}>
            {/* Revenue (Line Chart) */}
            <Grid item xs={12} md={6}>
              <Card sx={{ background: theme.palette.background.paper, width:'720px', height: "100%" }}>
                <CardHeader title="Revenue" />
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={lineChartData}>
                      <XAxis 
                        dataKey="month" 
                        tick={{ fill: theme.palette.text.primary }}
                      />
                      <YAxis 
                        tick={{ fill: theme.palette.text.primary }}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: theme.palette.background.paper,
                          border: `1px solid ${theme.palette.divider}`,
                          color: theme.palette.text.primary
                        }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="current"
                        stroke={theme.palette.primary.main}
                        strokeWidth={2}
                        dot={false}
                        name="Current"
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        stroke={theme.palette.text.primary}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={false}
                        name="Previous"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Grid>

            {/* Revenue by Location */}
            <Grid item xs={12} md={6}>
              <Card sx={{ background: theme.palette.background.paper, height: "100%" }}>
                <CardHeader title="Revenue by Location" />
                <Box>
                  <img 
                    src={MapImg} 
                    alt="map" 
                    width="100%" 
                    height="120px"
                    style={{ 
                      filter: isDarkMode ? 'invert(1) hue-rotate(180deg)' : 'none' 
                    }}
                  />
                </Box>
                <CardContent>
                  {locationData.map((loc, i) => (
                    <Box key={i} mb={2}>
                      {/* City + Value */}
                      <Box display="flex" justifyContent="space-between" mb={0.5}>
                        <Box display="flex" alignItems="center" gap={1}>
                          <MapPin 
                            size={16} 
                            color={theme.palette.text.secondary} 
                          />
                          <Typography variant="body2">{loc.city}</Typography>
                        </Box>
                        <Typography variant="body2" fontWeight="bold">
                          {loc.value}
                        </Typography>
                      </Box>

                      {/* Progress bar */}
                      <LinearProgress
                        variant="determinate"
                        value={parseInt(loc.value) || 0}
                        sx={{
                          height: 6,
                          borderRadius: 5,
                          backgroundColor: theme.palette.action.hover,
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: theme.palette.primary.main,
                          },
                        }}
                      />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box sx={{ width: "700px" }}>
          {/* Products Table */}
          <Card sx={{ background: theme.palette.background.paper }}>
            <CardHeader title="Top Selling Products" />
            <CardContent sx={{ background: theme.palette.background.paper }}>
              <TableContainer 
                component={Paper} 
                sx={{ background: theme.palette.background.paper }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Amount</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topProducts.map((product, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell>{product.quantity}</TableCell>
                        <TableCell>{product.amount}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ width: "300px" }}>
          <Grid item xs={12} lg={4}>
            <Card sx={{ background: theme.palette.background.paper }}>
              <CardHeader title="Total Sales" />
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {pieChartData.map((entry, index) => (
                        <Cell key={index} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                {pieChartData.map((item, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    justifyContent="space-between"
                    mt={1}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          bgcolor: item.color,
                        }}
                      />
                      <Typography variant="body2">{item.name}</Typography>
                    </Box>
                    <Typography variant="body2" fontWeight="bold">
                      ${item.value}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;