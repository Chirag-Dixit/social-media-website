import { Card, Stack, Tab, Tabs } from "@mui/material";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase";
import SortTab from "../profile/SortTab";
import PostsCard from "../PostsCard";
import { connect } from "react-redux";
import Loading from "../Loading";

const UserTab = (prop) => {
  const { userData, userName, filter } = prop;
  const [loading, setLoading] = useState(true);
  const [val, setVal] = useState([]);
  const value = collection(database, "posts");
  const [tab, setTab] = useState("posts");
  const [posts, setPosts] = useState([]);

  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    setPosts(
      val.map((values, index) => {
        if (userName === values.userName) {
          return <PostsCard values={values} key={index} />;
        }
      })
    );
  }, [val]);

  useEffect(() => {
    if (filter === "latest") {
      var byDate = posts.slice(0);
      byDate.sort(function (a, b) {
        return b.props.values.created.seconds - a.props.values.created.seconds;
      });

      setPosts(byDate);
    } else if (filter === "likes") {
      var byLikes = posts.slice(0);
      byLikes.sort(function (a, b) {
        return b.props.values.likes - a.props.values.likes;
      });

      setPosts(byLikes);
    } else if (filter === "comments") {
      var byComments = posts.slice(0);
      byComments.sort(function (a, b) {
        return b.props.values.commentsCount - a.props.values.commentsCount;
      });

      setPosts(byComments);
    } else if (filter === "earliest") {
      var byDateOp = posts.slice(0);
      byDateOp.sort(function (a, b) {
        return a.props.values.created.seconds - b.props.values.created.seconds;
      });

      setPosts(byDateOp);
    }

    console.log(filter);
  }, [filter]);

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
      {loading ? <Loading /> : posts}
      {/* {posts} */}
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
    userName: state.userProfile.userName,
    filter: state.filter.filter,
  };
};

export default connect(mapStateToProps, null)(UserTab);