import { Routes, Route, Navigate } from 'react-router-dom';
import Recipes from './components/Recipes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/recipes" />} />
        <Route path="/recipes/*" element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;