import React from "react";
import { Grid } from "@mui/material";
import Navbar from "./Navbar";
import ProfileCard from "./profile/ProfileCard";
import ProfileTab from "./profile/ProfileTab";
import useMediaQuery from "@mui/material/useMediaQuery";

const Profile = (prop) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} md={8}>
          <ProfileTab />
        </Grid>
        {!isMobile && (
          <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
            <ProfileCard />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Profile;
