import { Grid, Typography } from '@mui/material'
import React from 'react'

const Estimate = () => {
  return (
    <Grid
      container
      direction={'column'}
      sx={{
        marginLeft:'5rem',
        marginBottom: '1rem',
      }}
    >
      <Grid item>
        <Typography
          variant='h2'
          gutterBottom
          align={'left'}
        >
          Estimate
        </Typography>
      </Grid>
    </Grid>
  )

}

export default Estimate
