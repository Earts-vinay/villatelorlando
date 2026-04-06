import React, { useState } from "react";
import {
    Grid,
    Box,
    Typography,
    Paper,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
} from "recharts";
import moment from "moment";
import MetricCard from "../components/common/MetricCard";

export default function Insights() {
    const [view, setView] = useState("D");

    const handleChange = (e, newView) => {
        if (newView) setView(newView);
    };

    // HEADER DATA
    const lastUpdated = "02:30 PM";

    const PublicUrl = process.env.PUBLIC_URL;

    // DYNAMIC VALUES (replace with API later)
    const totalPeopleEnterTodayFormatted = "543";
    const totalPeopleEnterFormatted = "756";
    const percentagePeopleEnter = 28.17;

    const peopleOccupancyTodayFormatted = "342";
    const peopleOccupancyFormatted = "530";
    const percentagePeopleOccupancy = 18.25;

    const avgDwellTimeToday = "01:25";
    const avgDwellTime = "01:45";
    const percentageDwellTime = -12.5;

    const daysago = "7 days ago";

    // FINAL CARD DATA ARRAY
    const cardData = [
        {
            title: "Entry Count",
            value: totalPeopleEnterTodayFormatted,
            previous: totalPeopleEnterFormatted,
            percentage: percentagePeopleEnter,
            daysAgo: daysago,
            icon: `${PublicUrl}/assets/icons/PeopleTotalEntries.svg`,
            background: "transparent linear-gradient(313deg, #01669A 0%, #1B3664 100%)",
            daysAgo: daysago,
            height: "305px"
        },
        {
            title: "Occupancy",
            value: peopleOccupancyTodayFormatted,
            previous: peopleOccupancyFormatted,
            percentage: percentagePeopleOccupancy,
            daysAgo: daysago,
            icon: `${PublicUrl}/assets/icons/occupancy.svg`,
            background: "transparent linear-gradient(113deg, #01669A 0%, #52A1CC 100%)",
        },
        {
            title: "Avg Dwell Time",
            value: avgDwellTimeToday,
            previous: avgDwellTime,
            percentage: percentageDwellTime,
            daysAgo: daysago,
            icon: `${PublicUrl}/assets/icons/dwell.svg`,
            background: "transparent linear-gradient(113deg, #52A1CC 0%, #ABD9F4 100%) 0% 0% no-repeat padding-box",
        },
    ];

    // ZONES
    const zones = [
        { label: "Zone 01", value: 30, valueColor: "#9A81F1", color: "#9A81F14D ", border: "1px solid #9A81F1", },
        { label: "Zone 02", value: 24, valueColor: "#EE7570", color: "#EE75704D  ", border: "1px solid #EE7570", },
        { label: "Zone 03", value: 18, valueColor: "#4385F4", color: "#4385F44D ", border: "1px solid #4385F4", },
        { label: "Zone 04", value: 7, valueColor: "#46C8F5", color: "#46C8F54D ", border: "1px solid #46C8F5", },
    ];

    // CUSTOM TOOLTIP
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {

            // 🔥 FILTER: ignore "hour"
            const validPoint = payload.find(
                (item) => item.dataKey !== "hour"
            );

            if (!validPoint) return null;

            const value = validPoint.payload[validPoint.dataKey];
            const color = validPoint.color;

            if (value === null || value === undefined) return null;

            return (
                <div
                    style={{
                        background: color,
                        color: "#fff",
                        padding: "6px 10px",
                        borderRadius: "6px",
                        fontSize: "12px",
                        fontFamily: "montserrat-regular",
                    }}
                >
                    Checkout Time : {value} Min
                </div>
            );
        }
        return null;
    };



    // CHART DATA (0–23 hours)
    const chartData = Array.from({ length: 24 }, (_, i) => ({
        hour: i,
        c1: i >= 8 && i <= 17 ? Math.floor(Math.random() * 4) + 1 : null,
        c2: i >= 8 && i <= 17 ? Math.floor(Math.random() * 8) + 1 : null,
        c3: i >= 8 && i <= 17 ? Math.floor(Math.random() * 6) + 1 : null,
    }));

    return (
        <Box sx={{ p: 2 }}>

            <Box
                sx={{
                    borderRadius: "10px",
                    boxShadow: "0 0 3px 0 rgba(36, 102, 233, 0.56)",
                    overflow: "hidden",
                }}
            >
                {/* HEADER */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        my: 1,
                        mx: 2
                    }}
                >
                    <Typography sx={{ fontSize: "13px", color: "#7a8ca3", fontFamily: "montserrat-regular", display: "flex", justifyContent: "center", alignItems: "center", gap: 1 }}>
                        <img src="/assets/icons/refresh.svg" alt="" /> Last Updated {lastUpdated}
                    </Typography>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Typography sx={{ fontSize: "13px", fontWeight: 600, fontFamily: "montserrat-regular", display: "flex", justifyContent: "center", alignItems: "center", gap: 1, color: "#1C3664" }}>
                            <img src="/assets/icons/calander.svg" alt="" style={{width:"18px"}}/> {moment().format("MM-DD-YYYY")}
                        </Typography>

                        <Typography sx={{ fontSize: "13px", fontWeight: 600, fontFamily: "montserrat-regular", display: "flex", justifyContent: "center", alignItems: "center", gap: 1, color: "#1C3664" }}>
                            <img src="/assets/icons/clock.svg" alt="" style={{width:"18px"}}/> {moment().format("hh:mm A")}
                        </Typography>

                        <ToggleButtonGroup
                            value={view}
                            exclusive
                            onChange={handleChange}
                            size="small"
                            sx={{
                                background: "#fff",
                                border: "1px solid #deeff8",
                                borderRadius: "8px",
                                p: "2px",
                            }}
                        >
                            {["D", "W", "M", "Y"].map((item) => (
                                <ToggleButton
                                    key={item}
                                    value={item}
                                    sx={{
                                        border: "none",
                                        textTransform: "none",
                                        fontFamily: "montserrat-regular",
                                        fontSize: "12px",
                                        px: 1.5,
                                        py: 0.5,
                                        color: "#1C3664",

                                        "&.Mui-selected": {
                                            background: "#D5EBF9 ",   
                                            color: "#1C3664",        
                                            fontWeight: 600,
                                        },

                                        "&.Mui-selected:hover": {
                                            background: "#D5EBF9",
                                        },

                                        "&:hover": {
                                            background: "#D5EBF9",
                                        },
                                    }}
                                >
                                    {item}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>
                    </Box>
                </Box>

                {/* TOP SECTION */}
                <Grid container spacing={2} sx={{ marginRight: 1.2, marginLeft: 0 }}>

                    {/* BIG CARD */}
                    <Grid item xs={12} md={2.8} p={0}>
                        <Box sx={{ height: "335px", p: 0 }}>
                            <MetricCard {...cardData[0]} />
                        </Box>

                    </Grid>

                    {/* RIGHT SIDE CARDS */}
                    <Grid item xs={12} md={3}>
                        <Grid container spacing={2}>
                            {cardData.slice(1).map((card, index) => (
                                <Grid item xs={12} key={index}>
                                    <Box sx={{ height: "160px" }}>
                                        <MetricCard {...card} />
                                    </Box>

                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    {/* ZONES */}
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2, borderRadius: "12px", boxShadow: "0px 3px 6px #00000029" }}>
                            <Typography sx={{ mb: 2, fontFamily: "montserrat-medium",color:"#1C3664" }}>Zone Entries</Typography>
                            <Grid container spacing={1}>
                                {zones.map((z, i) => (
                                    <Grid item xs={6} md={3} key={i}>
                                        <Box
                                            sx={{
                                                background: z.color,
                                                border: z.border,
                                                borderRadius: "15px",
                                                height: "240px",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography sx={{ fontSize: "30px", fontWeight: 800, color: z.valueColor, fontFamily: "montserrat-medium" }}>
                                                {z.value}
                                            </Typography>

                                        </Box>
                                        <Typography sx={{ fontSize: "12px", textAlign: "center", mt: 1, fontFamily: "montserrat-regular", }}>
                                            {z.label}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>

                {/* FULL WIDTH CHART */}
                <Box sx={{ mx: 2, my: 3 }}>
                    <Paper sx={{ p: 2, borderRadius: "12px", boxShadow: "0px 3px 6px #00000029" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                            <Typography sx={{ mb: 2, fontFamily: "montserrat-regular" }}>
                                People Checkout
                            </Typography>
                            <Typography sx={{ mb: 2, fontFamily: "montserrat-regular" }}>
                                Total Checkout : 39
                            </Typography>
                        </Box>


                        <ResponsiveContainer width="100%" height={350}>
                            <ScatterChart>
                                <CartesianGrid strokeDasharray="3 3" />

                                {/* X AXIS */}
                                <XAxis
                                    type="number"
                                    dataKey="hour"
                                    domain={[0, 23]}
                                    ticks={[...Array(24).keys()]}
                                    interval={0}
                                    tick={{ fontFamily: "montserrat-regular", fontSize: 12 }}
                                    tickFormatter={(val) => `${val} Hr`}
                                />

                                {/* Y AXIS */}
                                <YAxis
                                    domain={[1, 8]}
                                    ticks={[1, 2, 3, 4, 5, 6, 7, 8]}
                                    tick={{ fontFamily: "montserrat-regular", fontSize: 12 }}
                                    tickFormatter={(val) => `${val} Min`}
                                />

                                {/* TOOLTIP */}
                                <Tooltip content={<CustomTooltip />} />

                                {/* LEGEND */}
                                <Legend wrapperStyle={{ fontFamily: "montserrat-regular",fontSize:"14px",display:"flex",justifyContent:"center",alignItems:"center" }} />

                                {/* SCATTER */}
                                <Scatter data={chartData} dataKey="c1" name="Counter 01" fill="#46C8F5" />
                                <Scatter data={chartData} dataKey="c2" name="Counter 02" fill="#9A81F1" />
                                <Scatter data={chartData} dataKey="c3" name="Counter 03" fill="#006699" />
                            </ScatterChart>
                        </ResponsiveContainer>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
}