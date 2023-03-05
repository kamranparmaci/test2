import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { ChildrenProps } from "../types/root";

const Theme: FC<ChildrenProps> = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#303f9f",
      },
      secondary: {
        main: "#ff1744",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
