import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
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
import { IoPencil, IoMail, IoPerson } from "react-icons/io5";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditInfoDialog({ user }) {
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
        Edit Info
      </Button>
      <Dialog
        open={open}
        disableBackdropClick
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="edit-info-dialog-slide-title"
        aria-describedby="edit-info-dialog-slide-description"
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
    mode: "onChange",
  });

  // const [message, showMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const { firstname, lastname, email } = currentUser;

  const [new_fname, setFname] = useState(firstname);
  const [new_lname, setLname] = useState(lastname);
  const [new_mail, setEmail] = useState(email);

  const onSubmit = (user) => {
    // const { email, firstname, lastname } = user;
    handleClose();
    // setLoading(true);
    console.log(user);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <IoPencil />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          Edit details
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
                      <IoMail />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
                required
                value={new_mail}
                onChange={(e) => setEmail(e.target.value)}
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
                  pattern: ValidationPatterns.name,
                  minLength: 4,
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoPerson />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setFname(e.target.value)}
                variant="outlined"
                required
                value={new_fname}
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
              />
              <ValidationError
                errors={errors}
                fieldName="firstname"
                requiredErrorMsg="First Name Required"
                patternErrorMsg="Alphabets only"
                lengthErrorMsg="Minimum of 4 Characters!"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  pattern: ValidationPatterns.name,
                  minLength: 4,
                })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoPerson />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => setLname(e.target.value)}
                variant="outlined"
                fullWidth
                value={new_lname}
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
