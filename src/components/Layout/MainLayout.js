import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SideBar from './SideBar'
import Header from './Header';
import SidePanel from '../SidePanel';
import { Typography } from '@mui/material';
import { useTransition, animated } from 'react-spring'

export default function MainLayout({component: Component, routerAnimProps, ...rest}) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* <SideBar /> */}
      <Box component="main" sx={{ flexGrow: 1 }} style={{ width: '100%', marginTop: '64px',  }}>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={4} sx={{width: '100%', display: 'flex', justifyContent: { lg: 'flex-end', xs: 'center' }, alignItems: 'flex-start'}}>
            <SidePanel />
          </Grid>
          <Grid item sm={12} lg={8}>
            <animated.div style={{ ...routerAnimProps, 
              //position: 'absolute', top: '64px', width: '100%'
            }}>
              <Component {...rest} />
            </animated.div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: '32px', paddingBottom: '16px'}}>
        <Typography variant="body2">Built with ❤️ and ☕ in 2021</Typography>
      </Box>
    </Box>
  );
}
