import React from "react";
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
import { Form, FormAvatar, FormPaper } from "./Profile.elements";

import { FaMoneyCheck, FaMoneyCheckAlt } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DepositDialog({ user }) {
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
        Deposit Funds
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        disableBackdropClick
        keepMounted
        onClose={handleClose}
        aria-labelledby="deposit-dialog-slide-title"
        aria-describedby="deposit-dialog-slide-description"
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

  // const [message, showMessage] = useState("");
  // const [loading, setLoading] = useState(false);

  const onSubmit = (transaction) => {
    // const { email, firstname, lastname } = user;
    handleClose();
    // setLoading(true);
    console.log(transaction);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <FaMoneyCheck />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          Deposit funds from Mpesa
        </Typography>
        <br />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                inputRef={register({
                  required: true,
                  min: 50,
                  max: 50000,
                })}
                variant="outlined"
                required
                fullWidth
                name="d_amount"
                label="Amount in Ksh"
                type="number"
                id="d_amount"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaMoneyCheckAlt />
                    </InputAdornment>
                  ),
                }}
              />
              {errors.d_amount && "Amount range (50-50000)"}
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
                  Deposit
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
