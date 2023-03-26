import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollTopButton() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <IconButton
          onClick={scrollToTop}
          sx={(theme) => ({
            border: `thin solid ${theme.palette.grey[600]}`,
            position: "fixed",
            right: theme.spacing(6),
            bottom: "20%",
            color: theme.palette.grey[600],
          })}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
  );
}
