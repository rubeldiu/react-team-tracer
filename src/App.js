
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetails from './components/TeamDetails/TeamDetails';

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/teamdetails/:id">
            <TeamDetails/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
     
    </Router>
  );
}

export default App;
