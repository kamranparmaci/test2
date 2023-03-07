import React from "react";
import { Container, Grid, Fade } from "@mui/material";
import fakeUsers from "../../assets/data/fakeUsers";
import UserList from "../../components/common/user-list";
import UserListCard from "../../components/common/users-card";

const DashboardPage = () => {
  return (
    <Fade in>
      <Container
        maxWidth="sm"
        sx={{
          my: 2,
        }}
      >
        <Grid
          container
          wrap="wrap"
          sx={{
            display: "flex",
            justifyItems: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item sm={12}>
            <UserListCard>
              {fakeUsers.map((user, index) => (
                <UserList key={index} user={user} />
              ))}
            </UserListCard>
          </Grid>
        </Grid>
      </Container>
    </Fade>
  );
};

export default DashboardPage;
