import React, { Fragment } from "react";
import { SignIn } from "../../Components";

export default function SignInPage({ route }) {
  return (
    <Fragment>
      <SignIn route={route} />
    </Fragment>
  );
}
