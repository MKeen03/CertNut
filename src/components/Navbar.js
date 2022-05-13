import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import Badge from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import vars from "../utility/vars";

const Navbar = () => {
  const providers = [
    {
      provider: "Amazon Web Services",
      exams: [
        { name: "Certified Cloud Practicioner", badge: "Coming Soon!" },
        { name: "Solutions Architect Associate", badge: "Coming Soon!" },
        { name: "Developer Associate", badge: "Coming Soon!" },
        { name: "SysOps Administrator Associate", badge: "Coming Soon!" },
        { name: "Developer Associate", badge: "Coming Soon!" },
        { name: "Solutions Architect Professional", badge: "Coming Soon!" },
        { name: "Developer Professional", badge: "Coming Soon!" },
        { name: "Specialty: Security", badge: "Coming Soon!" },
        { name: "Specialty: Advanced Networking", badge: "Coming Soon!" },
        { name: "Specialty: Database", badge: "Coming Soon!" },
        { name: "Specialty: Data Analytics", badge: "Coming Soon!" },
        { name: "Specialty: Machine Learning", badge: "Coming Soon!" },
      ],
    },
    {
      provider: "Google Cloud",
      exams: [
        { name: "Cloud Digital Leader", badge: "Coming Soon!" },
        { name: "Cloud Engineer", badge: "Coming Soon!" },
        { name: "Cloud DevOps Engineer", badge: "Coming Soon!" },
        { name: "Cloud Security Engineer", badge: "Coming Soon!" },
        { name: "Cloud Architect", badge: "Coming Soon!" },
        { name: "Cloud Developer", badge: "Coming Soon!" },
        { name: "Cloud Network Engineer", badge: "Coming Soon!" },
        { name: "Collaboration Engineer", badge: "Coming Soon!" },
        { name: "Data Engineer", badge: "Coming Soon!" },
        { name: "Machine Learning Professional", badge: "Coming Soon!" },
      ],
    },
  ];
  const drawerWidth = vars.drawerWidth;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome To Cert-Nut
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        {providers.map((item, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.provider}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Divider />
                  <List>
                    {item.exams.map((item, index) => (
                      <ListItem key={index} disablePadding>
                        <ListItemButton>
                          <ListItemText primary={item.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}

        <Divider />
      </Drawer>
    </Box>
  );
};

export default Navbar;
