import React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

const DriverList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="firstname" />
        <TextField source="lastname" />
        <TextField source="phoneno" />
        <TextField source="email" />
        <TextField source="rating" />
        <button>❎</button>
        <button>☑</button>
        <DeleteButton label="Delete" basePath="/clients" />
      </Datagrid>
    </List>
  );
};

export default DriverList;
