import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { gradient, orange, white, yellow } from "../../../assets/variables";

export const NormalButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  "& svg": {
    color: orange,
  },
}));
export const GradientButton = styled(Button)(({ theme, large }) => ({
  background: gradient,
  color: theme.palette.common.white,
  padding: large === "true" ? theme.spacing(2) : undefined,
  fontSize: large === "true" ? theme.typography.h6.fontSize : undefined,
}));

export const RoundedButton = styled(Button)(() => ({
  background: white,
  color: yellow,
  borderRadius: "50px",
  "&:hover": {
    backgroundColor: yellow,
    color: white,
  },
}));

export const HexagonButton = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(3.75),
  width: theme.spacing(13),
  height: theme.spacing(7.5),
  background: orange,
  borderColor: orange,
  position: "relative",
  display: "inline-block",
  "&::before": {
    content: '""',
    width: 0,
    height: 0,
    borderBottom: `${theme.spacing(3.75)} solid`,
    borderColor: "inherit",
    borderLeft: `${theme.spacing(6.5)} solid transparent`,
    borderRight: `${theme.spacing(6.5)} solid transparent`,
    position: "absolute",
    top: theme.spacing(-3.75),
  },
  "&::after": {
    content: '""',
    width: 0,
    position: "absolute",
    bottom: theme.spacing(-3.75),
    borderTop: `${theme.spacing(3.75)} solid`,
    borderColor: "inherit",
    borderLeft: `${theme.spacing(6.5)} solid transparent`,
    borderRight: `${theme.spacing(6.5)} solid transparent`,
  },
}));
