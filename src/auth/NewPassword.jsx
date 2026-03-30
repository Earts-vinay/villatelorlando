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
                md={7}
                lg={8}
                sx={{
                    display: { xs: "none", md: "block" },
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
                md={5}
                lg={4}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
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
                            New Password
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontFamily: "montserrat-regular",
                                fontWeight: 500,
                                mb: 3,
                            }}
                        >
                            Please create a new password that you don't use on any other site.
                        </Typography>
                        {/* EMAIL */}


                        {/* PASSWORD */}
                        <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            placeholder="Create New Password"
                            size="small"
                            sx={{
                                mb: 1,
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
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            sx={{ color: "#016699" }}
                                        >
                                            {showPassword ? (
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            type={showPassword ? "text" : "password"}
                            placeholder="Confirm Password"
                            size="small"
                            sx={{
                                mb: 1,
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
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            sx={{ color: "#016699" }}
                                        >
                                            {showPassword ? (
                                                <VisibilityOffIcon />
                                            ) : (
                                                <VisibilityIcon />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                       

                        {/* LOGIN BUTTON */}
                        <Button
                            fullWidth
                            onClick={() => navigate("/")}
                            sx={{
                                background: "#46C8F5",
                                color: "#fff",
                                py: 1.2,
                                mt:3,
                                borderRadius: "8px",
                                textTransform: "none",
                                fontWeight: 500,
                                fontFamily: "montserrat-regular",
                                "&:hover": {
                                    background: "#2fb3df",
                                },
                            }}
                        >
                            Change Password
                        </Button>
                    </Box>

                </Box>
                <Typography
                    sx={{
                        textAlign: "end",
                        fontSize: "10px",
                        color: "#aaa",
                        pb: 2,
                        fontFamily: "montserrat-regular",
                    }}
                >
                    ©Copyright 2026, Bluerid AI Inc.
                </Typography>
            </Grid>
        </Grid>
    );
}