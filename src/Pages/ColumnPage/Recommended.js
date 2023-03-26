import React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import TypographyUppercase from "../../components/Common/Typography/TypographyUppercase";
import { white, yellow } from "../../assets/variables";

export default function Recommended() {
  const recommended = [
    { name: "column", content: "オススメ" },
    { name: "diet", content: "ダイエット" },
    { name: "beauty", content: "美容" },
    { name: "healthy", content: "健康" },
  ];
  const recommendedItem = (name, content) => (
    <Box px={2} py={3} textAlign="center" bgcolor="#000">
      <TypographyUppercase gutterBottom variant="h5" sx={{ color: yellow }}>
        recommended
        <br />
        {name}
      </TypographyUppercase>
      <Divider
        sx={(theme) => ({
          width: theme.spacing(7),
          margin: "0 auto",
          borderColor: white,
          marginBottom: theme.spacing(1),
        })}
      />
      <Typography variant="h6" sx={{ color: yellow }}>
        {content}
      </Typography>
    </Box>
  );
  return (
    <Grid container spacing={4}>
      {recommended.map((item) => (
        <Grid item xs={12} sm={4} md={3} key={item.name}>
          {recommendedItem(item.name, item.content)}
        </Grid>
      ))}
    </Grid>
  );
}
