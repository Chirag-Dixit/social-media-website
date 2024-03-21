import React from 'react'
import NewPost from './NewPost'
import { Stack } from '@mui/material'
import PostsCard from './PostsCard'

const Posts = () => {
  return (
    <Stack direction='column' mt={2} spacing={2}>
      <NewPost />
      <PostsCard />
      <PostsCard />
    </Stack>
  )
}

export default Posts
