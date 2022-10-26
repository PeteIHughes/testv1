import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import navItems from "../data/navItems.json";
import DarkMode from "../components/DarkMode";

export function MenuBar() {
  let navItems2 = navItems.filter((ele) => ele.url !== "xxx");

  const navActive = "pageActive";
  const navNotActive = "pageNotActive";

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <MenuIcon />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>
          <DarkMode />
          <Box container spacing={4} justify="space-between">
            {navItems2.map((item) => (
              <NavLink
                exact
                activeClassName="active-link"
                className={({ isActive }) =>
                  isActive ? navActive : navNotActive
                }
                key={item.name}
                to={item.url}
                end
              >
                <Button sx={{ color: "#fff" }}>{item.name}</Button> &nbsp;&nbsp;
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
