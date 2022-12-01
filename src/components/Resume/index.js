import React from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import AddIcon from '@mui/icons-material/Add';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import moment from 'moment'
import { Link } from "react-router-dom";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function Resume(props) {

  return (
    <Container style={{maxWidth: '900px', marginLeft: 'initial', paddingTop: '16px'}}>
      <Typography component="span" variant="h5" style={{fontWeight: 300}}>RESUME</Typography>
      <Typography component="span" variant="caption" color="text.secondary" style={{float: 'right', lineHeight: 4}}>last updated on {moment("2022-12-01").format("yyyy-MM-DD")}</Typography>

      <Divider style={{marginTop: '16px', marginBottom: '16px'}}/>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2">PDF version can be found <Link to="/resume/pdf">here</Link>.</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography color="secondary" variant="h6" style={{textAlign: 'center'}}>EDUCATION</Typography>

          <Timeline style={{padding: 0}}>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2020 - Present
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><b>B.Sc. in Computer Science</b><br />Simon Fraser University, BC, Canada</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2017 - 2020
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><b>Ph.D. Candidate in Chemistry</b><br />Simon Fraser University, BC, Canada</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2014 - 2016
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><b>M.Sc. in Chemistry</b><br />Middle East Technical University, Turkey</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2009 - 2014
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent><b>B.Sc. in Chemistry</b><br />Middle East Technical University, Turkey</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item xs={12}>
          <Typography color="secondary" variant="h6" style={{textAlign: 'center'}}>PROJECTS</Typography>

          <Timeline style={{padding: 0}}>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <b>My decentralized personal webpage on blockchain</b><br />
                  Implemented a single page React app using ThreadDB, which is a decentralized database on blockchain, FileCoin and IPFS.
                  Deployed this to the decentralized DNS service on Ethereum called ENS.
                </div>
                <div style={{marginTop: '24px'}}>
                  <b>Mentor portal for BayTree, an educational charity for women and girls</b><br />
                  Implemented a full-stack React application with a fully functional login system backed by a MongoDB database as a team of 6.
                  Took the responsibility of DB management and majority of the back-end implementation. Took on scrum master role for a part of the project and received positive feedback. 
                </div>
                <div style={{marginTop: '24px'}}>
                  <b>My Shoe-size Finder</b><br />
                  Built a webpage to solve one of the pains in online shopping – what is the right shoe size for me on this shoe model? It compares your size on shoes you already bought with
                  other people’s shoes sizes on the same set of shoes to make an educated guess on the one you’d like to purchase. So far, this algorithm has worked perfectly well for me and my friends.
                </div>
                <div style={{marginTop: '24px'}}>
                  <b>Financial Tracker</b><br />
                  Built a serverless React webpage using Firebase functions/auth/db to keep track of monthly financial assets over time. Features passwordless login and periodically connects to several
                  FX and DCE APIs to populate historical data on stocks, currencies, and cryptocurrencies. It also makes use of local storage to allow users to use the app without signing up to increase
                  user retention.
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item xs={12}>
          <Typography color="secondary" variant="h6" style={{textAlign: 'center'}}>EXPERIENCE</Typography>

          <Timeline style={{padding: 0}}>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2017 - 2020
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                  <b>Research and Teaching Assistant </b><br /><i>Simon Fraser University, BC, Canada</i><br />
                  <Typography variant="body1" style={{paddingTop: '8px'}}>
                    Assisted several undergrad-level Chemistry courses by mentoring students, supervising them in laboratories,
                    preparing quizzes/exams, and assessing their reports
                  </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2015 - 2017
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                  <b>Research and Teaching Assistant</b><br /><i>Middle East Technical University, Turkey</i><br />
                  <Typography variant="body1" style={{paddingTop: '8px'}}>
                    Assisted several grad- and undergrad-level Chemistry courses, held lectures, by mentoring students, supervising 
                    them in laboratories, preparing quizzes/exams, and assessing their reports.
                  </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2014 - 2015
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                  <b>Project Researcher at ECOPIX EU Project</b><br /><i>Middle East Technical University, Turkey</i><br />
                  <Typography variant="body1" style={{paddingTop: '8px'}}>
                    Designed and synthesized several monomers and red, green, blue, and yellow polymers for electrochromic device applications.
                  </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary" sx={{width: { xs: '80px', sm: '150px'}, paddingLeft: 0, flex: 'initial'}}>
                2013
              </TimelineOppositeContent>
              <TimelineSeparator><TimelineDot /><TimelineConnector /></TimelineSeparator>
              <TimelineContent>
                  <b>Visiting Researcher</b><br /><i>GUNAM OSC Laboratory, Nurnberg, Germany</i><br />
                  <Typography variant="body1" style={{paddingTop: '8px'}}>
                    Synthesized Donor-Acceptor type low and medium band gap polymers; conducted their electrochemical, spectroelectrochemical,
                    and kinetic characterizations; and constructed their organic light emitting diode and organic solar cell applications.
                  </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Resume;