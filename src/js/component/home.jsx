import React from "react";
import { useState } from "react";

const Home = () => {

const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([])

const handleKeyDown = (e) => {
	if(e.key === "Enter") {
	setTodos(todos.concat(inputValue));
	setInputValue("");
	}
};

	return (
		<div className="container">
			<h1>To do List</h1>
			<ul>
				<li>
					<input type="text" placeholder="What needs to be done?" 
					value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
				</li>
				{todos.map((t) => (<li>{t} <i class="fa-solid fa-x"></i> </li>))}
			</ul>
			<div className="footer">23 Tasks</div>
		</div>
	);
};

export default Home;
