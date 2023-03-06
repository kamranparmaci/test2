export type LoginFormValues = {
  username: string;
  password: string;
};

export type LoginFormProps = {
  submit: (enteredUsername: string, enteredPassword: string) => void;
};
