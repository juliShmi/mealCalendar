import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeForm({ onCreate }) {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [ingredients, setIngredients] = useState(['']);
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newRecipe = ({
        id: Date.now(),
        name,
        ingredients: ingredients.filter(i => i.trim() !== ''),
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

    const addIngredient = () => {
      setIngredients([...ingredients, '']);
    };

    const handleIngredientChange = (index, value) => {
      const newIngredients = [...ingredients];
      newIngredients[index] = value;
      setIngredients(newIngredients);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
        
      <div style={{ marginTop: '10px' }}>
        <p>Ingredients:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', maxWidth: '300px' }}>
        {ingredients.map((ing, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Ingredient ${index + 1}`}
            value={ing}
            onChange={(e) => handleIngredientChange(index, e.target.value)}
          />
        ))}
        </div>
        <button type="button" onClick={addIngredient}>+</button>
      </div>
        <button type="submit">Create</button>
      </form>
    );
  }

export default RecipeForm;