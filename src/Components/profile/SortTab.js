import { MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { setFilter } from '../../redux/Filter/filterAction'
import { connect } from "react-redux";

const SortTab = (props) => {
  const [filter, setFilter] = useState("random");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(()=>{
    props.setFilter(filter)
  }, [filter])

  return (
    <div
      style={{
        border: "1px solid gainsboro",
        padding: "10px",
      }}
    >
      <Typography variant="string" color="grey">
        Sort by:{" "}
      </Typography>
      <Select
        value={filter}
        label="sort"
        onChange={handleChange}
        sx={{
          height: "35px",
          width: "150px",
        }}
      >
        <MenuItem value="random">Random</MenuItem>
        <MenuItem value="latest">Latest</MenuItem>
        <MenuItem value="likes">Likes</MenuItem>
        <MenuItem value="comments">Comments</MenuItem>
        <MenuItem value="earliest">Earliest</MenuItem>
      </Select>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return{
    setFilter: (filter) => dispatch(setFilter(filter)),
  }
}

export default connect(null, mapDispatchToProps)(SortTab);
