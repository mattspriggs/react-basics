import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = (fish) => {
    //take a copy of the existing state - never reach directly into state
    const fishes = { ...this.state.fishes };
    //add the new fish to fishes
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes object into state
    this.setState({
      //fishes: fishes, //Overwrites the fishes in state
      fishes,
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/*The below component is being passed data within it's tag, such as tagline, that allows for the
             information to be dynamic*/}
          <Header tagline={"Fresh Seafood Market"} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSampleFishes} />
      </div>
    );
  }
}

export default App;
