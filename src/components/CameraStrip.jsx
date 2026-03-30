import React from "react";
import { Box, Typography } from "@mui/material";

export default function CameraStrip() {
  return (
    <Box>
      <Box
        sx={{
          background: "#ACD9F4",
          px: 2,
          py: 1,
          my: 1,
          height: "8px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          pb: 1,
          mt: "-35px",
          px: 2,
        }}
      >
        {[...Array(18)].map((_, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "50px",
            }}
          >
         
            <img
              src="/assets/images/dots.png"
              alt="cam"
              style={{ width: "30px" }}
            />

            <Typography
              sx={{
                fontSize: "10px",
                mt: 0.9,
                color: "#1a2b49",
                background: "#e6f2fb",
                borderRadius: "10px",
                px: 0.8,
                lineHeight: "16px",
              }}
            >
              {i + 1}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}