import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import { ProfileSection, ProfileSectionHeader } from "./Profile.elements";
import DepositDialog from "./Deposit";
import WithdrawDialog from "./Withdraw";

export default function MobileMoney({ user }) {
  return (
    <Fragment>
      <Container maxWidth="sm">
        <ProfileSection>
          <ProfileSectionHeader>Mobile Money</ProfileSectionHeader>
          <p>Balance: $ {45} USD</p>
          {user.role === "client" ? <DepositDialog currentUser={user} /> : null}
          <WithdrawDialog currentUser={user} />
        </ProfileSection>
      </Container>
    </Fragment>
  );
}
