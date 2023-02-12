import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/*The below component is being passed data within it's tag, such as tagline, that allows for the
             information to be dynamic*/}
          <Header tagline={"Fresh Seafood Market"} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
