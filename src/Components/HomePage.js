import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import TopPost from "./TopPost";
import { Grid, Stack } from "@mui/material";
import PostsCard from "./PostsCard";
import TopPostCard from "./TopPostCard";
import Posts from "./Posts";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import { setBio } from "../redux";
import { connect } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

const HomePage = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Stack className="main" minWidth={"600px"} maxWidth={"900px"}>
      <Navbar />
      <Grid
        container
        alignItems="flex-start"
        spacing={{ xs: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={8}>
          <Posts />
        </Grid>
        {!isMobile && (
          <Grid item xs={12} sm={4}>
            <TopPost />
          </Grid>
        )}
      </Grid>
    </Stack>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setBio: (data) => dispatch(setBio(data)),
  };
};

export default connect(null, mapDispatchToProps)(HomePage);
