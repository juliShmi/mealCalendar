import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (recipe) => {
    setRecipes(prev => [...prev, recipe]);
  };

  return (
    <div>
      {/* Кнопки навигации */}
      <div style={{ marginBottom: '20px' }}>
        <Link to="/recipes">
          <button>My Recipes</button>
        </Link>
        <Link to="/recipes/new" style={{ marginLeft: '10px' }}>
          <button>Add New Recipe</button>
        </Link>
      </div>

      {/* Вложенные маршруты */}
      <Routes>
        <Route index element={<RecipeList recipes={recipes} />} />
        <Route path="new" element={<RecipeForm onCreate={addRecipe} />} />
      </Routes>
    </div>
  );
}

export default Recipes;
