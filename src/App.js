import Sidear from "./components/sidebar/Sidear";
import Topbar from "./components/topbar/Topbar";
import "./app.css"
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Userlist from "./pages/userlist/Userlist";

function App() {
  return (
    <Router>
       <Topbar/>
      <div className="container">
      <Sidear/>
      <Switch>
       <Route exact path="/home">
       <Home/>
       </Route>
      </Switch>
      <Switch>
       <Route exact path="/users">
       <Userlist/>
       </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App;
