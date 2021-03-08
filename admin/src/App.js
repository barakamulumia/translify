import { Admin, Resource, ListGuesser } from "react-admin";
import { ClientList, EditClient, CreateClient } from "./compnents/clients";
import { dataProvider } from "./dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="clients"
      list={ClientList}
      edit={EditClient}
      create={CreateClient}
    />
    <Resource name="drivers" list={ListGuesser} />
  </Admin>
);

export default App;
