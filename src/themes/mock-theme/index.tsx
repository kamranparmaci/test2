import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { ChildrenProps } from "../../types/root";

const MockTheme: FC<ChildrenProps> = ({ children }) => {
  const theme = createTheme({});
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MockTheme;
