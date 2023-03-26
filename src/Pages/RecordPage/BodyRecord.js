import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import BodyChart from "../../components/Common/BodyChart";
import { bgChart, white } from "../../assets/variables";
import { RoundedButton } from "../../components/Common/Button";

export default function BodyRecord() {
  return (
    <Box py={2} px={3} bgcolor={bgChart}>
      <Box color={white}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography sx={{ textTransform: "uppercase" }}>
            body
            <br />
            record
          </Typography>
          <Typography variant="h5">2021.05.21</Typography>
        </Stack>
      </Box>
      <BodyChart
        height={350}
        margin={{ right: 5, top: 25, bottom: 25, left: 5 }}
      />
      <Stack direction="row" spacing={3}>
        {["日", "週", "月", "年"].map((item) => (
          <RoundedButton key={item}>{item}</RoundedButton>
        ))}
      </Stack>
    </Box>
  );
}
