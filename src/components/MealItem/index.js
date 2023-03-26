import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

import { gradient } from "../../assets/variables";
import img from "../../assets/images/d01.jpg";

export default function MealItem() {
  return (
    <Box position="relative" sx={{ cursor: "pointer" }}>
      <CardMedia component="img" alt="meal" image={img} />
      <Box
        component="span"
        sx={(theme) => ({
          padding: theme.spacing(1),
          position: "absolute",
          bottom: 0,
          left: 0,
          background: gradient,
          color: theme.palette.common.white,
        })}
      >
        <Typography variant="h6">05.21.Morning</Typography>
      </Box>
    </Box>
  );
}
