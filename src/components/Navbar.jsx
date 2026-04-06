import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import moment from "moment";
import { useNavigate, NavLink } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    navigate("/");
  };

  const navLinks = [
    { label: "Map", path: "/map" },
    { label: "Insights", path: "/insights" },
  ];

  return (
    <AppBar
      position="static"
      sx={{
        background: "none",
        boxShadow: "none",
        color: "#1a2b49",
        pt: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        
        {/* LOGO */}
        <img
          src="/assets/images/Villatel_logo.png"
          alt="logo"
          style={{ width: "180px", cursor: "pointer" }}
          onClick={() => navigate("/map")}
        />

        {/* NAV LINKS */}
        <Box sx={{ display: "flex", gap: 4 }}>
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              style={{ textDecoration: "none",cursor:"pointer" }}
            >
              {({ isActive }) => (
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontFamily: "montserrat-regular",
                    fontWeight: isActive ? 700 : 500, // active bold
                    color: "#001426",
                    cursor: "pointer",
                  }}
                >
                  {item.label}
                </Typography>
              )}
            </NavLink>
          ))}
        </Box>

        {/* RIGHT SECTION */}
        <Box sx={{ textAlign: "right" }}>
          <Box
            onClick={handleClick}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 0.5,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "montserrat-regular",
                fontWeight: 500,
              }}
            >
              Welcome, Rohan Sanil
            </Typography>

            <IconButton size="small" sx={{ p: 0 }}>
              <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>

          <Typography
            sx={{
              fontSize: "12px",
              color: "#7a8ca3",
              fontFamily: "montserrat-regular",
              mx: 2.6,
            }}
          >
            {moment().format("MM-DD-YYYY | HH:mm")}
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            PaperProps={{
              sx: {
                mt: 3,
                border: "1px solid #46C8F5",
                boxShadow: "none",
                borderRadius: "8px",
                minWidth: "120px",
              },
            }}
          >
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontFamily: "montserrat-regular",
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}