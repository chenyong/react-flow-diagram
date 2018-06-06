import React from "react";
import { css, cx } from "emotion";
import produce from "immer";

interface IProps {}

interface IState {}

export default class DiagramLine extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);

		this.state = {};
	}

	setImmerState(f: (s: IState) => void) {
		this.setState(produce(f));
	}

	render() {
		return <div>line</div>;
	}
}
