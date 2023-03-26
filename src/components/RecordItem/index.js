import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { yellow, orange } from "../../assets/variables";

export default function RecordItem({ image, title, subTitle }) {
  return (
    <Box p={2} bgcolor={yellow} sx={{ cursor: "pointer" }}>
      <Box position="relative">
        <Box
          sx={(theme) => ({
            backgroundColor: theme.palette.common.black,
            opacity: 0.25,
            position: "absolute",
            width: "100%",
            height: "100%",
          })}
        />
        <CardMedia component="img" alt={title} image={image} />
        <Box
          width="100%"
          textAlign="center"
          position="absolute"
          top="50%"
          left="50%"
          color={yellow}
          sx={{
            transform: "translate(-50%,-50%)",
          }}
        >
          <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
            {title}
          </Typography>
          <Typography
            component="span"
            sx={(theme) => ({
              backgroundColor: orange,
              padding: theme.spacing(0.5, 1.5),
              color: theme.palette.common.white,
            })}
          >
            {subTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
