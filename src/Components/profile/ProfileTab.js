import { Card, Stack, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import SortTab from "./SortTab";

const ProfileTab = () => {
  const [tab, setTab] = useState("posts");
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };
  return (
    <Stack direction='column' spacing={2} mt={2}>
      <Card sx={{ padding: 0, marginTop: "10px", border: '1px solid gainsboro' }} elevation={0}>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Posts" value="posts" />
          <Tab label="Liked" value="liked" />
          <Tab label="Comments" value="comments" />
        </Tabs>
      </Card>
      <SortTab />
    </Stack>
  );
};

export default ProfileTab;
