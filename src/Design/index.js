import React, { useState } from "react";
import "./index.css";
import Result from "../Result";

const board = ["", "", "", "", "", "", "", "", ""];
export default function Design() {
	const [result, setResult] = useState();
	const [show, setShow] = useState(false);
	const [status, setStatus] = useState();
	const [isGameon, setGameStatus] = useState(true);
	const [currentPlayer, setPlayer] = useState("X");

	const winConditions = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const tic = (box) => {
		if (isValidate(parseInt(box.target.id)) && isGameon) {
			document.getElementById(box.target.id).innerText = currentPlayer;
			board[box.target.id] = currentPlayer;
			gameStatus();
			changeUser();
		}
	};

	const isValidate = (box) => {
		if (box.innerText === "X" || box.innerText === "O") {
			return false;
		} else {
			return true;
		}
	};

	const changeUser = () => {
		if (isGameon) {
			currentPlayer === "X" ? setPlayer("O") : setPlayer("X");
		}
	};

	const gameStatus = () => {
		for (let arrIndex = 0; arrIndex < winConditions.length; arrIndex++) {
			const winCondition = winConditions[arrIndex];
			const firstBox = board[winCondition[0]];
			const secondBox = board[winCondition[1]];
			const thirdBox = board[winCondition[2]];
			if (firstBox === "" || secondBox === "" || thirdBox === "") {
				continue;
			}
			if (firstBox === secondBox && secondBox === thirdBox) {
				setResult(`Player ${currentPlayer} Win`);
				setStatus("success");
				setTimeout(() => {
					setShow(true);
				}, 500);
				setGameStatus(false);
				break;
			}
		}
		if (!board.includes("")) {
			setResult("Game TIE");
			setStatus("tie");
			setTimeout(() => {
				setShow(true);
			}, 1000);
			return;
		}
	};
	return (
		<>
			{show ? (
				<Result
					winner={currentPlayer}
					status={status}
					result={result}
				/>
			) : (
				<div className="board" id="board">
					<div
						className="box"
						id="0"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="1"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="2"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="3"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="4"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="5"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="6"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="7"
						onClick={(e) => tic(e)}
					></div>
					<div
						className="box"
						id="8"
						onClick={(e) => tic(e)}
					></div>
				</div>
			)}
		</>
	);
}
