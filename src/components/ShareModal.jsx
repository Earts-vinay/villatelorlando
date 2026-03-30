import React, { useState } from "react";
import { Modal, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function ShareModal({ open, setOpen, incidentId }) {
    const [emails, setEmails] = useState("");

    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "450px",
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
                        Share Incident
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
                        <CloseIcon sx={{ fontSize: 16 }} />
                    </IconButton>
                </Box>
             <Box p={2}>
                <Typography
                    sx={{
                        fontSize: "14px",
                        textAlign: "start",
                         fontFamily: "montserrat-regular",
                        
                    }}
                >
                    You are sharing the link for incident: <b>{incidentId}</b>
                </Typography>
                <Typography sx={{ mb: 1, fontSize: "14px",   fontFamily: "montserrat-regular",my:1}}>
                    Enter email addresses (comma-separated):
                </Typography>

                {/* INPUT */}
                <TextField
                    multiline
                    rows={3}
                    fullWidth
                    placeholder="user1@example.com, user2@example.com"
                    value={emails}
                    onChange={(e) => setEmails(e.target.value)}
                       fontFamily= "montserrat-regular"
                />

                {/* BUTTON */}
                <Button
                    fullWidth
                    sx={{
                        mt: 3,
                        background: "#1c3664",
                        color: "#fff",
                        textTransform: "none",
                        fontWeight: 500,
                        fontFamily: "montserrat-regular",
                        borderRadius: "6px",
                        "&:hover": { background: "#1c3664" },
                    }}
                     onClick={() => setOpen(false)}
                >
                    Send Share Link
                </Button>
                </Box>
            </Box>
        </Modal>
    );
}