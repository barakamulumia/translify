import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import GlobalStyle from "./Resources/Styles/global";
import FileUploadComponent from "./Components/UploadPhoto/UploadPhoto";

import {
  Home,
  Discover,
  Services,
  SignUp,
  SignIn,
  Client,
  Driver,
  Admin,
  Profile,
  OrderTruck,
} from "./Pages";

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/services">
          <Services withNav="true" />
        </Route>

        <Route exact path="/driver/sign-up">
          <SignUp route="driver" />
        </Route>
        <Route exact path="/driver/sign-in">
          <SignIn route="driver" />
        </Route>

        <Route exact path="/client/sign-up">
          <SignUp route="client" />
        </Route>
        <Route exact path="/client/sign-in">
          <SignIn route="client" />
        </Route>

        <Route exact path="/profile" component={Profile} />
        <Route exact path="/notifications" component={FileUploadComponent} />
        <Route exact path="/client/order-truck" component={OrderTruck} />
        <Route path="/client" component={Client} />
        <Route path="/driver" component={Driver} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </div>
  );
}
