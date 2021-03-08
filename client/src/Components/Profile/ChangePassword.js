import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Slide,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  InputAdornment,
} from "@material-ui/core";
import { Button } from "../../Resources/Styles/global";
import { useForm } from "react-hook-form";

import ValidationError from "../Error/Validation";
import ValidationPatterns from "../../Resources/Patterns/validation";
import { Form, FormAvatar, FormPaper } from "./Profile.elements";
import {
  IoPencil,
  IoLockClosed,
  IoLockClosedSharp,
  IoEyeSharp,
  IoEyeOffSharp,
} from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ChangePasswordDialog({ user }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button fullWidth onClick={handleClickOpen}>
        Change Password
      </Button>
      <Dialog
        disableBackdropClick
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="change-pwd-dialog-slide-title"
        aria-describedby="change-pwd-dialog-slide-description"
      >
        <DialogContent>
          <EditForm currentUser={user} handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
}

const EditForm = ({ currentUser, handleClose }) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
    mode: "onBlur",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const [message, showMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const onSubmit = (pwd_obj) => {
    // const { email, firstname, lastname } = user;
    handleClose();
    // setLoading(true);
    console.log(pwd_obj);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <IoPencil />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          Change Password
        </Typography>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                })}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Current Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoLockClosed />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  pattern: ValidationPatterns.password,
                })}
                variant="outlined"
                required
                fullWidth
                name="new_password"
                label="New Password"
                type={showPassword ? "text" : "password"}
                id="new_password"
                placeholder="e.g 123Asd"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoLockClosedSharp />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <IoEyeSharp /> : <IoEyeOffSharp />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ValidationError
                errors={errors}
                fieldName="password"
                patternErrorMsg="Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
                requiredErrorMsg="Password is Required"
              />
            </Grid>

            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "auto",
                }}
              >
                <Button primary type="submit">
                  Continue
                </Button>
                <Button secondary type="button" onClick={handleClose}>
                  Exit
                </Button>
              </div>
            </Grid>
          </Grid>
        </Form>
      </FormPaper>
    </Container>
  );
};
