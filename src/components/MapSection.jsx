import React from "react";
import { Box } from "@mui/material";
import CameraStrip from "./CameraStrip";

export default function MapSection() {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "0 0 3px 0 rgba(36, 102, 233, 0.56)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <Box sx={{ width: "1200px" }}>
          {/* MAP */}
          <img
            src="/assets/images/Map.webp"
            alt="map"
            style={{
              width: "100%",
              height: "76vh",
              display: "block",
              objectFit: "cover",
              objectPosition: "left",
            }}
          />

          {/* CAMERA STRIP */}
          <CameraStrip />
        </Box>
      </Box>
    </Box>
  );
}