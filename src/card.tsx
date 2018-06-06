import React from "react";
import { css, cx } from "emotion";
import produce from "immer";

interface IProps {
	x: number;
	y: number;
}

interface IState {}

export default class DiagramCard extends React.Component<IProps, IState> {
	constructor(props) {
		super(props);

		this.state = {};
	}

	setImmerState(f: (s: IState) => void) {
		this.setState(produce(f));
	}

	render() {
		return (
			<rect x={this.props.x} y={this.props.y} width={100} height={100} fill={"#aaf"} tabIndex={0}>
				card
			</rect>
		);
	}
}
