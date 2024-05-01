import React, { useEffect, useState } from "react";
import NewPost from "./NewPost";
import { Stack } from "@mui/material";
import PostsCard from "./PostsCard";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";
import Loading from "./Loading";
import { connect } from "react-redux";
import { setFilter } from "../redux/Filter/filterAction";

const Posts = (props) => {
  const { filter, setFilter } = props;
  const [val, setVal] = useState([]);
  const value = collection(database, "posts");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    var bySearch = val.map((values, index) => <PostsCard values={values} key={index} />);
    if (props.search.trim() === "") {
      setPosts(bySearch);
    } else {
      setPosts(
        bySearch.filter((values) => {
          return values.props.values.title.includes(props.search);
        })
      );
    }
  }, [props.search, val]);

  //data from firestore ka code
  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };

    getData();
  }, []);

  //posts ki array ka code
  useEffect(() => {
    setPosts(
      val.map((values, index) => {
        return <PostsCard values={values} key={index} />;
      })
    );
  }, [val]);

  //Sorting ka code
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
  }, [filter]);

  return (
    <Stack direction="column" mt={2} spacing={2} mb={5}>
      <NewPost />
      {loading ? <Loading /> : posts}
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter.filter,
    search: state.search.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => dispatch(setFilter(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
