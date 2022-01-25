import React from "react";
import "./index.css";

export default function Result(props) {
	const back = () => {
		window.location.reload();
	};
	return (
		<div className="main">
			<h1 className={props.status}>{props.result}</h1>
			<button onClick={back}>New Game</button>
		</div>
	);
}
