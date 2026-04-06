import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

export default function MetricCard({
  title,
  value,
  previous,
  daysAgo = "7 days ago",
  percentage,
  icon,
  height,
  background,
}) {
  const isPositive = Number(percentage) >= 0;

  return (
    <Card
      sx={{
        borderRadius: "12px",
        background: background,
        color: "#fff",
        height: "100%",
        boxShadow: "0px 3px 6px #00000029",
        border: "1px solid #FFFFFF",
        overflow: "hidden",
        padding:"0px !important"
      }}
    >
      <CardContent
        sx={{
          height:height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        {/* TOP SECTION */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "montserrat-regular",
              opacity: 0.9,
            }}
          >
            {title}
          </Typography>

          <Box
            component="img"
            src={icon}
            alt="icon"
            sx={{ width: 28, height: 28 }}
          />
        </Box>

        {/* MIDDLE VALUE */}
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: 600,
            textAlign: "center",
            mt: 2,
            fontFamily: "montserrat-regular",
          }}
        >
          {value}
        </Typography>

        {/* BOTTOM SECTION */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          {/* LEFT */}
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontFamily: "montserrat-regular",
              }}
            >
              {previous}
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                opacity: 0.8,
                fontFamily: "montserrat-regular",
              }}
            >
              {daysAgo}
            </Typography>
          </Box>

          {/* RIGHT (DIFFERENCE) */}
          <Box textAlign="right">
            <Box display="flex" alignItems="center" gap={1}>
              {isPositive ? (
                <img src="/assets/icons/green_up.svg" alt="" style={{ color: "#00FF33 ", width:"12px" }}/>
              ) : (
                
                <img src="/assets/icons/red_down.svg" alt="" style={{ color: "#FF0000 ", width:"12px" }}/>
              )}

              <Typography
                sx={{
                  fontSize: "14px",
                  fontFamily: "montserrat-regular",
                }}
              >
                {percentage}%
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "12px",
                opacity: 0.8,
                fontFamily: "montserrat-regular",
              }}
            >
              Difference
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}