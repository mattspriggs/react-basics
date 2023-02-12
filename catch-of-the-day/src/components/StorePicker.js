import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    //Get text from input
    console.log(this);

    //change the page to /store/whatever was entered
  };
  render() {
    // return React.createElement('p',{className: 'hey'}, 'Heyoooo') this is NON JSX
    // return (//cannot return children
    // 	<form className="store-selector">
    // 		<h2>Please Enter A Store</h2>
    // 	</form>
    // )
    return (
      //The <> </> is the equivalent of <React.Fragment> </React.Fragment>
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* comment in JSX and has to be this way when inside the returned element that is in JSX*/}
          <h2>Please Enter A Store</h2>
          <input
            type={"text"}
            required
            ref={this.myInput}
            placeholder={"Store Name"}
            defaultValue={getFunName()}
          />
          <button type={"submit"}>Visit Store ➡️</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
