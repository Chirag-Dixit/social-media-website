import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import ProfileCard from "./profile/ProfileCard";
import ProfileTab from "./profile/ProfileTab";

const Profile = (prop) => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <ProfileTab />
        </Grid>
        <Grid item xs={4} >
          <ProfileCard/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
