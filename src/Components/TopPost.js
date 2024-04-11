import React, { useEffect, useState } from "react";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Stack, Typography } from "@mui/material";
import TopPostCard from "./TopPostCard";
import { database } from "../firebase";
import Loading from "./Loading";
import { collection, getDocs } from "firebase/firestore";

const TopPost = () => {
  const [val, setVal] = useState([])
  const value = collection(database, 'posts')
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const getData = async()=>{
      const dbVal = await getDocs(value)
      setVal(dbVal.docs.map((doc) => ({...doc.data(), id:doc.id})))
      setLoading(false);
    }

    getData()
  }, [])

  const topPosts = val.map((values, index) =>{
    if(values.likes >= 3){
      return <TopPostCard values={values} key={index}/>
    }
  })

  return (
    <Stack direction='column' mt={2} spacing={2}>
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        padding={2}
        border={1}
        borderColor="grey.400"
        borderRadius={1}
        sx={{
          height: "25px",
        }}
      >
        <EqualizerIcon fontSize="medium" color="black.300" />
        <Typography variant="h7">Top Posts</Typography>
      </Stack>
      {
        loading ? <Loading /> : topPosts 
      }
    </Stack>
  );
};

export default TopPost;
