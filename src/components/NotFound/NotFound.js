import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    const history = useHistory();
    return (
        <section>
  <Container maxWidth="md">
    <Box pt={8} pb={10} textAlign="center">
      <Typography variant="h1">404</Typography>
      <Typography variant="h4" component="h2" gutterBottom={true}>Page not found</Typography>
      <Typography variant="subtitle1" color="textSecondary">The requested page couldn't be located. Checkout for any URL misspelling.</Typography>
      <Box mt={4}>
      <Button variant="contained" color="primary" onClick={()=>history.push('/')}>Return to the homepage</Button>
      </Box>
    </Box>
  </Container>
</section>
    );
};

export default NotFound;