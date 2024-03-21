import React from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import TopPost from "./TopPost";
import { Grid } from "@mui/material";
import PostsCard from "./PostsCard";
import TopPostCard from "./TopPostCard";
import Posts from "./Posts";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Grid container alignItems='flex-start' spacing={{ xs: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <Posts />
        </Grid>
        <Grid item xs={4} >
          <TopPost />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
