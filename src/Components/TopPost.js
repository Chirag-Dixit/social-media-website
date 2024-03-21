import React from "react";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Stack, Typography } from "@mui/material";
import TopPostCard from "./TopPostCard";

const TopPost = () => {
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

      <TopPostCard />
      <TopPostCard />
    </Stack>
  );
};

export default TopPost;
