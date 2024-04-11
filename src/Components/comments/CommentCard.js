import { Paper, Typography, Stack } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const CommentCard = (props) => {
  const { values, userData } = props;

  let dateAndTime = {};
  let formatDate;

  const timeStamp = values.created;
  if (timeStamp) {
    const date = timeStamp.toDate();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString().substr(-2);

    let hours = date.getHours();
    const minutes = date.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    dateAndTime = {
      day,
      month,
      year,
      hours,
      minutes,
    };
    formatDate = `${day}/${month}/${year} ${hours}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    // console.log(formatDate);
  }

  return (
    <Stack
      elevation={0}
      // variant="elevation"
      sx={{
        width: "90%",
        height: "30%",
        padding: "10px",
        marginBottom: "10px",
        border: '2px solid gainsboro'
      }}
    >
      <Stack direction='row' justifyContent='space-between'>
        <Link
          to={
            userData?.displayName == values.userName
              ? "/profile"
              : `/users/${values.userName}`
          }
        >
          {values.userName}
          <br />
        </Link>
        <Typography variant="subtitle1" color="GrayText">
          {formatDate}
        </Typography>
      </Stack>
      <Typography>
        {values.content}
      </Typography>
    </Stack>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.login.userData,
  };
};

export default connect(mapStateToProps, null)(CommentCard);
