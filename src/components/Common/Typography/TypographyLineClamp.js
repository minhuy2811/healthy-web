import React from "react";
import Typography from "@mui/material/Typography";

const TypographyLineClamp = ({
  variant,
  isLink,
  bold,
  uppercase,
  line,
  color,
  noWrap,
  gutterBottom,
  paragraph,
  component,
  align,
  sx,
  ...restProps
}) => {
  return (
    <Typography
      variant={variant}
      noWrap={noWrap}
      gutterBottom={gutterBottom}
      align={align}
      paragraph={paragraph}
      component={component}
      color={color}
      sx={{
        // cắt dòng
        ...(line
          ? {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: line || undefined,
            }
          : {}),
        ...sx,
      }}
      {...restProps}
    />
  );
};

export default TypographyLineClamp;
