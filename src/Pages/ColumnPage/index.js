import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Recommended from "./Recommended";
import ColumnList from "./ColumnList";

export default function ColumnPage() {
  return (
    <Box py={5}>
      <Container maxWidth="lg" disableGutters>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Recommended />
          </Grid>
          <Grid item xs={12}>
            <ColumnList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
