import React from 'react';
import Container from '@mui/material/Container';
import Dot from './Dot'

function AccountsView(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container style={{maxWidth: '900px', marginLeft: 'initial', paddingTop: '16px'}}>
      <Dot />
    </Container>
  );
}

export default AccountsView;