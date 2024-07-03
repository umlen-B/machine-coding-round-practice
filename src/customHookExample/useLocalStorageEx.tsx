import React from 'react';
import useLocalStorage from '../customHooks//useLocalStorage';

const LocalStorageComponent = () => {
  const [name, setName] = useLocalStorage('name', 'John Doe');

  return (
    <div>
      <p>Name: {name}</p>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
};

export default LocalStorageComponent;
