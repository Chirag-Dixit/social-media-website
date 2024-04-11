import { Box, Button, Stack, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import User from "../User.png";
import { database } from "../firebase";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const SetupPage = (prop) => {
  const { userData } = prop;
  const [bio, setBio] = useState("");
  const value = collection(database, "bio");
  const navigate = useNavigate()

  const handleSetup = async () => {
    await addDoc(value, { userName: userData.displayName, bio: bio });
    navigate('/profile')
  };
  return (
    <Box
      textAlign="center"
      justifyContent="center"
      mt={5}
      padding={1}
    >
      <h1
        style={{
          color: "grey",
        }}
      >
        Complete Setup
      </h1>
      <Stack direction="column" alignItems="center" spacing={2} mt={5}>
        <img
          src={User}
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <TextField
          label="userName"
          size="small"
          disabled
          defaultValue={`${userData.displayName}`}
          color="success"
        />
        <TextField
          label="Enter Bio"
          size="small"
          multiline
          rows={5}
          sx={{
            width: "350px",
          }}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          autoFocus
        />

        <Button variant="contained" onClick={handleSetup}>Complete Setup</Button>
      </Stack>
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
  };
};

export default connect(mapStateToProps, null)(SetupPage);
