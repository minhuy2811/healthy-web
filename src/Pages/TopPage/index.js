import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import DateAndAchievementRate from "./DateAndAchievementRate";
import BodyChart from "../../components/Common/BodyChart";
import ButtonTransit from "./ButtonTransit";
import MealHistory from "./MealHistory";

export default function TopPage() {
  return (
    <Stack>
      <Grid container>
        <Grid item xs={12} md={5}>
          <DateAndAchievementRate />
        </Grid>
        <Grid item xs={12} md={7}>
          <BodyChart />
        </Grid>
      </Grid>
      <Container maxWidth="lg" disableGutters>
        <Grid container>
          <Grid item xs={12}>
            <ButtonTransit />
          </Grid>
          <Grid item xs={12}>
            <MealHistory />
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}
