import { MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const SortTab = () => {
  const [filter, setFilter] = useState("latest");
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
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
        <MenuItem value="latest">Latest</MenuItem>
        <MenuItem value="likes">Likes</MenuItem>
        <MenuItem value="comments">Comments</MenuItem>
        <MenuItem value="earliest">Earliest</MenuItem>
      </Select>
    </div>
  );
};

export default SortTab;
