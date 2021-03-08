import React from "react";

import { Edit, SimpleForm, TextInput } from "react-admin";

const EditClient = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="firstname" />
        <TextInput source="lastname" />
        <TextInput source="phoneno" />
        <TextInput source="email" />
        <TextInput source="rating" />
      </SimpleForm>
    </Edit>
  );
};

export default EditClient;
