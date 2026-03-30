import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import MapSection from "../components/MapSection";
import IncidentTable from "../components/IncidentTable";

export default function Dashboard() {
  return (
    <Box>
      <Navbar />

      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} md={8}>
          <MapSection />
        </Grid>

        <Grid item xs={12} md={4}>
          <IncidentTable />
        </Grid>
      </Grid>
    </Box>
  );
}