import React from "react";
import { Grid, Box } from "@mui/material";
import IncidentTable from "../components/IncidentTable";
import CameraStrip from "../components/CameraStrip";

export default function Map() {
  return (
    <Box>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={8}>
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
        </Grid>

        <Grid item xs={12} md={4}>
          <IncidentTable />
        </Grid>
      </Grid>
    </Box>
  );
}