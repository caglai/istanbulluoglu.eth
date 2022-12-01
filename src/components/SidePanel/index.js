import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { styled } from '@mui/material/styles';

const links = [
  { icon: GitHubIcon, url: 'https://github.com/caglai'},
  { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/caglaistanbulluoglu/'},
  { icon: InstagramIcon, url: 'https://www.instagram.com/caglai/'},
  { icon: TwitterIcon, url: 'https://twitter.com/caglaistanbullu'},
  { icon: EmailIcon, url: 'mailto:cistanbu@sfu.ca'},
]

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    // color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.black,
    // boxShadow: theme.shadows[1],
    fontSize: '0.8rem',
    fontWeight: '300',
    fontFamily: "'Open Sans', sans-serif",
  },
}));

function SidePanel(props) {
  return (
    <Grid container spacing={2} sx={{maxWidth: '300px', position: { lg: 'fixed', xs: 'initial'}}}>
        <Grid item xs={12} style={{paddingTop: '40px', display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h6" style={{textAlign: 'center'}}></Typography>
            <Avatar
              alt="Cagla Istanbulluoglu"
              src="./static/profile.png"
              sx={{ width: 196, height: 196 }}
            />
        </Grid>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          <BootstrapTooltip enterTouchDelay={0} leaveTouchDelay={2500} title="Pronounces as /cha:la/ in case it isn't obvious 😊">
            <Typography
              variant="h5"
              noWrap
              component="span"
              sx={{ 
                paddingTop: '16px', letterSpacing: '0.0001em', fontFamily: "'Open Sans', sans-serif", fontWeight: 300, 
                textDecoration: 'underline',
                textDecorationStyle: 'dotted',
                textDecorationColor: '#BD1E51',
                textDecorationThickness: '1.5px',
                textUnderlineOffset: '4px',
                lineHeight: 2,
                cursor: 'pointer', 
              }}
            >
              CAGLA
            </Typography>
          </BootstrapTooltip>
          <Typography
            variant="h5"
            noWrap
            component="span"
            sx={{ paddingTop: '16px', letterSpacing: '0.0001em', fontFamily: "'Open Sans', sans-serif", fontWeight: 300, lineHeight: 2 }}
          >
            &nbsp;ISTANBULLUOGLU
          </Typography>
        </Grid>
        <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
          {links.map(l => (
            <a key={l.url} href={l.url} target="_blank" style={{color: 'black'}}>
              <IconButton color="secondary" component="span">{React.createElement(l.icon)}</IconButton>
            </a>
          ))}
        </Grid>
    </Grid>
  );
}

export default SidePanel;