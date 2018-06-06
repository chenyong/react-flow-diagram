import React from "react";
import produce from "immer";
import _ from "lodash";

interface IProps {}

interface IState {}

export default class FlowDiagram extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);

		this.state = {};
	}

	setImmerState(f: (s: IState) => void) {
		this.setState(produce(f));
	}

	render() {
		return <div>this is the diagram</div>;
	}
}
