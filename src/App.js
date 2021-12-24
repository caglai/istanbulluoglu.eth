import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { useTransition, animated, config } from 'react-spring'

import Home from './components/Home';
import Resume from './components/Resume';
import ResumePdf from './components/Resume/ResumePdf';
import Stats from './components/Stats';
import Header from './components/Layout/Header';
import SidePanel from './components/SidePanel';

const AnimatedRouter = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const transitions = useTransition(location, {
    from: { opacity: 0, y: -15 },
    enter: { opacity: 1, y: 0},
    leave: { opacity: 0, y: 0, position: 'absolute', top: 0 },
    config: { ...config.stiff }
  })

  const tran = transitions((props, item) => (
      <animated.div style={{ ...props}}>
        <Routes location={item}>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/resume" element={<Resume />}/>
          <Route exact path="/resume/pdf" element={<ResumePdf />}/>
          <Route exact path="/stats" element={<Stats />}/>
        </Routes>
      </animated.div>
  ));

  return (
    <div style={{position: 'relative'}}>
      {tran}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        {/* <SideBar /> */}
        <Box component="main" sx={{ flexGrow: 1 }} style={{ width: '100%', marginTop: '64px',  }}>
          <Grid container spacing={2}>
            <Grid item sm={12} lg={4} sx={{width: '100%', display: 'flex', justifyContent: { lg: 'flex-end', xs: 'center' }, alignItems: 'flex-start'}}>
              <SidePanel />
            </Grid>
            <Grid item sm={12} lg={8}>
              <AnimatedRouter />
            </Grid>
          </Grid>
        </Box>

        <Box component="footer" sx={{display: 'flex', justifyContent: 'center', marginTop: '32px', paddingBottom: '16px'}}>
          <Typography variant="body2">Built with ❤️ and ☕ in 2021</Typography>
        </Box>
      </Box>
    </Router>
  );
}
