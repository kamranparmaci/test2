import React, { FC } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  LoginFormProps,
  LoginFormValues,
} from "../../../types/components/loginForm";

const LoginForm: FC<LoginFormProps> = ({ submit }) => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    submit(data.username, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={watch("username")}
            id="username"
            label="Username"
            variant="outlined"
            {...register("username", { minLength: 3, maxLength: 15 })}
            error={Boolean(errors.username)}
            helperText={
              errors?.username &&
              (errors?.username?.type === "minLength"
                ? "Username must be at least 3 characters long"
                : "Username must be a maximum of 15 characters")
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            value={watch("password")}
            id="password"
            label="Password"
            variant="outlined"
            {...register("password", { minLength: 8 })}
            error={Boolean(errors.password)}
            helperText={
              errors?.password && "Password must be at least 8 characters long"
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            disabled={!watch("password") || !watch("username")}
            type="submit"
            role="login-button"
          >
            login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
