import React from "react";
import { useState } from "react";

const Home = () => {

const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([])

const handleKeyDown = (e) => {
	if(e.key === "Enter") {
	const newToDo = {
		id: Math.random(),
		todo: inputValue
	}
	setTodos(todos.concat(newToDo));
	setInputValue("");
	}
};

const handleDeleteToDo = (id) =>{
	const newList = todos.filter((item) => id !== item.id)
	setTodos(newList);
}

	return (
		<div>
			<h1>To do List</h1>
			<ul>
				<li>
					<input type="text" placeholder="What needs to be done?" 
					value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
				</li>
				{todos.map((item) => 
				(<li key={item.id}>{item.todo} 
					<i className="icono fa-solid fa-trash-can" onClick={() => handleDeleteToDo(item.id)}></i> 
				</li>))}
			</ul>
			<div className="footer">{todos.length} Tasks</div>
		</div>
	);
};

export default Home;
