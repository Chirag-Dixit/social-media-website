import React, { useState } from "react";
import { Card, Stack, Typography } from "@mui/material";
import User from "../../User.png";

const ProfileCard = (prop) => {
  const { values } = prop;

  return (
    <Card
      sx={{
        marginTop: "16px",
        padding: "10px",
        border: "1px solid gainsboro",
      }}
      elevation={0}
    >
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: "10px",
        }}
        spacing={2}
      >
        {/* image */}
        <img
          src={User}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <Typography variant="h5">{values.userName}</Typography>
        <Stack direction="row">
          <Typography variant="subtitle1" sx={{
            fontWeight: 'bolder'
          }}>Bio:</Typography>
          <Typography variant="subtitle1" textAlign="center" lineHeight={1.5} marginBottom={1} marginTop={0.2}>
            {values.bio}
          </Typography>
        </Stack>

        <Typography variant="subtitle1">Likes count, Posts count</Typography>
      </Stack>
    </Card>
  );
};

export default ProfileCard;
