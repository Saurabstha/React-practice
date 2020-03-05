// import React from 'react';
// import logo from './logo.svg';
// import Button, {Button2} from './components/button';

// import './App.css';

// function App() {
//   return (

//   	<div>
// 	    <div>Hello World</div>
// 	    <Button />
// 	    <Button2 />
//     </div>
//   );
// }

// export default App;




// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//     return (
//        <div className="container">
//         <div className="col-xs-8">
//         <h1>React Axios Example</h1>
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">My User</h5>
//             </div>
//           </div>
//         </div>
//        </div>
//     );
//   }
// }
// export default App;


// // jsonplaceholder(and custom shipment api) with react class component
// import React, { Component } from 'react';
// import axios from 'axios';
// // const API_URL = 'http://jsonplaceholder.typicode.com';
// const API_URL = 'http://192.168.1.127:8000/api/lstaff/shipment-location/lists/';


// class App extends Component {
//   state = {
//     users: []
//   }
//   componentDidMount() {
//     axios.get(API_URL).then(response => response.data)
//     .then((data) => {
// 		console.log(data.results)     
// 	 })
// 	 .catch(function (error) {
// 		// handle error
// 		console.log(error, "Error ayo hai");
// 	  })
//   }
//   render() {

//     return (
//        <div className="container">
//         <div className="col-xs-8">
//         <h1>React Axios Example</h1>

//         </div>
//        </div>
//     );
//   }
// }
// export default App;


////// Todo App rect with hook

// import React, { useState } from 'react';
// import "./App.css";

// function TodoForm({ addTodo }) {
// 	const [value, setValue] = useState("");
  
// 	const handleSubmit = e => {
// 	  e.preventDefault();
// 	  if (!value) return;
// 	  addTodo(value);
// 	  setValue("");
// 	};
  
// 	return (
// 	  <form onSubmit={handleSubmit}>
// 		<input
// 		  type="text"
// 		  className="input"
// 		  value={value}
// 		  onChange={e => setValue(e.target.value)}
// 		/>
// 	  </form>
// 	);
//   }

// function App() {
// 	const [todos, setTodos] = useState([
// 	  { text: "Learn about React" },
// 	  { text: "Meet friend for lunch" },
// 	  { text: "Build really cool todo app" }
// 	]);

// 	const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;

// 	const addTodo = text => {
// 		const newTodos = [...todos, { text }];
// 		setTodos(newTodos);
// 	  };

// 	return (
// 		<div className="app">
// 		  <div className="todo-list">
// 			{todos.map((todo, index) => (
// 			  <Todo
// 				key={index}
// 				index={index}
// 				todo={todo}
// 			  />
// 			))}
// 			<TodoForm addTodo={addTodo} />
// 		  </div>
// 		</div>
// 	  );

  
// 	// we'll render our todos here ...
// 	// return <div></div>
//   }

// export default App

// react+jsonplaceholder+hook

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then(result => setData(result.data));

//   }, []);

//   return (
//     <div>
//       <ul>
//         {data.map(item => (
//           <li key={item.username}>
//             {item.username}: {item.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//custom api_hooks

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   const [shipments, setShipments] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://192.168.1.127:8000/api/lstaff/shipment-location/lists/?status=incoming")
// 	  .then(result => {
// 		  console.log(result.data)
// 		  setShipments(result.data)
// 		})
// 		.catch(err => {
// 			console.log(err)
// 		})
		
//   }, []);

//   return (
//     <div>
//       <ul>
// 		  <h3>Shipment List</h3>
// 		  {
// 		  shipments.map((i) => {
// 			  return <li key={i.shipment}>{i.shipment}</li>
// 		  })
// 		  }
       
//       </ul>
//     </div>
//   );
// }

import React from 'react';
import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App(params) {
	return(
		<Router>
			<div className="App">
				<Nav/>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/shop" component={Shop} />
				</Switch>
			</div>
		</Router>
	);
	
}

const Home = () => (
	<div>
		<h1> Home </h1>
	</div>
);

export default App;