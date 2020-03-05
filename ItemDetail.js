import React, { useState, useEffect } from 'react';
import './App.css';

function Item({ match }) {
    useEffect(() =>{
        fetchItem();
        console.log("match hai",match);
    }, []);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(
            // `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`
            `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
        );
        console.log("match id", `${match.params.id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log("itemmm",item);
    };


	return(
		<div>
			<h1>{item.title}</h1>                       
		</div>
	);
	
}

export default Item;