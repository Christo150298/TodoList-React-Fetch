import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([])

//POST
const createUser = () =>{
	return(
	fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298', {
    method: "POST",
    body: JSON.stringify(todos),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(resp => console.log("Todo va en orden"))
  .catch(error => console.log("ERROR FATAL")));
}
useEffect(createUser, [])


//GET
const getTodos = () => {
	return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298')
		.then((res) => res.json())
		.then((res) => setTodos(res))
	)
}
useEffect(getTodos, []);

//PUT
const inserTodos = () => {
	return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298', {
		method: "PUT",
		body: JSON.stringify(todos),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then((res) => getTodos(res))
	.then(resp => console.log("Everything OK"))
	.catch(error => console.log("Something is wrong!!")) 
	)
} 

const handleKeyDown = (e) => {
	if(e.key === "Enter") {
	const newToDo = {
		id: (Math.random()*50).toFixed(2),
		todo: inputValue
	}
	setTodos(todos.concat(newToDo));
	setInputValue("");
	inserTodos();
	}
};
console.log(todos)
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
