import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function ImageModal({ open, setOpen, img }) {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    bgcolor: "#fff",
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",

                }}
            >
                {/* HEADER */}
                <Box
                    sx={{
                        background: "#a9c9df",
                        px: 2,
                        py: 1.5,
                        display: "flex",
                        borderRadius: "10px 0px 0px",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 600,
                            color: "#1a2b49",
                            fontSize: "14px",
                            fontFamily: "montserrat-regular"
                        }}
                    >
                        Intrusion
                    </Typography>

                    <IconButton
                        onClick={() => setOpen(false)}
                        sx={{
                            position: "absolute",
                            top: -13,
                            right: -13,
                            background: "#0b6e99",
                            color: "#fff",
                            overflow: "visible",
                            width: 28,
                            height: 28,
                            border: "2px solid #fff",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                            "&:hover": { background: "#095c80" },
                        }}
                    >
                        <CloseOutlinedIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>

                {/* BODY */}
                <Box
                    sx={{
                        p: 2,
                        textAlign: "center",
                    }}
                >
                    <img
                        src={img}
                        alt="popup"
                        style={{
                            width: "220px",
                            borderRadius: "6px",
                        }}
                    />
                    <Typography
                        sx={{
                            mt: 1.5,
                            fontSize: "12px",
                            color: "#555",
                        }}
                    >
                        2025-07-10 10:50 PM
                    </Typography>
                </Box>
            </Box>
        </Modal>
    );
}