import React from "react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { NormalButton } from "../Common/Button";

const FooterBackground = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
}));

export default function Footer() {
  const itemFooterList = [
    { name: "会員登録" },
    { name: "運営会社" },
    { name: "利用規約" },
    { name: "個人情報の取扱について" },
    { name: "特定商取引法に基づく表記" },
    { name: "お問い合わせ" },
  ];
  return (
    <FooterBackground>
      <Container maxWidth="lg" disableGutters>
        <Box py={5}>
          <Grid container spacing={3}>
            {itemFooterList.map((item) => (
              <Grid item key={item.name}>
                <NormalButton>{item.name}</NormalButton>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </FooterBackground>
  );
}
