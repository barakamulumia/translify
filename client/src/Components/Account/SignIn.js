import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthAPI } from "../../Api";

import {
  MdLockOutline,
  MdVisibility,
  MdVisibilityOff,
  MdMailOutline,
  MdEnhancedEncryption,
} from "react-icons/md";
import { useForm } from "react-hook-form";

import {
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  IconButton,
  InputAdornment,
} from "@material-ui/core";

import {
  Form,
  SubmitButton,
  FormPaper,
  FormAvatar,
  FormContainer,
} from "./Account.elements";

import ValidationError from "../Error/Validation";
import ValidationPatterns from "../../Resources/Patterns/validation";

export default function SignUp({ route }) {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
  });
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const handleShowPassword = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const role = route;

  const onSubmit = (user) => {
    const { email, password } = user;
    setLoading(true);

    AuthAPI.login(email, password, role).then(
      () => {
        history.push(`/${route}`);
        setLoading(false);
      },

      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
        setLoading(false);
      }
    );
  };

  return (
    <FormContainer container route={route}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormPaper elevation={6}>
          <FormAvatar>
            <MdLockOutline />
          </FormAvatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  inputRef={register({
                    required: true,
                    pattern: ValidationPatterns.email,
                  })}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdMailOutline />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                <ValidationError
                  errors={errors}
                  fieldName="email"
                  requiredErrorMsg="Email is Required"
                  patternErrorMsg="Wrong Email Adress Format"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={register({
                    required: true,
                  })}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdEnhancedEncryption />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? (
                            <MdVisibility />
                          ) : (
                            <MdVisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <br />
            <SubmitButton type="submit" secondary disabled={loading}>
              Continue
            </SubmitButton>
            <br />
            <p>{message ? message : ""}</p>
            <br />
            <Grid container justify="flex-end">
              <Grid item xs>
                <Link to="/forgot-password" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={`/${route}/sign-up`} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </FormPaper>
      </Container>
    </FormContainer>
  );
}
