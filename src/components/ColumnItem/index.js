import React from "react";

import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import TypographyLineClamp from "../Common/Typography/TypographyLineClamp";
import myRecommend3 from "../../assets/images/recommend/MyRecommend-3.jpg";
import { orange, white, yellow } from "../../assets/variables";

export default function ColumnItem() {
  return (
    <>
      <Box position="relative">
        <CardMedia component="img" alt="green iguana" image={myRecommend3} />
        <Box
          component="span"
          bgcolor={yellow}
          padding={1}
          position="absolute"
          bottom={0}
          left={0}
          color={white}
        >
          2021.05.17 23:25
        </Box>
      </Box>
      <Box pt={2}>
        <TypographyLineClamp line={2} gutterBottom>
          魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
        </TypographyLineClamp>
        <Typography variant="body2" sx={{ color: orange }}>
          #魚料理 #和食 #DHA
        </Typography>
      </Box>
    </>
  );
}
