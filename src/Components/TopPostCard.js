import { Paper } from '@mui/material'
import React from 'react'

const TopPostCard = () => {
  return (
    <Paper variant='outlined' elevation={0} sx={{
        height: '180px',
        width: '91%',
        padding: '10px'
    }}>
        This is a Top Post Card
    </Paper>
  )
}

export default TopPostCard
