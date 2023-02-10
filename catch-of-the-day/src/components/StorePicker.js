import React from "react";

class StorePicker extends React.Component {
	render() {
		// return React.createElement('p',{className: 'hey'}, 'Heyoooo') this is NON JSX
		// return (//cannot return children
		// 	<form className="store-selector">
		// 		<h2>Please Enter A Store</h2>
		// 	</form>
		// )
		return (//The <> </> is the equivalent of <React.Fragment> </React.Fragment>
			<>
				<form className="store-selector">
					{/* comment in JSX and has to be this way when inside the returned element that is in JSX*/}
					<h2>Please Enter A Store</h2>
					<input type={"text"} required placeholder={"Store Name"}/>
					<button type={"submit"}>Visit Store ➡️</button>
				</form>
			</>
		)
	}
}

export default StorePicker