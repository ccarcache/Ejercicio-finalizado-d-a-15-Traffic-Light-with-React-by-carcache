import React from "react";

export class Semaforo extends React.Component {
	constructor() {
		super();
		this.state = {
			clickedLight: null
		};
	}

	render() {
		const redSelected = this.state.clickedLight == "red" ? "selected" : "";
		const greenSelected =
			this.state.clickedLight == "green" ? "selected" : "";
		const yellowSelected =
			this.state.clickedLight == "yellow" ? "selected" : "";

		console.log(this.state);
		return (
			<div>
				<div id="Base"></div>
				<div id="Case">
					<div
						className={"red light m-1 " + redSelected}
						onClick={() =>
							this.setState({ clickedLight: "red" })
						}></div>
					<div
						className={"yellow light m-1 " + yellowSelected}
						onClick={() =>
							this.setState({ clickedLight: "yellow" })
						}></div>
					<div
						className={"green light m-1 " + greenSelected}
						onClick={() =>
							this.setState({ clickedLight: "green" })
						}></div>
				</div>
			</div>
		);
	}
}
