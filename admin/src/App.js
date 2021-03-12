import { Admin, Resource } from "react-admin";
import { ClientList, EditClient, CreateClient } from "./compnents/clients";
import { DriverList } from "./compnents/drivers";
import { dataProvider } from "./dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="clients"
      list={ClientList}
      edit={EditClient}
      create={CreateClient}
    />
    <Resource name="drivers" list={DriverList} />
  </Admin>
);

export default App;
