//import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import ShippingForm from './views/ShippingForm';
import ListShippings from './views/ListShippings';

function App() {
  return (
    <div className="App">
    {/* <NavBar />
    <ShippingForm /> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <NavBar navLink={{ path: "/orders", Lable: "View Orders" }} />
            <ShippingForm />
          </Route>
          <Route path="/orders">
            <NavBar navLink={{ path: "/", Lable: "Home" }} />
            <ListShippings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;