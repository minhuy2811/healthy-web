import React from "react";

import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "../../assets/icons/MenuIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import LinkTo from "../Common/LinkTo";
import { orange } from "../../assets/variables";

export default function HeaderMenu() {
  const listMenu = [
    { name: "自分の記録", link: "/my-record" },
    { name: "体重グラフ" },
    { name: "目標" },
    { name: "選択中のコース" },
    { name: "コラム一覧", link: "/column-page" },
    { name: "設定" },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        sx={{ color: orange }}
        onClick={!open ? handleClick : handleClose}
      >
        {!open ? <MenuIcon /> : <CloseIcon />}
      </IconButton>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              elevation={0}
              sx={(theme) => ({
                backgroundColor: theme.palette.grey[600],
                minWidth: 180,
              })}
            >
              <MenuList>
                {listMenu.map((item) => (
                  <MenuItem
                    key={item.name}
                    onClick={handleClose}
                    component={LinkTo}
                    to={item.link}
                  >
                    <ListItemText
                      sx={(theme) => ({
                        color: theme.palette.common.white,
                      })}
                    >
                      {item.name}
                    </ListItemText>
                  </MenuItem>
                ))}
              </MenuList>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
}
