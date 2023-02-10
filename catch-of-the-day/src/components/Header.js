import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header className={"top"}>
          <h1>Catch of the Day</h1>
        </header>
        <h3 className={"tagline"}>
          <span>Fresh Daily</span>
        </h3>
      </>
    );
  }
}
