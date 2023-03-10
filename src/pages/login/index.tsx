import { Grid } from '@mui/material';
import LoginCard from '../../components/common/login-card';
import LoginForm from '../../components/forms/login-form';
import { useContainer } from 'inversify-react';
import UserServices from '../../services/user-services';

const LoginPage = () => {
  const { login } = useContainer(UserServices);

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <LoginCard>
          <LoginForm submit={login} />
        </LoginCard>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
