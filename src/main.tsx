import React from "react";
import ReactDOM from "react-dom";

import Container from "./container";

ReactDOM.render(<Container />, document.querySelector(".app"));

declare const module;

if (module.hot) {
	module.hot.accept(["./container"], () => {
		ReactDOM.render(<Container />, document.querySelector(".app"));
	});
}
