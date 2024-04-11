import { Card, Stack, Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
import SortTab from "../profile/SortTab";
import PostsCard from "../PostsCard";
import { connect } from "react-redux";
import Loading from "../Loading";

const UserTab = (prop) => {
  const { userData, userName } = prop;
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState([]);
  const value = collection(database, "posts");
  const [tab, setTab] = useState("posts");
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  console.log();

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  }, []);

  const posts = val.map((values, index) => {
    if (userName === values.userName) {
      return <PostsCard values={values} key={index}/>;
    }
  });

  return (
    <Stack direction="column" spacing={2} mt={2}>
      <Card
        sx={{ padding: 0, marginTop: "10px", border: "1px solid gainsboro" }}
        elevation={0}
      >
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Posts" value="posts" />
          <Tab label="Liked" value="liked" />
          <Tab label="Comments" value="comments" />
        </Tabs>
      </Card>
      <SortTab />
      {
        loading? <Loading /> : posts
      }
      {/* {posts} */}
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    userName: state.userProfile.userName,
  };
};

export default connect(mapStateToProps, null)(UserTab);
