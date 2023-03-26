import React, { useEffect, useState } from "react";
import _get from "lodash/get";
import _map from "lodash/map";
import _slice from "lodash/slice";
import _isEmpty from "lodash/isEmpty";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import ColumnItem from "../../components/ColumnItem";
import { GradientButton } from "../../components/Common/Button";

export default function ColumnList() {
  const [allColumns, setAllColumns] = useState([]);
  const [columnCount, setColumnCount] = useState(8);

  const loadMoreColumns = () => {
    setColumnCount(allColumns.length);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setAllColumns(data);
      });
  }, []);

  const sliceArray = _slice(_get(allColumns, "products"), 0, columnCount);

  return (
    <>
      {_isEmpty(sliceArray) ? (
        <Typography align="center" paragraph>
          <CircularProgress />
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {_map(sliceArray, (_, index) => {
              const key = index;
              return (
                <Grid item xs={12} sm={6} md={3} key={key}>
                  <ColumnItem />
                </Grid>
              );
            })}
          </Grid>
          <Grid container justifyContent="center">
            <Box pt={2} mb={5}>
              <GradientButton fullWidth large="true" onClick={loadMoreColumns}>
                コラムをもっと見る
              </GradientButton>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
}
