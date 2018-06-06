import React from "react";
import { css, cx } from "emotion";
import produce from "immer";
import _ from "lodash";

import DiagramCard from "./card";
import DiagramLine from "./line";

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
		return (
			<svg width={400} height={400} className={styleSvg}>
				<DiagramCard x={30} y={40} />
			</svg>
		);
	}
}

const styleSvg = css`
	background-color: #eee;
`;
