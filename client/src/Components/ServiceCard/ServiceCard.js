import React from "react";
import {
  CardHeader,
  CardContent,
  CardContainer,
  CardFooter,
} from "./ServiceCard.elements";
import { Grid } from "@material-ui/core";

const ServiceCard = ({ heading, content, footer }) => (
  <Grid item xs={12} sm={6} md={4}>
    <CardContainer>
      <CardHeader>{heading}</CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>{footer}</CardFooter>
    </CardContainer>
  </Grid>
);

export default ServiceCard;
