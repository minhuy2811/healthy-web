import React from "react";
import { Link } from "react-router-dom";
import LinkMui from "@mui/material/Link";

const LinkTo = React.forwardRef((props, ref) => (
  <LinkMui component={Link} to="/" ref={ref} {...props} />
));
export default LinkTo;
