import React, { ComponentType, FC, useEffect } from 'react';
import { useContainer } from 'inversify-react';
import { useNavigate } from 'react-router-dom';
import { CheckIsAuthenticated } from '../../services/auth-services';

const withAuthGuard = (WrappedComponent: FC): FC => {
  const AuthGuard: FC = (props) => {
    const navigate = useNavigate();
    const isAuth = useContainer(CheckIsAuthenticated);

    useEffect(() => {
      if (!isAuth) {
        navigate('auth/login', { replace: true });
      }
    }, [isAuth]);

    return <WrappedComponent {...props} />;
  };

  return AuthGuard;
};

export default withAuthGuard;
