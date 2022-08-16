import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Props {
  link: string
  style?: any
}

const LearnMoreButton = ({ link, style }: Props) => {
  return (
    <Button
      variant='outlined'
      component={Link}
      to={link}
      sx={{
        ...style,
        fontWeight: 'bold',
        margin: '2em',
        borderRadius: '30px',
       
      }}
    >
      <span>Learn More</span>
    </Button>
  )
}

export default LearnMoreButton
