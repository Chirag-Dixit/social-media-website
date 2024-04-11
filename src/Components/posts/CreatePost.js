import { Box, Grid, Stack } from "@mui/material";
import React from "react";
import Navbar from "../Navbar";
import CreatePostBox from "./CreatePostBox";
import TopPost from "../TopPost";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <Stack>
      <Navbar />
      <Grid
        container
        alignItems="flex-start"
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={8}>
          <CreatePostBox />
        </Grid>
        <Grid item xs={4}>
          <TopPost />
        </Grid>
      </Grid>
      <Link to="/" style={{marginTop: '10px'}}>&lt;&lt;Back to Home Page</Link>
    </Stack>
  );
};

export default CreatePost;
