import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    section: {
        backgroundImage: 'url("https://images.unsplash.com/photo-1559579313-021b6ec9f6d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundColor: theme.palette.primary.dark,
        height:400
      },
      
  }));
const Header = () => {
    const classes=useStyles();
  return (
    <section className={classes.section}>
  <Container maxWidth="sm">
    <Box py={20} textAlign="center" color="common.white">
      <Typography variant="h3" component="h3" gutterBottom={true}>
        <Typography color="secondary" variant="h3" component="span">Soccer Snap </Typography>
      </Typography>
    </Box>
  </Container>
</section>
  );
};

export default Header;
