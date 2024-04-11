import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <Stack>
      <CircularProgress size={50} sx={{ my: 1 }}/>
      <Typography color='text.secondary' sx={{ mb: 3 }}>Loading</Typography>
    </Stack>
  )
}

export default Loading
