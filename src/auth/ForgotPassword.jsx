import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <Grid container sx={{ height: "100vh", background: "#eef5fb" }}>
      
      {/* LEFT IMAGE */}
      <Grid
           item
        xs={12}
        
        md={8}
        
        sx={{
          display: { xs: "none", md: "block",},
        }}
      >
        <Box sx={{ height: "100%", overflow: "hidden" }}>
          <img
            src="/assets/images/login_img.webp"
            alt="resort"
            style={{
              width: "100%",
              height: "99vh",
              objectFit: "cover",
              borderRadius: "0px 20px 20px 0px",
            }}
          />
        </Box>
      </Grid>

      {/* RIGHT PANEL */}
      <Grid
        item
        xs={12}
        
        md={4}
        
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection:"column",
          justifyContent: "center",
          px: 3,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "380px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          
          {/* TOP CONTENT */}
          <Box>
            {/* LOGO */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <img
                src="/assets/images/Villatel_logo.png"
                alt="logo"
                style={{ width: "200px" }}
              />
            </Box>

            {/* TITLE */}
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "montserrat-regular",
                fontWeight: 500,
                mb: 1,
              }}
            >
              Forgot Password?
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "montserrat-regular",
                fontWeight: 500,
                mb: 2,
              }}
            >
              No worries! Please enter your email address below, and we will send you a password reset link.
            </Typography>

            {/* EMAIL */}
            <TextField
              fullWidth
              placeholder="Email"
              size="small"
              sx={{
                mb: 3,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  background: "#f8fcff",
                  "& fieldset": {
                    borderColor: "#46C8F5",
                  },
                  "&:hover fieldset": {
                    borderColor: "#46C8F5",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#46C8F5",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <img
                        src="/assets/images/mail_icon.png"
                        alt="mail"
                        style={{ width: "20px" }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />


            {/* FORGOT PASSWORD */}
         

            {/* LOGIN BUTTON */}
            <Button
              fullWidth
              onClick={() => navigate("/confirm-password")}
              sx={{
                background: "#46C8F5",
                color: "#fff",
                py: 1.2,
                borderRadius: "8px",
                textTransform: "none",
                fontWeight: 500,
                fontFamily: "montserrat-regular",
                "&:hover": {
                  background: "#2fb3df",
                },
              }}
            >
              Send Recovery Email
            </Button>
               <Typography
              onClick={() => navigate("/")}
              sx={{
                fontSize: "12px",
                color: "#03679A",
                mt: 2,
                textAlign:"center",
                cursor: "pointer",
                fontFamily: "montserrat-regular",
                fontWeight:600
              }}
            >
              Back to Login
            </Typography>
          </Box>
          
        </Box>
         <Typography
    sx={{
      textAlign: "end",
      fontSize: "10px",
      color: "#aaa",
      pb:2,
      fontFamily: "montserrat-regular",
    }}
  >
    ©Copyright 2026, Bluerid AI Inc.
  </Typography>
      </Grid>
    </Grid>
  );
}