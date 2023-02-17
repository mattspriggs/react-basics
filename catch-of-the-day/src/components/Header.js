import React from "react";
import PropTypes from "prop-types";
// Below is a stateless component
const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of"> Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      {/*The this. below refers to the instance of the Header component*/}
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired, //PropTypes is a form of validating the data and also provided good error
  // messaging to debug with
};
// The below is a full component with state (memory) attached to it
// class Header extends React.Component {
//   render() {
//     return (
//       <>
//         <header className="top">
//           <h1>
//             Catch
//             <span className="ofThe">
//               <span className="of"> Of</span>
//               <span className="the">The</span>
//             </span>
//             Day
//           </h1>
//           <h3 className="tagline">
//             {/*The this. below refers to the instance of the Header component*/}
//             <span>{this.props.tagline}</span>
//           </h3>
//         </header>
//       </>
//     );
//   }
// }

export default Header;
