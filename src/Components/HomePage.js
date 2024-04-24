import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import NewPost from "./NewPost";
import TopPost from "./TopPost";
import { Grid } from "@mui/material";
import PostsCard from "./PostsCard";
import TopPostCard from "./TopPostCard";
import Posts from "./Posts";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import { setBio } from "../redux";
import { connect } from "react-redux";

const HomePage = (props) => {
  //saving user bios in redux store for future use
  // const [val, setVal] = useState([]);
  // const userValue = collection(database, 'users')

  // useEffect(()=>{
  //   const getData = async() => {
  //     const dbVal = await getDocs(userValue)
  //     setVal(dbVal.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //   }

  //   getData()
  // }, [])

  // props.setBio(val)

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

const mapDispatchToProps = dispatch => {
  return{
    setBio: (data) => dispatch(setBio(data)),
  }
}


export default connect(null, mapDispatchToProps)(HomePage);
