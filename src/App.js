import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Destination from './Destination/Destination';
import Header from './Header/Header';
import Home from './Home/Home';
import LogIn from './LogIn/LogIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';



export const UserContext = createContext()
export const TransportContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [transportName, setTransportName] = useState("")
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <TransportContext.Provider value={[transportName, setTransportName]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/destination/:transportName">
            <Destination></Destination>
          </PrivateRoute>
        </Switch>
      </Router>
      </TransportContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
