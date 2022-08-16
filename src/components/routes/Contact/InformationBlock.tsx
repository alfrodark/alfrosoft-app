import { Grid, Link, Typography } from '@mui/material'
import { Email, Phone } from '@mui/icons-material'
const InformationBlock = () => {
  return (
    <Grid
      item
      container
      direction='column'
      md={4}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Grid item>
        <Typography variant='h2'>Contact Us</Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1'></Typography>
      </Grid>
      {/* <Grid
        item
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Phone />
        <Typography variant='body1'></Typography>
      </Grid> */}
      <Grid
        item
        container
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Email />
        <Typography variant='body1'>
        <Link href="mailto:alfrosoft@gmail.com">
              alfrosoft@gmail.com
        </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default InformationBlock
