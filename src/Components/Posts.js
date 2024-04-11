import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import { Stack } from "@mui/material";
import PostsCard from "./PostsCard";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import Loading from "./Loading";

const Posts = () => {
  const [val, setVal] = useState([]);
  const value = collection(database, "posts");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState()

  useEffect(() => {
    const getData = async () => {
      // setLoading(true);
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  },[]);

  const posts = val.map((values, index) => {    
    return <PostsCard values={values} key={index}/>;
  });

  //sort posts on the basis of the selected sort by parameter
  useEffect(()=>{

  }, [])

  return (
    <Stack direction="column" mt={2} spacing={2} mb={5}>
      <NewPost />
      {loading ? <Loading /> : posts}
    </Stack>
  );
};

export default Posts;
