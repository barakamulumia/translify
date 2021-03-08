import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ClientList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="role" />
        <TextField source="id" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="phoneno" />
        <TextField source="email" />
        <TextField source="rating" />
        <EditButton label="Edit" basePath="/clients" />
        <DeleteButton label="Delete" basePath="/clients" />
      </Datagrid>
    </List>
  );
};

export default ClientList;
