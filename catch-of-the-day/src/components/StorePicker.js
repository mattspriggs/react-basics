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
				<p>Fish!</p>
				<form className="store-selector">
					<h2>Please Enter A Store</h2>
				</form>
			</>
		)
	}
}

export default StorePicker