import React from "react"
import react from "react";
import { useState } from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	return (
        <div>
			<div className="traffic-top"></div>
			<div className="rounded colum" id="container"> 
			<div
					className={
						"light red " + (color == "red" ? "selected" : "")
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						"light yellow " + (color == "yellow" ? "selected" : "")
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						"light green " + (color == "green" ? "selected" : "")
					}
					onClick={() => setColor("green")}></div>


			</div>
		</div>
	);
};

export default Home;
