import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import RecordList from "./RecordList";
import BodyRecord from "./BodyRecord";
import MyExercise from "./MyExercise";
import MyDiary from "./MyDiary";

export default function RecordPage() {
  return (
    <Box py={2}>
      <Container maxWidth="lg" disableGutters>
        <Stack spacing={4}>
          <RecordList />
          <BodyRecord />
          <MyExercise />
          <MyDiary />
        </Stack>
      </Container>
    </Box>
  );
}
