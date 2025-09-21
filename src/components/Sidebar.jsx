import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
  Toolbar,
  Typography,
  Box,
} from "@mui/material";
import {
  User,
  BarChart3,
  Briefcase,
  ShoppingCart,
  PieChart,
  Folder,
  Book,
  ChevronDown,
  ChevronRight,
  User2Icon,
  ChartScatter,
  Users,
  FileEdit,
} from "lucide-react";
import { AccountBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; 

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate(); 

  const [openSections, setOpenSections] = useState({
    overview: false,
    pages: true,
    dashboards: true,
    default: false,
    ecommerce: false,
    projects: false,
    courses: false,
  });

  const [selectedItem, setSelectedItem] = useState("Overview");

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSelect = (title, parentKey, path = null) => {
    setSelectedItem(title);

    if (parentKey) {
      setOpenSections((prev) => ({
        ...prev,
        [parentKey]: true,
      }));
    }

    if (path) {
      navigate(path); 
    }
  };

  const menuItems = [
    { type: "section", title: "Favorites", items: [] },
    { type: "section", title: "Recently", items: [] },
    {
      type: "item",
      title: "Overview",
      icon: BarChart3,
      key: "overview",
      path: "/", // <-- overview navigates to '/'
    },
    { type: "item", title: "Projects", icon: Briefcase },
    {
      type: "section",
      title: "Dashboards",
      key: "dashboards",
      items: [
        {
          title: "Default",
          icon: PieChart,
          key: "default",
          type: "item", 
          path: "/tables", 
        },
        {
          title: "eCommerce",
          icon: ShoppingCart,
          key: "ecommerce",
          type: "expandable",
        },
        {
          title: "Projects",
          icon: Folder,
          key: "projects",
          type: "expandable",
        },
        {
          title: "Online Courses",
          icon: Book,
          key: "courses",
          type: "expandable",
        },
      ],
    },
    {
      type: "expandable",
      title: "User Profile",
      key: "User Profile",
      icon: User2Icon,
      items: [
        { title: "Overview" },
        { title: "Projects" },
        { title: "Campaigns" },
        { title: "Documents" },
        { title: "Followers" },
      ],
    },
    { type: "item", title: "Account", icon: AccountBox },
    { type: "item", title: "Corporate", icon: Users },
    { type: "item", title: "Blog", icon: FileEdit },
    { type: "item", title: "Social", icon: ChartScatter },
  ];

  const renderMenuItem = (item, index, level = 0, parentKey = null) => {
    if (item.type === "section") {
      return (
        <Box key={index}>
          <Typography
            variant="caption"
            sx={{ px: 2, py: 1, color: "text.secondary" }}
          >
            {item.title}
          </Typography>
          {item.items?.map((subItem, subIndex) =>
            renderMenuItem(subItem, `${index}-${subIndex}`, level + 1, item.key)
          )}
        </Box>
      );
    }

    if (item.type === "expandable") {
      const isOpen = openSections[item.key];
      return (
        <Box key={index}>
          <ListItemButton
            onClick={() => toggleSection(item.key)}
            sx={{ pl: 2 + level * 2 }}
          >
            {item.icon && (
              <ListItemIcon sx={{ minWidth: 32 }}>
                <item.icon size={18} />
              </ListItemIcon>
            )}
            <ListItemText primary={item.title} />
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </ListItemButton>
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.items?.map((subItem, subIndex) =>
                renderMenuItem(
                  subItem,
                  `${index}-${subIndex}`,
                  level + 1,
                  item.key
                )
              )}
            </List>
          </Collapse>
        </Box>
      );
    }

    if (item.title) {
      return (
        <ListItemButton
          key={index}
          sx={{ pl: 2 + level * 2 }}
          selected={selectedItem === item.title}
          onClick={() => handleSelect(item.title, parentKey, item.path)}
        >
          {item.icon && (
            <ListItemIcon sx={{ minWidth: 32 }}>
              <item.icon size={18} />
            </ListItemIcon>
          )}
          <ListItemText primary={item.title} />
        </ListItemButton>
      );
    }

    return null;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar
        onClick={() => navigate("/")} // <-- logo click navigates to '/'
        sx={{ cursor: "pointer", display: "flex", alignItems: "center" }}
      >
        <User size={20} style={{ marginRight: 8 }} />
        <Typography variant="subtitle1">ByeWind</Typography>
      </Toolbar>
      <Divider />
      <List>{menuItems.map((item, index) => renderMenuItem(item, index))}</List>
    </Drawer>
  );
};

export default Sidebar;
