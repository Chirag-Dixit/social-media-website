import { Button, Card, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import User from '../../User.png'
import { connect } from 'react-redux'

const ProfileCard = (prop) => {
  const {userData} = prop

  return (
    <Card sx={{
      marginTop: '16px',
      padding: '10px', 
      border: '1px solid gainsboro',
    }} elevation={0}>
      <Stack direction='column' alignItems='center' sx={{
        padding: '10px'
      }} spacing={2}>
        {/* image */}
        <img src={User} style={{
          width: '100px',
          height: '100px',
        }}/>
        <Typography variant='h5'>{userData?.displayName}</Typography>
        <Typography variant='subtitle1'>bio</Typography>
        <Button>Edit Bio</Button>
        <Typography variant='subtitle1'>Likes count, Posts count</Typography>
      </Stack>
    </Card>
  )
}

const mapStateToProps = state =>{
  return{
    userData: state.login.userData,
  }
}

export default connect(mapStateToProps, null)(ProfileCard)
