import React, { Suspense } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Dot from '../DotView/Dot'
// const Dot = React.lazy(() => import('../DotView/Dot'));
// const Dot = React.lazy(() => import('../DotView/Dot'));

// const Dot = React.lazy(() => {
//   return new Promise(resolve => setTimeout(resolve, 0 * 1000)).then(
//     () =>import('../DotView/Dot')
//   );
// });

function AccountsView(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const stats = [
    { 
      title: 'Conferences attended', 
      value: 4, 
      expand: false,
      getDetails: () => (
        <>
        </>
      )
    },
    { 
      title: 'Papers published', 
      value: 3, 
      expand: false,
      getDetails: () => (
        <>
        </>
      )
    },
    { 
      title: 'Countries visited', 
      value: 12, 
      expand: true,
      unmount: true,
      getDetails: () => (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <Dot />
          </Suspense>
          <Typography variant="subtitle1" color="secondary">
            How do I draw this?
          </Typography>
          <Typography variant="body1" style={{marginTop: '8px'}}>
            I have written a small Python script that uses <a style={{ 
                paddingTop: '16px', letterSpacing: '0.0001em', 
                fontFamily: "'Open Sans', sans-serif", 
                fontWeight: 300, 
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
                textDecorationColor: '#BD1E51',
                textDecorationThickness: '1.5px',
                textUnderlineOffset: '4px',
                // lineHeight: 2,
                cursor: 'pointer', 
              }}
              href="https://github.com/toddkarin/global-land-mask" target="_blank">this very cool module</a> to calculate which coordinate is land vs ocean. Then, I use this to
            scale down and populate a JS array to draw these circles on a canvas. I think it's pretty arty and fun little project 😊
          </Typography> 
        </>
      )
    },
    { 
      title: 'Hours spent in building this page', 
      value: '43 (and still counting)', 
      expand: true,
      getDetails: () => (
        <>
          <Typography variant="subtitle1" color="secondary">
            How do I calculate this?
          </Typography>
          <Typography variant="body1" style={{marginTop: '8px'}}>
            When I make changes to this page, I start the development server using `react-scripts` to locally test changes. Every time I make a change,
            react-scripts tool automatically detects this and recompiles my changes. I have modified this process to also record the time of change in a
            JSON file, which I then aggregate to calculate the total time I have spent on this project 😊
          </Typography> 
        </>
      )
    },
    { 
      title: () => (<><a>IPFS nodes</a> pinning this page</>), 
      value: 2, 
      expand: true,
      getDetails: () => {
        var loadTimeSec = window.performance.getEntriesByType('navigation')[0].duration / 1000;
        return (
          <>
            <Typography variant="body1" style={{marginTop: '8px'}}>
              This page is hosted on IPFS network using Textile's ThreadDB implementation that uses FileCoin underneath to find a host. Therefore, the content you see now 
              is retrieved from a peer in IPFS's decentralized network. This is not as fast as traditional web, yet. In fact, it took <b>{loadTimeSec.toFixed(3)}</b> seconds
              to just discover a peer that has the content for this page and load that content. The more peers pin this page and the more nodes join the network, 
              the faster it will be to discover. 😊
            </Typography> 
          </>
        )
      }
    },
  ]

  return (
    <Container style={{maxWidth: '900px', marginLeft: 'initial', paddingTop: '16px'}}>
      <Typography component="span" variant="h5" style={{fontWeight: 300}}>STATS</Typography>

      <Divider style={{marginTop: '16px', marginBottom: '16px'}}/>

      {stats.map((stat, i) => {
        const panelName = 'panel' + i;
        return (
          <Accordion 
            key={i} 
            expanded={expanded === panelName} 
            onChange={stat.expand ? handleChange(panelName) : undefined}
            TransitionProps={{ unmountOnExit: stat.unmount || false }}
          >
            <AccordionSummary 
              style={{cursor: stat.expand ? 'pointer' : 'default'}} 
              expandIcon={<ExpandMoreIcon style={{visibility: stat.expand ? 'inherit' : 'hidden'}}/>}
            >
              <Typography sx={{ width: { lg: '50%', xs: '66%' }, flexShrink: 0 }}>
                {typeof stat.title === 'function' ? stat.title() : stat.title}
              </Typography>
              <Typography sx={{ paddingLeft: '12px', color: 'text.secondary' }}>{stat.value}</Typography>
            </AccordionSummary>
            {stat.expand && 
              <AccordionDetails>
                {stat.getDetails()}
              </AccordionDetails>
            }
          </Accordion> 
        )
      })}
    </Container>
  );
}

export default AccountsView;