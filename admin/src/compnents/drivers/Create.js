import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
const CreateClient = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="firstname" required />
        <TextInput source="lastname" required />
        <TextInput source="phoneno" required />
        <TextInput source="email" required />
        <TextInput source="password" required />
      </SimpleForm>
    </Create>
  );
};

export default CreateClient;
