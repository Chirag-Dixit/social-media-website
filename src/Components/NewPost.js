import { Button, MenuItem, Select, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPost = (prop) => {
  const {isLoggedIn} = prop
  const [filter, setFilter] = useState("latest");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const handlePost = () => {
    if(isLoggedIn){
      navigate('/createpost')    
    }else{
      navigate('/login')
    }
  }

  return (
    <Stack
      direction="row"
      padding={2}
      border={1}
      borderColor="grey.400"
      borderRadius={1}
      justifyContent='space-between'
    >
      <Button variant="outlined" onClick={handlePost}>+New Post</Button>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="string" color='grey' width={1} sx={{
          display: {
            xs: 'none', 
            sm: 'block',
          }
        }}>Sort by: </Typography>
        <Select
          value={filter}
          label="sort"
          onChange={handleChange}
          sx={{
            height: "35px",
            width: 'fitContent', 
            maxWidth: 150
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

const mapStateToProps = state =>{
  return{
    isLoggedIn: state.login.isLoggedIn,
  }
}

export default connect(mapStateToProps, null)(NewPost);
