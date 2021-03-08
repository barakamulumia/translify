import React from "react";
import { Grid } from "@material-ui/core";
import {
  ProfileSection,
  ProfileSectionHeader,
  PersonalDetailsItem,
} from "./Profile.elements";
import EditInfoDialog from "./EditInfo";
import ChangePasswordDialog from "./ChangePassword";

export default function PersonalInfo({ currentUser }) {
  return (
    <Grid item md={5} sm={8} xs={12}>
      <ProfileSection>
        <ProfileSectionHeader>Personal Information</ProfileSectionHeader>
        <PersonalDetailsItem>
          <p>
            <strong>Email:</strong>
          </p>
          <p>{currentUser.email}</p>
        </PersonalDetailsItem>
        <PersonalDetailsItem>
          <p>
            <strong>First Name:</strong>
          </p>
          <p>{currentUser.firstname}</p>
        </PersonalDetailsItem>
        <PersonalDetailsItem>
          <p>
            <strong>Last Name:</strong>
          </p>
          <p>{currentUser.lastname}</p>
        </PersonalDetailsItem>
        <PersonalDetailsItem>
          <p>
            <strong>Phone No:</strong>
          </p>
          <p>{currentUser.phoneno}</p>
        </PersonalDetailsItem>
        <div
          style={{
            display: "felex",
            flexDirection: "column",
          }}
        >
          <EditInfoDialog user={currentUser} />
          <ChangePasswordDialog />
        </div>
      </ProfileSection>
    </Grid>
  );
}
