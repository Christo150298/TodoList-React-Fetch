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
		<div>
			<h1>To do List</h1>
			<ul>
				<li>
					<input type="text" placeholder="What needs to be done?" 
					value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
				</li>
				{todos.map((item, index) => 
				(<li>{item} 
					<i className="icono fa-solid fa-trash-can" 
						onClick={() => setTodos(todos.filter((secondItem, currentIndex) => index != currentIndex))}>
					</i> 
				</li>))}
			</ul>
			<div className="footer">{todos.length} Tasks</div>
		</div>
	);
};

export default Home;
