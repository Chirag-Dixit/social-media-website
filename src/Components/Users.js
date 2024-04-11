import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import ProfileCard from "./profile/ProfileCard";
import ProfileTab from "./profile/ProfileTab";
import UserCard from "./profileUser/UserCard";
import UserTab from "./profileUser/UserTab";

const Users = (prop) => {
  return (
    <div>
      <Navbar />
      <Grid container spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <UserTab />
        </Grid>
        <Grid item xs={4} >
          <UserCard/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Users;
