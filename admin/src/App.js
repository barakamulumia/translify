import { Admin, Resource, ShowGuesser } from "react-admin";
import { ClientList, EditClient, CreateClient } from "./compnents/clients";
import { DriverList, DriverShow } from "./compnents/drivers";
import { dataProvider } from "./dataProvider";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="clients"
      list={ClientList}
      edit={EditClient}
      create={CreateClient}
    />
    <Resource name="drivers" list={DriverList} show={ShowGuesser} />
  </Admin>
);

export default App;
