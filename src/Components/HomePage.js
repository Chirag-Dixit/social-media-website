import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import TopPost from "./TopPost";
import { Grid, Stack, Typography } from "@mui/material";
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
  const {search} = props

  return (
    <Stack className="main" minWidth={"600px"} maxWidth={"900px"}>
      <Navbar />
      {
        search != '' && <Typography variant="h6" sx={{
          marginTop: '10px', 
          color: 'red'
        }}>Showing Results for '{search}'</Typography>
      }
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

const mapStateToProps = state => {
  return{
    search: state.search.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBio: (data) => dispatch(setBio(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
