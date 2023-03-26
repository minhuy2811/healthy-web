import React from "react";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";

import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import HeaderMenu from "./HeaderMenu";
import { NormalButton } from "../Common/Button";
import LinkTo from "../Common/LinkTo";
import logo from "../../assets/images/logo/logo.png";
import MemoIcon from "../../assets/icons/MemoIcon";
import ChallengeIcon from "../../assets/icons/ChallengeIcon";
import InfoIcon from "../../assets/icons/InfoIcon";
import { orange } from "../../assets/variables";

const HeaderBackground = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.grey[800],
  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.160784)",
}));

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const listButton = [
    { name: "自分の記録", icon: MemoIcon, link: "/my-record" },
    { name: "チャレンジ", icon: ChallengeIcon },
    { name: "お知らせ", icon: InfoIcon },
  ];

  return (
    <HeaderBackground>
      <Container maxWidth="lg" disableGutters>
        <Grid container alignItems="center">
          <Grid item xs>
            <LinkTo to="/">
              <img src={logo} alt="logo" />
            </LinkTo>
          </Grid>
          <Grid item xs>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Hidden mdDown>
                {listButton.map((button) => (
                  <NormalButton
                    component={LinkTo}
                    to={button.link}
                    key={button.name}
                    sx={{
                      color:
                        button.link && currentPath === "/my-record"
                          ? orange
                          : undefined,
                    }}
                    startIcon={
                      button.icon === InfoIcon ? (
                        <Badge badgeContent={1} sx={{ color: orange }}>
                          <button.icon />
                        </Badge>
                      ) : (
                        <button.icon />
                      )
                    }
                  >
                    {button.name}
                  </NormalButton>
                ))}
              </Hidden>
              <HeaderMenu />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </HeaderBackground>
  );
}
