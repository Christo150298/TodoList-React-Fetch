import React from "react";
import { useState } from "react";

const Home = () => {

const [inputValue, setInputValue] = useState('');
const handleKeyDown = (e) => {
		if (e.key === 'Enter');
};

const validateInput = () => {
	if(inputValue === "");
}
	return (
		<div className="container">
			<h1>To do List</h1>
			<input type="text" placeholder="What needs to be done?" 
			value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
		</div>
	);
};

export default Home;
