import React, { FC } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Users } from "../../../types/root";

interface UserListProps {
  user: Users;
}

const UserList: FC<UserListProps> = ({ user }) => {
  const theme = useTheme();
  return (
    <List sx={{ width: "100%" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user.username} src={user.avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={user.username}
          secondary={
            <>
              <Typography
                sx={{ display: "inline", color: theme.palette.primary.main }}
                component="span"
                variant="body2"
              >
                {user.email}
              </Typography>
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export default UserList;
