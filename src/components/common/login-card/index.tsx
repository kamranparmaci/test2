import React, { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Typography, Stack } from "@mui/material";
import { ChildrenProps } from "../../../types/root";

const LoginCard: FC<ChildrenProps> = ({ children }) => {
  const theme = useTheme();
  return (
    <Card
      elevation={8}
      sx={{ borderRadius: 6, maxWidth: { sm: "600px", xs: "300px" } }}
    >
      <CardContent>
        <Stack spacing={2} sx={{ textAlign: "center", mb: 2 }}>
          <img
            src="../gifs/logo.gif"
            alt="app-logo"
            style={{
              width: "100px",
              height: "100px",
              margin: "auto",
            }}
          />
          <Typography variant="h4" sx={{ color: theme.palette.primary.main }}>
            Welcome to my app
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.palette.primary.light }}
          >
            Please enter your credential
          </Typography>
        </Stack>
        {children}
      </CardContent>
    </Card>
  );
};

export default LoginCard;
