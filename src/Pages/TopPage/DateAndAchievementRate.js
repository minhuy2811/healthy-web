import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

import dateAchievRateImg from "../../assets/images/d01.jpg";

export const CircularProgressCustom = styled(CircularProgress)(({ theme }) => ({
  width: `${theme.spacing(22.5)} !important`,
  height: `${theme.spacing(22.5)} !important`,
  color: theme.palette.common.white,
}));

export default function DateAndAchievementRate() {
  return (
    <Box position="relative" width="100%" height="100%">
      <Box height="100%" maxHeight={316}>
        <img
          alt="date-achievement rate"
          src={dateAchievRateImg}
          width="100%"
          height="316px"
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        position="absolute"
        sx={(theme) => ({
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        })}
      >
        <CircularProgressCustom
          thickness={1}
          variant="determinate"
          value={75}
        />
        <Box
          sx={(theme) => ({
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: theme.palette.common.white,
          })}
        >
          <Typography>05/21</Typography>
          &nbsp;&nbsp;
          <Typography variant="h5">75%</Typography>
        </Box>
      </Box>
    </Box>
  );
}
