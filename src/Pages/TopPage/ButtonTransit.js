import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { HexagonButton } from "../../components/Common/Button";

import KnifeIcon from "../../assets/icons/KnifeIcon";
import CupIcon from "../../assets/icons/CupIcon";
export default function ButtonTransit() {
  const btnList = [
    { name: "morning", icon: KnifeIcon },
    { name: "lunch", icon: KnifeIcon },
    { name: "dinner", icon: KnifeIcon },
    { name: "snack", icon: CupIcon },
  ];
  return (
    <Box py={3} mb={3}>
      <Grid container justifyContent="space-evenly">
        {btnList.map((btn, index) => {
          const key = index;
          return (
            <Grid item key={key}>
              <Box position="relative" height="100%" sx={{ cursor: "pointer" }}>
                <HexagonButton />
                <Typography
                  variant="h6"
                  sx={(theme) => ({
                    position: "absolute",
                    top: "64%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: theme.palette.common.white,
                    textTransform: "capitalize",
                  })}
                >
                  {btn.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
