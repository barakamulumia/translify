import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthAPI } from "../../Api";

import {
  MdLockOutline,
  MdVisibility,
  MdVisibilityOff,
  MdMailOutline,
  MdPhone,
  MdEnhancedEncryption,
} from "react-icons/md";

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
  // const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();

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
    const { firstname, lastname, phoneno, email, password } = user;

    AuthAPI.register(firstname, lastname, email, phoneno, password, role).then(
      (response) => {
        setMessage(response.data.message);
        AuthAPI.login(email, password, role).then(
          () => {
            history.push(`/${route}`);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
          }
        );
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        console.log(resMessage);
        setMessage(resMessage);
      }
    );
  };

  return (
    <FormContainer container route={route}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <FormPaper>
          <FormAvatar>
            <MdLockOutline />
          </FormAvatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={register({
                    required: true,
                    pattern: ValidationPatterns.name,
                    minLength: 4,
                  })}
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                />
                <ValidationError
                  errors={errors}
                  fieldName="firstname"
                  patternErrorMsg="Alphabets Only!"
                  requiredErrorMsg="First Name Required"
                  lengthErrorMsg="Minimum of 4 Characters!"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  inputRef={register({
                    required: true,
                    pattern: ValidationPatterns.name,
                    minLength: 4,
                  })}
                  variant="outlined"
                  fullWidth
                  required
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lastname"
                />
                <ValidationError
                  errors={errors}
                  fieldName="lastname"
                  patternErrorMsg="Alphabets Only!"
                  requiredErrorMsg="Last Name Required"
                  lengthErrorMsg="Minimum of 4 Characters!"
                />
              </Grid>
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
                  placeholder="e.g johdoe@gmail.com"
                />
                <ValidationError
                  errors={errors}
                  fieldName="email"
                  patternErrorMsg="Wrong Email Adress!"
                  requiredErrorMsg="Email Required"
                />
                {/**exists */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  inputRef={register({
                    required: true,
                    pattern: ValidationPatterns.phoneno,
                  })}
                  name="phoneno"
                  label="Phoneno"
                  type="number"
                  id="phoneno"
                  required
                  autoComplete="phoneno"
                  placeholder="e.g 0712345678"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MdPhone />
                      </InputAdornment>
                    ),
                  }}
                />
                <ValidationError
                  errors={errors}
                  fieldName="phoneno"
                  patternErrorMsg="Icorrect Format!"
                  requiredErrorMsg="Phone No is Required"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  inputRef={register({
                    required: true,
                    pattern: ValidationPatterns.password,
                  })}
                  placeholder=" e.g 123Asd"
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
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="password"
                />
                <ValidationError
                  errors={errors}
                  fieldName="password"
                  patternErrorMsg="Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
                  requiredErrorMsg="Password is Required"
                />
              </Grid>
            </Grid>
            <br />
            <SubmitButton type="submit" secondary>
              Continue
            </SubmitButton>
            <br />
            <p>{message ? message : ""}</p>
            <br />
            <Grid container justify="flex-end">
              <Grid item>
                <Link to={`/${route}/sign-in`} variant="body2">
                  Already have an account? sign in
                </Link>
              </Grid>
            </Grid>
          </Form>
        </FormPaper>
      </Container>
    </FormContainer>
  );
}
