import React from "react";
import { Show, SimpleShowLayout, TextField } from "react-admin";
import Button from "@material-ui/core/Button";

const DriverShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="email" />
      <TextField source="truckno" />
      <TextField source="phoneno" />
    </SimpleShowLayout>
  </Show>
);

export default DriverShow;
