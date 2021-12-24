import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useSpring, animated, config } from 'react-spring'

import introMarkdownFile from './intro.md'

function AccountsView(props) {
  const [text, setText] = React.useState(undefined);
  const [styles, api] = useSpring(() => ({ 
    from: { opacity: 0 }, 
    config: { duration: 300 } 
  }))
  
  useEffect(() => {
    if (text == undefined) {
      fetch(introMarkdownFile)
        .then((response) => response.text())
        .then((textContent) => {
          setText(textContent);
          api.start({ opacity: 1 })
        });
    }
  }, []);

  return (
    <Container style={{maxWidth: '900px', marginLeft: 'initial', paddingTop: '16px'}}>
      <Typography component="span" variant="h5" style={{fontWeight: 300}}>HOME</Typography>

      <Divider style={{marginTop: '16px', marginBottom: '16px'}}/>

      <animated.div style={styles}>
        {text && <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />}
      </animated.div>

    </Container>
  );
}

export default AccountsView;