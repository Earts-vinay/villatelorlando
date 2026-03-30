import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Divider,
} from "@mui/material";
import ImageModal from "./ImageModal";
import ShareModal from "./ShareModal";

const data = [
  {
    id: 1,
    date:"10-07-2026",
    time: " 10:50 PM",
    type: "Intrusion",
    img: "/assets/images/person1.png",
  },
  {
    id: 2,
    date:"10-07-2026",
    time: " 10:50 PM",
    type: "Intrusion",
    img: "/assets/images/person2.png",
  },
  {
    id: 3,
    date:"10-07-2026",
    time: " 10:50 PM",
    type: "Intrusion",
    img: "/assets/images/person3.png",
  },
];

export default function IncidentTable() {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const [shareOpen, setShareOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleOpen = (image) => {
    setImg(image);
    setOpen(true);
  };

  return (
    <Box
      sx={{
        background: "none",
        boxShadow: "0 0 3px 0 rgba(36, 102, 233, 0.56)",
        borderRadius: "10px",
        p: 2,
        height: "95%",

      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontWeight: 600,
          mb: 2,
          color: "#1a2b49",
          fontFamily: "montserrat-regular",
        }}
      >
        Latest View
      </Typography>

      {/* HEADER */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1.5fr 1.5fr 1fr",
          px: 1,
          py: 1,
          background: "#eaf3fb",
          borderRadius: "8px",
          mb: 1,
        }}
      >
        <Typography fontSize={12} fontWeight={600} fontFamily="montserrat-regular">
          Date/Time
        </Typography>
        <Typography fontSize={12} fontWeight={600} fontFamily="montserrat-regular">
          Type
        </Typography>
        <Typography fontSize={12} fontWeight={600} fontFamily="montserrat-regular">
          Object
        </Typography>
        <Typography fontSize={12} fontWeight={600} fontFamily="montserrat-regular">
          Action
        </Typography>
      </Box>

      {/* BODY */}
      <Box sx={{ maxHeight: "500px", overflowY: "auto" }}>
        {data.map((item) => (
          <Box key={item.id}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1.5fr 1.5fr 1fr 1fr",
                alignItems: "center",
                px: 1,
                py: 1.5,
                borderRadius: "8px",
                "&:hover": {
                  background: "#f5f9ff",
                },
              }}
            >
              <Typography fontSize={12} fontFamily="montserrat-regular">{item.date} <br />{item.time}</Typography>
              <Typography fontSize={12} fontFamily="montserrat-regular">{item.type}</Typography>
              <Avatar
                src={item.img}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "8px",
                  cursor:"pointer"
                }}
                onClick={() => handleOpen(item.img)}
              />

              {/* Actions */}
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <IconButton
                  size="small"
                >
                  <img src="/assets/images/Path_icon.png" alt="map" style={{ width: "25px" }} />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={() => handleOpen(item.img)}
                >
                  <img src="/assets/images/details_icon.png" alt="map" style={{ width: "25px" }} />
                </IconButton>

                <IconButton
                  size="small"
                  onClick={() => {
                    setSelectedId(`inc00${item.id}`);
                    setShareOpen(true);
                  }}
                >
                  <img src="/assets/images/share_icon.png" alt="share" style={{ width: "25px" }} />
                </IconButton>
              </Box>
            </Box>
            <Divider sx={{ opacity: 0.5 }} />
          </Box>
        ))}
      </Box>

      <ImageModal open={open} setOpen={setOpen} img={img} />
      <ShareModal
        open={shareOpen}
        setOpen={setShareOpen}
        incidentId={selectedId}
      />
    </Box>
  );
}