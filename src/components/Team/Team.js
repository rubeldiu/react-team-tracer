import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 320,
    marginBottom: "20px",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    textAlign: "center",
  },

  avatar: {
    width: "100%",
    height: 300,
    marginBottom: theme.spacing(2),
  },
}));

const Team = ({ team }) => {
  const { idTeam, strTeam, strSport, strTeamBadge } = team;
  const classes = useStyles();

  const history = useHistory();
  const showTeamDetails = (id) => {
    const url = `/teamdetails/${idTeam}`;
    history.push(url);
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <div style={{width:'300px',height:'300px'}}>
        <Avatar
          alt=""
          variant="rounded"
          src={strTeamBadge}
          className={classes.avatar}
        />
        </div>
        <Typography
          className={classes.text}
          variant="h3"
          component="h6"
          gutterBottom={true}
        >
          {strTeam}
        </Typography>

        <Typography
          className={classes.text}
          variant="h5"
          component="h6"
          color="textSecondary"
        >
          Sport type: {strSport}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ margin: "0 auto" }}
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => showTeamDetails(idTeam)}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default Team;
