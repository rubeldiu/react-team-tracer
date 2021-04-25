import React, { useState, useEffect } from "react";
import {useParams } from "react-router";
import RoomIcon from "@material-ui/icons/Room";
import FlagIcon from "@material-ui/icons/Flag";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.dark,
    height: 400,
    display: "flex",
  },
  image: {
    width: 200 ,
    height: 200 ,
    margin: "auto",
  },
  iconWrapper: {
    backgroundColor: theme.palette.background.default,
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(2),
  },
  card: {
    height: 300
  },
  text: {
    textAlign: 'center',
},
largeIcon: {
    fontSize: "3em"
  },
paragraph: {
    marginBottom: theme.spacing(3)
  },
 
  
}));

const TeamDetails = () => {
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState({});

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeamDetails(data.teams[0]));
  }, [id]);
  const classes = useStyles();

  //Conditional rendering Male/Female image 
  let teamImage =teamDetails.strGender;
  let imgUrl;
  console.log(teamDetails);
  if(teamImage==='Male'){
    imgUrl=maleImage;
  }else{
    imgUrl=femaleImage;
  }
  
  //Conditional rendering banner image 
  let defaultbg="https://images.unsplash.com/photo-1559579313-021b6ec9f6d6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80";
  let background =teamDetails.strStadiumThumb;
  let backUrl;
  if(background){
    backUrl=background;
  }else {
    backUrl=defaultbg;
  }


  return (
    <div>
      <section className={classes.section} style={{backgroundImage:`url(${backUrl})`}}>
        <img src={teamDetails.strTeamBadge} alt="" className={classes.image} />
      </section>
      <section style={{backgroundColor:'blue', color:'white'}}>
        <Container maxWidth="lg">
          <Box py={12}>
            <Grid container spacing={8}>
              <Grid item xs={12} md={6}>
                <div>
                  <Typography  variant="h5" component="span">
                    Team Name: {teamDetails.strTeam}{" "}
                  </Typography>
                  <Box display="flex" mb={1}>
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <RoomIcon color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Founded : {teamDetails.intFormedYear}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" mb={1}>
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <FlagIcon color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Country :{teamDetails.strCountry}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" mb={1}>
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <SportsSoccerIcon color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Sport Type :{teamDetails.strSport}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" mb={1}>
                    <div>
                      <Avatar className={classes.iconWrapper}>
                        <PersonPinIcon color="primary" fontSize="small" />
                      </Avatar>
                    </div>
                    <Box ml={2}>
                      <Typography variant="h6" gutterBottom={true}>
                        Gender :{teamDetails.strGender}
                      </Typography>
                    </Box>
                  </Box>
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card>
                  <CardMedia
                    image={imgUrl}
                    className={classes.card}
                  />
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section>
        <Container maxWidth="lg">
        <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{teamDetails.strDescriptionES}</Typography>
        <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.paragraph}>{teamDetails.strDescriptionEN}</Typography>
        </Container>
      </section>

      <section className={classes.text}>
          
        <Container maxWidth="lg">
          <Box ml={2} >
            <Typography variant="h6" gutterBottom={true}>
              Social Media
            </Typography>
            <IconButton   href={"https://"+teamDetails.strFacebook} target="_blank" color="inherit">
              <FacebookIcon style={{color:"#4267B2"}} className={classes.largeIcon}/>
            </IconButton>           
            <IconButton href={"https://"+teamDetails.strTwitter} target="_blank" color="inherit">
              <TwitterIcon style={{color:"#00acee"}} className={classes.largeIcon}/>
            </IconButton>
            <IconButton href={"https://"+teamDetails.strYoutube} target="_blank" color="inherit">
              <YouTubeIcon  style={{color:'red'}} className={classes.largeIcon}/>
            </IconButton>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default TeamDetails;
