import React, { useState, useEffect } from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {
    useEffect(() =>{
        fetchItems();

    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://jsonplaceholder.typicode.com/posts'
        );
        const items = await data.json();
        console.log(items)
        // console.log(items[0].id);
        setItems(items);

    };

	return(
		<div>
			Shop
            {items.map(item => (
                <h6 key={item.id}>  
                <Link to={`/shop/${item.id}`}>{item.id}:{item.title}</Link>
                </h6>
            ))}            
		</div>
	);
	
}

export default Shop;