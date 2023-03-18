import React from "react";
import { useState, useEffect } from "react";

const Home = () => {

const [inputValue, setInputValue] = useState("");
const [todos, setTodos] = useState([])

//POST
// const createUser = () =>{
// 	return(
// 	fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298', {
//     method: "POST",
//     body: JSON.stringify(todos),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(resp => console.log("Todo va en orden"))
//   .catch(error => console.log("ERROR FATAL")));
// }
// useEffect(createUser, [])


//GET
const getTodos = () => {
	return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298')
		.then((res) => res.json())
		.then((res) => setTodos(res))
		.catch(eror =>console.log(eror))
	)
}
useEffect(getTodos, []);

//PUT
const putTodos = (newList) => {
	console.log(newList)
	return(
		fetch('https://assets.breatheco.de/apis/fake/todos/user/christo150298', {
		method: "PUT",
		body: JSON.stringify(newList),
		headers: {
			"Content-Type": "application/json"
		}
	})
	.then((res) => getTodos(res))
	.then(resp => console.log("Everything OK"))
	.catch(error => console.log("Something is wrong!!")) 
	)
} 
const update = () => {
	if(inputValue !== ""){
	  const newElement = {
			label: inputValue,
			done: false
	  }
		setInputValue("");
		putTodos([...todos, newElement])
	}  
};

const handleKeyDown = (e) => {
	if(e.key === "Enter") {
		update();
	}
};
console.log(todos)
const handleDeleteToDo = (id) =>{
	const newListFilter = todos.filter((item) => id !== item.id)
	setTodos(newListFilter);
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
