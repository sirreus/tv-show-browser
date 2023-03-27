import React from 'react'
import { useNavigate } from 'react-router-dom'

import { GoHomeButton, Text, Title, Wrap } from './style'

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <Wrap>
      <Title>Oops!...</Title>
      <Text>It looks like you're looking for the content we don't have. =)</Text>
      <GoHomeButton onClick={() => navigate('/')}>Go to main page</GoHomeButton>
    </Wrap>
  )
}

export default NotFoundPage
