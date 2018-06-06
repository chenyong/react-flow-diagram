import React from "react";
import FlowDiagram from "./flow-diagram";

export default class Container extends React.Component<any, any> {
	render() {
		return (
			<div>
				<div>Container</div>
				<FlowDiagram />
			</div>
		);
	}
}
