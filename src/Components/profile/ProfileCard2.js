import React, { useState } from "react";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import User from "../../User.png";
import { doc, updateDoc } from "firebase/firestore";
import { database } from "../../firebase";

const ProfileCard2 = (props) => {
  const { values } = props;
  const [editBio, setEditBio] = useState(false);
  const [newBio, setNewBio] = useState("");

  const handleChange = async () => {
    const updateUserData = doc(database, "users", values.id);
    await updateDoc(updateUserData, { bio: newBio });
    window.location.reload(false);
  };

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
        <Typography variant="">{values.userName}</Typography>
        {editBio ? (
          <Stack direction="column" alignItems="center" spacing={2}>
            <TextField
              id="multiline-flexible"
              label="Edit Bio..."
              multiline
              maxRows={4}
              onChange={(e) => setNewBio(e.target.value)}
            />
            <Stack direction="row" alignItems="center">
              <Button variant="outlined" onClick={handleChange}>
                Change
              </Button>
              <Button variant="outlined" onClick={() => setEditBio(false)}>
                Cancel
              </Button>
            </Stack>
          </Stack>
        ) : (
          <Stack direction="column" alignItems="center">
            <Stack direction="row">
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bolder",
                }}
              >
                Bio:
              </Typography>
              <Typography
                variant="subtitle1"
                textAlign="center"
                lineHeight={1.5}
                marginBottom={1}
                marginTop={0.2}
              >
                {values.bio}
              </Typography>
            </Stack>
            <Button onClick={() => setEditBio(true)}>Edit Bio</Button>
          </Stack>
        )}

        <Stack direction="row" spacing={2}>
          <Typography variant="subtitle1" color="primary">
            Likes: {values.likesCount}
          </Typography>
          <Typography variant="subtitle1" color="primary">
            Posts: {values.postsCount}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProfileCard2;
