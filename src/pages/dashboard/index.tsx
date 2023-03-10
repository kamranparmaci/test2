import { Container, Grid, Fade } from "@mui/material";
import UserList from "../../components/common/user-list";
import UserListCard from "../../components/common/users-card";
import useFetchUsers from "../../hooks/useFetchUsers";

const DashboardPage = () => {
  const { users, isLoading, isError } = useFetchUsers();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Please try later</div>;

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
              {users?.map((user, index) => (
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
