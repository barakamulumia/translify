import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  ShowButton,
  ChipField,
} from "react-admin";

const DriverList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="email" />
        <TextField source="truckno" />
        <TextField source="phoneno" />
        <TextField source="dlno" />
        <TextField source="address" />
        <ChipField source="approval_status" />
        <ShowButton label="View" basePath="/drivers" />
        <DeleteButton label="Delete" basePath="/drivers" />
      </Datagrid>
    </List>
  );
};

export default DriverList;
