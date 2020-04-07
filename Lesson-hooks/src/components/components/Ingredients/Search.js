import React, { useState, useEffect } from 'react';
import axios from '../../axios';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const { search } = props;
  const [ filter, setFilter ] = useState('');

  useEffect(() => {

    const query = filter.length === 0 ? '' 
    :`?orderBy="title"&equalTo="${filter}"` 
    
    axios.get('/ingredients.json' + query)
         .then(res => {
           let newData = [];
           for ( let key in res.data){
             newData.push({
               id: key,
               title: res.data[key].title,
               amount: res.data[key].amount
             })
           }
           search(newData);
         }).catch(err => {
           console.log(err.message)
         })

  }, [filter, search]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text" value={filter} 
          onChange={(event) => setFilter(event.target.value)}/>
        </div>
      </Card>
    </section>
  );
});

export default Search;
