import React, {useEffect,useState} from 'react';
import './App.css';
import Recipe from './components/Recipe'

function App() {

  const APP_ID = '4ba71c8a';
  const APP_KEY = 'd68e963bd0710625faa54cdd6642a3bb';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(()=>{ //Run everytime something re-renders
    getRecipes();
  },[query]); //Runs everytime whatever is in the array changes

  //Fetch API
  const getRecipes = async () => {
    const response = await fetch("https://api.edamam.com/search?q="+ query + "&app_id=" + APP_ID +"&app_key="+ APP_KEY)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value); //updates state everytime the onChange event triggers
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1 className="main-title">Recipe Search<img src="./assets/chef-hat.png" alt="main-icon"></img></h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="chicken"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
        <p style={{textAlign:"center",fontSize: "20px",letterSpacing:"2px"}}>Number of recipes: <strong>{recipes.length}</strong></p>
      <div className="recipes">
        {recipes.map(hit => (
          <Recipe data={hit.recipe} key={recipes.indexOf(hit)}></Recipe>
        ))}
      </div>
      
    </div>
  );
}

export default App;
