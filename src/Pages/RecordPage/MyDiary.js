import React, { useEffect, useState } from "react";

import _get from "lodash/get";
import _map from "lodash/map";
import _slice from "lodash/slice";
import _isEmpty from "lodash/isEmpty";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import TypographyUppercase from "../../components/Common/Typography/TypographyUppercase";
import { borderColor } from "../../assets/variables";
import { GradientButton } from "../../components/Common/Button";

export default function MyDiary() {
  const [allDairy, setAllDiary] = useState([]);
  const [dairyCount, setDairyCount] = useState(8);

  const loadMoreColumns = () => {
    setDairyCount(allDairy.length);
  };

  const diary = () => (
    <Box p={2} border={`2px solid ${borderColor}`}>
      <Typography variant="h6" gutterBottom>
        2021.05.21
        <br />
        23:25
      </Typography>
      <Typography>
        私の日記の記録が一部表示されます。
        <br />
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </Typography>
    </Box>
  );

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllDiary(data);
      });
  }, []);

  const sliceArray = _slice(_get(allDairy, "products"), 0, dairyCount);
  return (
    <div>
      <TypographyUppercase variant="h5" gutterBottom>
        my diary
      </TypographyUppercase>
      {_isEmpty(sliceArray) ? (
        <Typography align="center" paragraph>
          <CircularProgress />
        </Typography>
      ) : (
        <div>
          <Grid container spacing={2}>
            {_map(sliceArray, (_, index) => {
              const key = index;
              return (
                <Grid item xs={6} sm={4} md={3} key={key}>
                  {diary()}
                </Grid>
              );
            })}
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={12} md={4}>
              <Box pt={2} mb={5}>
                <GradientButton
                  fullWidth
                  large="true"
                  onClick={loadMoreColumns}
                >
                  自分の日記をもっと見る
                </GradientButton>
              </Box>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}
