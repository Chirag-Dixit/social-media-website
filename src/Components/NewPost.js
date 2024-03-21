import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost = () => {
  const [filter, setFilter] = useState("latest");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePost = () => {
    //if user is not logged in navigate to login page else let him create new Post
    navigate('/login')
  }

  return (
    <Stack
      direction="row"
      spacing={8}
      padding={2}
      border={1}
      borderColor="grey.400"
      borderRadius={1}
      justifyContent='space-between'
    >
      <Button variant="outlined" onClick={handlePost}>+New Post</Button>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography variant="string" color='grey'>Sort by: </Typography>
        <Select
          value={filter}
          label="sort"
          onChange={handleChange}
          sx={{
            height: "35px",
            width: '150px'
          }}
        >
          <MenuItem value="latest">Latest</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
          <MenuItem value="comments">Comments</MenuItem>
          <MenuItem value="earliest">Earliest</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
};

export default NewPost;
