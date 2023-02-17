import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";
class Inventory extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
  };

  authHandler = async (authData) => {
    //lookup the current store in the firebase DB
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    //claim it if there is no owner
    if (!store.owner) {
      //save as the users
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid,
      });
    }
    //set the state of the inventory component to reflect the current user

    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };
  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <>
        <div className="inventory">
          <h2>Inventory</h2>
          {Object.keys(this.props.fishes).map((key) => (
            <EditFishForm
              key={key}
              index={key}
              fish={this.props.fishes[key]}
              updateFish={this.props.updateFish}
              deleteFish={this.props.deleteFish}
            />
          ))}
          <AddFishForm addFish={this.props.addFish} />
          <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
        </div>
      </>
    );
  }
}

export default Inventory;
