import React, { FC } from "react";
import { Card, CardContent } from "@mui/material";
import { ChildrenProps } from "../../../types/root";

const UserListCard: FC<ChildrenProps> = ({ children }) => {
  return (
    <Card variant="outlined" sx={{ width: "100%", borderRadius: 6 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default UserListCard;
