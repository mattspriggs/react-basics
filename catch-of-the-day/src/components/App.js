import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";
import PropTypes from "prop-types";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  static propTypes = { match: PropTypes.object };
  componentDidMount() {
    const { params } = this.props.match;
    //first reinstate local storage
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }

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

  updateFish = (key, updatedFish) => {
    //Make a copy of the current state
    const fishes = { ...this.state.fishes };
    //update the state
    fishes[key] = updatedFish;
    //Set that to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    //make a copy of state
    const fishes = { ...this.state.fishes };
    //update the state
    fishes[key] = null;
    //update state
    this.setState({ fishes });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //take a copy of state
    const order = { ...this.state.order };
    //Either add to the order or update to our order
    order[key] = order[key] + 1 || 1;
    //call setState to update the state object
    // this.setState({order:order});
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    //make a copy of state
    const order = { ...this.state.order };
    //update the state
    delete order[key];
    //update state
    this.setState({ order });
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
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        {/*Could use {...this.state} to spread and pass the entire state to a component*/}
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          addFish={this.addFish}
          updateFish={this.updateFish}
          deleteFish={this.deleteFish}
          loadSamples={this.loadSampleFishes}
          fishes={this.state.fishes}
          storeId={this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
