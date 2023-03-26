import React, { useEffect, useState } from "react";

import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import _slice from "lodash/slice";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import { GradientButton } from "../../components/Common/Button";
import MealItem from "../../components/MealItem";

export default function MealHistory() {
  const [allMeals, setAllMeals] = useState([]);
  const [mealCount, setMealCount] = useState(8);

  const loadMoreMeals = () => {
    setMealCount(allMeals.length);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllMeals(data);
      });
  }, []);

  const sliceArray = _slice(_get(allMeals, "products"), 0, mealCount);
  return (
    <>
      {_isEmpty(sliceArray) ? (
        <Typography align="center" paragraph>
          <CircularProgress />
        </Typography>
      ) : (
        <>
          <Grid container spacing={1}>
            {_map(sliceArray, (_, index) => {
              const key = index;
              return (
                <Grid item xs={6} md={3} key={key}>
                  <MealItem />
                </Grid>
              );
            })}
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box pt={2} mb={5}>
                <GradientButton fullWidth large="true" onClick={loadMoreMeals}>
                  記録をもっと見る
                </GradientButton>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
