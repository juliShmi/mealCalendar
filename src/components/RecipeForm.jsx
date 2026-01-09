import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm({ onCreate }) {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [ingredients, setIngredients] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newRecipe = ({
        id: Date.now(),
        name,
        ingredients: ingredients.split(',').map(i => i.trim()),
        time: Number(time),
      });
  
      onCreate(newRecipe);
    resetForm();
    navigate('/recipes');
    };

    const resetForm = () => {
      setName('');
      setTime('');
      setIngredients(['']);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        <input type="text" placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    );
  }

export default RecipeForm;