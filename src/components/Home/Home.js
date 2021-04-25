import { Box, Container, Grid, makeStyles} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Team from "../Team/Team";
import Header from "../Header/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    //backgroundColor: theme.palette.grey[500],
    backgroundColor: "#101010",
  },
}));
const Home = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeams(data.teams.splice(10,26)));
  }, []);
  const classes = useStyles();

  return (
    <section>
         <Header/>
      <Container  className={classes.root}>
        <Box>
          <Grid container spacing={6} >
            {teams.map((team) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={team.idTeam}
                style={{
                  textAlign: "center",
                }}
              >
                <Team  team={team} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Home;
