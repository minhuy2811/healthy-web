import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { bgChart, white, yellow } from "../../assets/variables";
import { randomNumber } from "../../helpers";

export default function MyExercise() {
  const value = (unit) => (
    <Typography sx={{ color: yellow }}>
      {randomNumber(10, 100)}
      {unit}
    </Typography>
  );
  return (
    <Box py={2} px={3} bgcolor={bgChart}>
      <Box color={white}>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography sx={{ textTransform: "uppercase" }}>
            my
            <br />
            exercise
          </Typography>
          <Typography variant="h5">2021.05.21</Typography>
        </Stack>
        <Box py={2} maxHeight={350} overflow="scroll">
          <Grid container spacing={3}>
            {[...Array(100)].map((_, index) => {
              const key = index;
              return (
                <Grid item xs={6} key={key}>
                  <Stack direction="row" justifyContent="space-between">
                    <div>
                      <Typography>家事全般（立位・軽い)</Typography>
                      {value("kcal")}
                    </div>
                    {value("min")}
                  </Stack>
                  <hr />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
