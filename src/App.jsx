import { useState, useEffect } from 'react';
import Engineer from './components/engineer.jsx';
import './App.css';

function App() {
  const [engineerObj, setEngineerObj] = useState({
    name: '',
    count: 0,
  });
  const [engineersArray, setEngineersArray] = useState(() => {
    const storedState = localStorage.getItem('engineersArray');
    const engineersArray = JSON.parse(storedState);
    return engineersArray || [];
  });
  const addEngineer = (e) => {
    e.preventDefault();
    setEngineersArray([...engineersArray, engineerObj]);
    setEngineerObj({ ...engineerObj, name: '' });
  };

  const handleInputChange = (e) => {
    setEngineerObj({ ...engineerObj, name: e.target.value });
  };

  const resetLocalStorage = () => {
    localStorage.removeItem('engineersArray');
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem('engineersArray', JSON.stringify(engineersArray));
  }, [engineersArray]);

  return (
    <>
      <h1>Case Tracker</h1>
      <form onSubmit={addEngineer}>
        <input
          type="text"
          value={engineerObj.name}
          onChange={handleInputChange}
        />
        <button onClick={addEngineer}>Add Engineer</button>
      </form>
      {engineersArray.length <= 0 ? null : (
        <button onClick={resetLocalStorage}>Remove Engineers</button>
      )}
      <div className="engineers-container">
        {engineersArray.map((eng, k) => (
          <Engineer name={eng.name} count={eng.count} key={k} />
        ))}
      </div>
    </>
  );
}

export default App;
