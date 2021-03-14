import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { addNewOrder, ordersFilterChanged } from "../../State/orders.slice";
import {
  selectDestination,
  selectPickUp,
  selectLoad,
  loadSelected,
  locationUpdated,
} from "../../State/maps.slice";
import { AuthAPI } from "../../Api";

import {
  Select,
  InputLabel,
  Container,
  CssBaseline,
  Typography,
  Grid,
} from "@material-ui/core";

import {
  Form,
  FormAvatar,
  FormPaper,
  SubmitButton,
  FormControlWrapper,
  FormContainer,
  Label,
  Option,
} from "./OrderForm.elements";

import { FaHelicopter } from "react-icons/fa";
import MapSearchInput from "../Map/mapinput";
import calcPriceFromLatLng from "../../Resources/Utils/price";

const OderForm = () => {
  const dispatch = useDispatch();
  const client = AuthAPI.getCurrentUser();
  const pickup = useSelector(selectPickUp);
  const destination = useSelector(selectDestination);
  const load = useSelector(selectLoad);

  const [moveType, setMoveType] = useState("fr");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const history = useHistory();

  const handleMoveTypeChange = (event) => {
    setMoveType(event.target.value);
  };
  const handleLoadChange = (event) => {
    dispatch(loadSelected(event.target.value));
  };

  const isHouseMoving = () => moveType === "hm";
  const isOfficeMoving = () => moveType === "om";
  const isFreightMoving = () => moveType === "fr";

  const canSave =
    [pickup, destination, moveType].every(Boolean) &&
    addRequestStatus === "idle";

  const handleSubmit = async () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        const orderObj = {
          moveType,
          clientId: client.id,
          driverId: "604e17de01a57f00e05db6e0",
          load,
          pickup,
          destination,
          charges: calcPriceFromLatLng(pickup, destination, load),
        };
        const resultAction = await dispatch(addNewOrder(orderObj));
        unwrapResult(resultAction);
        dispatch(ordersFilterChanged("pending"));
        history.push("/client#orders");
      } catch (err) {
        console.error("Failed to save the order: ", err);
      } finally {
        setAddRequestStatus("idle");
        dispatch(locationUpdated({ inputType: "pickup", details: null }));
        dispatch(locationUpdated({ inputType: "destination", details: null }));
      }
    }
  };

  if (!client) {
    return null;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormPaper elevation={6}>
        <FormAvatar>
          <FaHelicopter />
        </FormAvatar>
        <Typography component="h1" variant="h5">
          <i> haul&nbsp;with&nbsp;</i>
          <i
            style={{
              letterSpacing: "3px",
            }}
          >
            <b
              style={{
                color: "#022144",
              }}
            >
              trans
            </b>
            lify
          </i>
        </Typography>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlWrapper variant="outlined">
                <InputLabel id="service-select-outlined-label">
                  What are you Moving
                </InputLabel>
                <Select
                  labelId="service-select-outlined-label"
                  id="service-select-outlined"
                  value={moveType}
                  onChange={handleMoveTypeChange}
                  label="What are you Moving"
                >
                  <Option value="fr">Freight</Option>
                  <Option value="hm">House Moving</Option>
                  <Option value="om">Office Moving</Option>
                </Select>
              </FormControlWrapper>
            </Grid>
            {isFreightMoving() && (
              <Grid item xs={12}>
                <FormControlWrapper variant="outlined">
                  <InputLabel id="freight-select-outlined-label">
                    Approx Weight
                  </InputLabel>
                  <Select
                    labelId="freight-select-outlined-label"
                    id="freight-select-outlined"
                    value={load}
                    onChange={handleLoadChange}
                    label="Approx Weight"
                  >
                    <Option value={1}>0-1 Tone</Option>
                    <Option value={2}>1-2 Tones</Option>
                    <Option value={3}>2-3 Tones</Option>
                    <Option value={4}>4-5 Tones</Option>
                    <Option value={5}>More than 5 Tones</Option>
                  </Select>
                </FormControlWrapper>
              </Grid>
            )}
            {isHouseMoving() && (
              <Grid item xs={12}>
                <FormControlWrapper variant="outlined">
                  <InputLabel id="bdrms-select-outlined-label">
                    Number of Bedrooms
                  </InputLabel>
                  <Select
                    labelId="bdrms-select-outlined-label"
                    id="bdrms-select-outlined"
                    value={load}
                    onChange={handleLoadChange}
                    label="Number of Bedrooms"
                  >
                    <Option value={1}>1 Bed Room</Option>
                    <Option value={2}>2 Bed Rooms</Option>
                    <Option value={3}>3 Bed Rooms</Option>
                    <Option value={4}>4 Bed Rooms</Option>
                    <Option value={5}>5 Bed Rooms</Option>
                  </Select>
                </FormControlWrapper>
              </Grid>
            )}
            {isOfficeMoving() && (
              <Grid item xs={12}>
                <FormControlWrapper variant="outlined">
                  <InputLabel id="office-select-outlined-label">
                    Approx SQ Feet
                  </InputLabel>
                  <Select
                    labelId="office-select-outlined-label"
                    id="office-select-outlined"
                    value={load}
                    onChange={handleLoadChange}
                    label="Approx SQ Feet"
                  >
                    <Option value={1}>0 -2500 sq/ft</Option>
                    <Option value={2}>2500-4500 sq/ft</Option>
                    <Option value={3}>4500 -7000 sq/ft</Option>
                    <Option value={4}>7000 -10000 sq/ft</Option>
                    <Option value={5}>Above 10000 sq/ft</Option>
                  </Select>
                </FormControlWrapper>
              </Grid>
            )}
            <Grid item xs={12}>
              <FormContainer>
                <Label>Pick Up Location</Label>
                <MapSearchInput inputType="pickup" />
              </FormContainer>
            </Grid>
            <Grid item xs={12}>
              <FormContainer>
                <Label>Destination Of Your Goods</Label>
                <MapSearchInput inputType="destination" />
              </FormContainer>
            </Grid>
          </Grid>
          <SubmitButton
            type="button"
            onClick={handleSubmit}
            primary={canSave}
            disabled={!canSave}
          >
            Order Truck
          </SubmitButton>
        </Form>
      </FormPaper>
    </Container>
  );
};

export default OderForm;
